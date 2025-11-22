# Deployment Guide

## Deploying to Netlify

### Step 1: Push to GitHub

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Product Listing Page"
```

2. Create a new repository on GitHub named `appscrip-task-sahil` (or your name)

3. Push to GitHub:
```bash
git branch -M main
git remote add origin https://github.com/yourusername/appscrip-task-sahil.git
git push -u origin main
```

### Step 2: Deploy to Netlify

1. Go to [Netlify](https://www.netlify.com/) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account and select the repository `appscrip-task-sahil`
4. Netlify will auto-detect Next.js settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"
6. Wait for deployment to complete
7. Your site will be live at `https://random-name.netlify.app`

### Step 3: Update Robots.txt

After deployment, update the sitemap URL in `app/robots.ts` with your actual Netlify URL:
```typescript
sitemap: 'https://your-actual-site.netlify.app/sitemap.xml',
```

## Environment Variables

No environment variables are required for this project.

## Build Settings

The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Next.js plugin for optimal performance

## Verification Checklist

After deployment, verify:
- ✅ Page loads correctly
- ✅ Products are displayed
- ✅ Filters work (category, sort, search)
- ✅ Responsive design works on mobile/tablet
- ✅ Images load properly
- ✅ SEO meta tags are present (check page source)



