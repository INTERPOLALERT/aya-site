-- Aya Liona Website Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- News Posts Table
CREATE TABLE news_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT NOT NULL,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_news_posts_created_at ON news_posts(created_at DESC);
CREATE INDEX idx_news_posts_published ON news_posts(published);

-- Enable Row Level Security
ALTER TABLE news_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published posts
CREATE POLICY "Allow public read access to published posts"
  ON news_posts
  FOR SELECT
  USING (published = true);

-- Policy: Allow all operations for authenticated users (you can make this more specific)
CREATE POLICY "Allow all operations for service role"
  ON news_posts
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Storage Bucket for News Images
-- Go to Storage in Supabase Dashboard and create a bucket named "news-images"
-- Set it to public access
-- Or run this if you have access:
-- INSERT INTO storage.buckets (id, name, public) VALUES ('news-images', 'news-images', true);

-- Storage Policy: Anyone can read
-- CREATE POLICY "Public Access"
--   ON storage.objects FOR SELECT
--   USING (bucket_id = 'news-images');

-- Storage Policy: Anyone can upload (you may want to restrict this)
-- CREATE POLICY "Allow uploads"
--   ON storage.objects FOR INSERT
--   WITH CHECK (bucket_id = 'news-images');
