# 🚀 BAANA Website Deployment Guide

This guide will help you deploy your new BAANA website to the internet using **GitHub Pages** (100% FREE).

## Prerequisites

- A GitHub account (free) - Sign up at https://github.com
- Your website files (already created in `baana-website-redesign` folder)

## Step-by-Step Deployment

### Step 1: Install Git (if not already installed)

**For Mac:**
```bash
# Git is usually pre-installed. Check with:
git --version

# If not installed, install via Homebrew:
brew install git
```

**For Windows:**
- Download from: https://git-scm.com/download/win
- Run the installer with default settings

### Step 2: Create a GitHub Account

1. Go to https://github.com
2. Click "Sign up"
3. Follow the registration process
4. Verify your email address

### Step 3: Create a New Repository

1. Log in to GitHub
2. Click the "+" icon in the top right
3. Select "New repository"
4. Repository name: `baana-website` (or any name you prefer)
5. Description: "BAANA - Bhojpuri Awadhi Association of North America Website"
6. Select "Public"
7. **DO NOT** check "Initialize with README"
8. Click "Create repository"

### Step 4: Upload Your Website to GitHub

Open Terminal (Mac) or Command Prompt (Windows) and run these commands:

```bash
# Navigate to your website folder
cd /Users/souravkumar/Desktop/baana-website-redesign

# Initialize Git
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit - BAANA website redesign"

# Add your GitHub repository as remote
# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/baana-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** You'll be asked for your GitHub username and password. For password, use a Personal Access Token:
1. Go to GitHub Settings > Developer settings > Personal access tokens
2. Generate new token (classic)
3. Select "repo" scope
4. Copy the token and use it as your password

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait 1-2 minutes for deployment
7. Your site will be live at: `https://YOUR-USERNAME.github.io/baana-website/`

### Step 6: Add Custom Domain (Optional)

To use your existing domain `baanausa.org`:

1. **In GitHub:**
   - Go to repository Settings > Pages
   - Under "Custom domain", enter: `baanausa.org`
   - Click "Save"
   - Check "Enforce HTTPS" (after DNS propagates)

2. **Update DNS Settings:**
   - Log in to your domain registrar (where you bought baanausa.org)
   - Go to DNS settings
   - Add these records:

   **For apex domain (baanausa.org):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   ```

3. **Wait for DNS propagation** (can take 24-48 hours)
4. Your site will be live at `https://baanausa.org`

## Alternative: Deploy to Netlify (Even Easier!)

### Option 1: Drag & Drop (No Git Required)

1. Go to https://www.netlify.com
2. Sign up for free
3. Click "Add new site" > "Deploy manually"
4. Drag the `baana-website-redesign` folder to the upload area
5. Your site is live instantly!
6. Netlify gives you a URL like: `random-name-123.netlify.app`

### Option 2: Connect to GitHub

1. Push your code to GitHub (follow steps above)
2. Sign up at Netlify
3. Click "Add new site" > "Import from Git"
4. Connect your GitHub account
5. Select your repository
6. Click "Deploy site"
7. Automatic deployments on every push!

### Add Custom Domain on Netlify

1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Enter: `baanausa.org`
4. Follow Netlify's DNS instructions
5. Netlify provides free SSL certificate automatically!

## Updating Your Website

### After Initial Deployment

Whenever you make changes to your website:

```bash
# Navigate to your website folder
cd /Users/souravkumar/Desktop/baana-website-redesign

# Add changed files
git add .

# Commit with a message describing changes
git commit -m "Updated event dates and added new photos"

# Push to GitHub
git push origin main
```

**GitHub Pages:** Changes appear in 1-2 minutes
**Netlify:** Changes appear instantly

## Adding Images

1. Add your images to the appropriate folders:
   - `images/` - Main images
   - `images/gallery/` - Gallery photos
   - `images/partners/` - Partner logos

2. Commit and push:
```bash
git add images/
git commit -m "Added event photos"
git push origin main
```

## Troubleshooting

### Site not loading?
- Wait 2-3 minutes after first deployment
- Check GitHub Pages settings are correct
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Images not showing?
- Check file paths are correct
- Ensure images are in the right folders
- File names are case-sensitive on servers

### Custom domain not working?
- DNS changes take 24-48 hours
- Verify DNS records are correct
- Check domain registrar settings

### Need help?
- GitHub Pages docs: https://docs.github.com/pages
- Netlify docs: https://docs.netlify.com
- Contact: info@baanausa.org

## Quick Reference Commands

```bash
# Check status
git status

# See what changed
git diff

# View commit history
git log

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Pull latest changes
git pull origin main
```

## Security Tips

1. Never commit sensitive information (passwords, API keys)
2. Use environment variables for secrets
3. Enable HTTPS (automatic with GitHub Pages and Netlify)
4. Keep your GitHub account secure with 2FA

## Next Steps

1. ✅ Deploy website
2. ✅ Test on mobile devices
3. ✅ Add your actual images
4. ✅ Update social media links
5. ✅ Set up contact form (Formspree or Netlify Forms)
6. ✅ Submit to Google Search Console
7. ✅ Share with your community!

---

**Need Help?** Contact info@baanausa.org or call +1 469 630 2262

**Last Updated:** May 2026