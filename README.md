# Aya Liona - Premium Portfolio & News Website

A beautiful, modern website for content creator Aya Liona featuring a news timeline, about page, contact form, and admin interface for easy content management.

## Features

✨ **Premium Design**
- Modern gradient UI with purple/pink theme
- Smooth animations with Framer Motion
- Fully responsive (mobile, tablet, desktop)
- Dark mode support

📰 **News Timeline**
- Beautiful timeline layout with photos
- Easy photo upload interface
- Chronological display of posts
- Admin dashboard for content management

🎨 **Pages**
- **Home**: Hero section with animated elements
- **About**: Personal story and values
- **News**: Photo timeline of updates
- **Contact**: Contact form with social links
- **Admin**: Secure admin panel for posting news

🔐 **Simple Admin Authentication**
- Password-protected admin area
- Easy photo upload
- WYSIWYG content creation
- Post management (create, view, delete)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Supabase (PostgreSQL + Storage)
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Setup Instructions

### 1. Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works perfectly)

### 2. Clone & Install

```bash
# Clone the repository
git clone <your-repo-url>
cd aya-site

# Install dependencies
npm install
```

### 3. Set Up Supabase

#### Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Create a new project

#### Run the Database Schema
1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the contents of `supabase/schema.sql`
3. Paste and run it in the SQL Editor

#### Create Storage Bucket
1. Go to **Storage** in Supabase dashboard
2. Click "Create bucket"
3. Name it `news-images`
4. Set it to **Public**
5. Save

### 4. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Fill in your Supabase credentials in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
NEXT_PUBLIC_ADMIN_PASSWORD=your-secure-password
```

To find your Supabase credentials:
- Go to your Supabase project dashboard
- Click **Settings** → **API**
- Copy:
  - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
  - **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website!

## Usage

### Accessing the Admin Panel

1. Navigate to `/admin`
2. Enter the password you set in `.env.local`
3. Create news posts with photos!

### Creating a News Post

1. Go to the admin panel (`/admin`)
2. Fill in:
   - **Title**: The headline of your post
   - **Content**: The main text (supports line breaks)
   - **Image**: Upload a photo (JPG, PNG, etc.)
3. Click **Create Post**
4. Your post will appear on the `/news` page immediately!

### Managing Posts

- View all posts in the admin panel
- Delete posts by clicking the trash icon
- Posts appear in chronological order on the timeline

## Project Structure

```
aya-site/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── admin/             # Admin panel (password protected)
│   ├── contact/           # Contact form
│   ├── news/              # News timeline
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx     # Top navigation bar
│   └── Footer.tsx         # Footer with social links
├── lib/                   # Utilities
│   └── supabase.ts        # Supabase client
├── supabase/              # Database
│   └── schema.sql         # Database schema
└── public/                # Static assets
```

## Customization

### Change Colors

Edit `/app/globals.css`:

```css
:root {
  --primary: #8B5CF6;        /* Purple */
  --accent: #EC4899;         /* Pink */
  /* Change to your preferred colors */
}
```

### Update Social Links

Edit `/components/Footer.tsx` and `/app/contact/page.tsx` to add your real social media links.

### Change Admin Password

Update `NEXT_PUBLIC_ADMIN_PASSWORD` in `.env.local`

### Modify Content

- **Homepage**: Edit `/app/page.tsx`
- **About page**: Edit `/app/about/page.tsx`
- **Contact**: Edit `/app/contact/page.tsx`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_ADMIN_PASSWORD`
6. Click "Deploy"

Your site will be live in minutes! ✨

### Custom Domain

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your custom domain
3. Follow the DNS configuration instructions

## Support

If you encounter any issues:

1. Check that Supabase credentials are correct in `.env.local`
2. Ensure the database schema has been run
3. Verify the storage bucket is created and set to public
4. Check browser console for error messages

## License

This project is created for Aya Liona's personal website.

---

**Built with ❤️ using Next.js, Supabase, and Tailwind CSS**
