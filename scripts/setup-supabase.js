#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Error: Supabase credentials not found in .env.local');
  console.error('Please make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupDatabase() {
  console.log('🚀 Setting up your Supabase database...\n');

  try {
    // Step 1: Create the table
    console.log('📊 Creating news_posts table...');
    const { error: tableError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

        CREATE TABLE IF NOT EXISTS news_posts (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          title TEXT NOT NULL,
          content TEXT NOT NULL,
          image_url TEXT NOT NULL,
          published BOOLEAN DEFAULT true,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );

        CREATE INDEX IF NOT EXISTS idx_news_posts_created_at ON news_posts(created_at DESC);
        CREATE INDEX IF NOT EXISTS idx_news_posts_published ON news_posts(published);

        ALTER TABLE news_posts ENABLE ROW LEVEL SECURITY;

        DROP POLICY IF EXISTS "Allow public read access to published posts" ON news_posts;
        CREATE POLICY "Allow public read access to published posts"
          ON news_posts FOR SELECT USING (published = true);

        DROP POLICY IF EXISTS "Allow all operations for service role" ON news_posts;
        CREATE POLICY "Allow all operations for service role"
          ON news_posts FOR ALL USING (true) WITH CHECK (true);
      `
    });

    if (tableError) {
      console.log('⚠️  Note: Table creation via RPC not available. You need to run the SQL manually.');
      console.log('\n📋 Please follow these steps:');
      console.log('1. Go to: https://supabase.com/dashboard/project/dkvapmdzddjnwwkpajww/sql/new');
      console.log('2. Copy the SQL from supabase/schema.sql');
      console.log('3. Paste it in the SQL Editor');
      console.log('4. Click "Run"\n');
    } else {
      console.log('✅ Table created successfully!\n');
    }

    // Step 2: Create storage bucket
    console.log('📁 Creating news-images storage bucket...');
    const { data: buckets, error: listError } = await supabase.storage.listBuckets();

    const bucketExists = buckets?.some(bucket => bucket.name === 'news-images');

    if (bucketExists) {
      console.log('✅ Storage bucket already exists!\n');
    } else {
      const { data, error: bucketError } = await supabase.storage.createBucket('news-images', {
        public: true,
        fileSizeLimit: 10485760, // 10MB
      });

      if (bucketError) {
        console.log('⚠️  Could not create bucket automatically.');
        console.log('\n📋 Please create it manually:');
        console.log('1. Go to: https://supabase.com/dashboard/project/dkvapmdzddjnwwkpajww/storage/buckets');
        console.log('2. Click "Create a new bucket"');
        console.log('3. Name it: news-images');
        console.log('4. Turn ON "Public bucket"');
        console.log('5. Click "Create bucket"\n');
      } else {
        console.log('✅ Storage bucket created successfully!\n');
      }
    }

    // Test connection
    console.log('🧪 Testing database connection...');
    const { data, error } = await supabase.from('news_posts').select('count');

    if (error) {
      console.log('⚠️  Could not connect to database.');
      console.log('Error:', error.message);
      console.log('\nℹ️  You may need to run the SQL manually (see instructions above).\n');
    } else {
      console.log('✅ Database connection successful!\n');
    }

    console.log('🎉 Setup complete!\n');
    console.log('Next steps:');
    console.log('1. Run: npm run dev');
    console.log('2. Open: http://localhost:3000');
    console.log('3. Go to: http://localhost:3000/admin');
    console.log('4. Password: aya_admin_2024');
    console.log('5. Start creating posts!\n');

  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    console.log('\n📋 Manual setup required:');
    console.log('See README.md for detailed instructions.');
    process.exit(1);
  }
}

setupDatabase();
