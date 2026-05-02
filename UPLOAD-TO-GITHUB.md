# 📤 Upload Your Website to GitHub - Easy Method

Since Git command-line tools aren't installed, let's use GitHub's web interface - it's actually easier!

## 🎯 Method 1: GitHub Web Upload (EASIEST - 10 minutes)

### Step 1: Prepare Your Files

1. Go to your Desktop
2. Find the `baana-website-redesign` folder
3. **Create a ZIP file:**
   - Right-click on `baana-website-redesign` folder
   - Select "Compress baana-website-redesign"
   - This creates `baana-website-redesign.zip`

### Step 2: Upload to GitHub

1. **Go to your repository:**
   - Open: https://github.com/Sourav75033/BAANAUSA-Website

2. **Upload files:**
   - Click the "Add file" button (top right)
   - Select "Upload files"
   - Drag the ZIP file OR click "choose your files"
   - Select ALL files from the `baana-website-redesign` folder
   - **Important:** Upload the files directly, not the folder

3. **Files to upload:**
   ```
   ✅ index.html
   ✅ about.html
   ✅ community.html
   ✅ events.html
   ✅ gallery.html
   ✅ contact.html
   ✅ README.md
   ✅ DEPLOYMENT-GUIDE.md
   ✅ QUICK-START.md
   ✅ css/ folder (with styles.css inside)
   ✅ js/ folder (with main.js inside)
   ✅ images/ folder (with all images inside)
   ```

4. **Commit the files:**
   - Scroll down
   - In "Commit message" box, type: "Initial commit - BAANA website"
   - Click "Commit changes" button

### Step 3: Enable GitHub Pages

1. **Go to Settings:**
   - In your repository, click "Settings" tab
   - Scroll down to "Pages" in the left sidebar

2. **Configure Pages:**
   - Under "Source", select "main" branch
   - Click "Save"

3. **Wait 1-2 minutes**
   - GitHub will build your site
   - You'll see a message: "Your site is live at..."

4. **Your website will be live at:**
   ```
   https://sourav75033.github.io/BAANAUSA-Website/
   ```

## 🎯 Method 2: GitHub Desktop (Alternative)

If you prefer a desktop app:

1. **Download GitHub Desktop:**
   - Go to: https://desktop.github.com
   - Download and install

2. **Clone your repository:**
   - Open GitHub Desktop
   - File > Clone Repository
   - Select "Sourav75033/BAANAUSA-Website"
   - Choose location on your computer

3. **Copy your files:**
   - Copy all files from `baana-website-redesign` folder
   - Paste into the cloned repository folder

4. **Commit and push:**
   - GitHub Desktop will show all changes
   - Add commit message: "Initial commit - BAANA website"
   - Click "Commit to main"
   - Click "Push origin"

5. **Enable GitHub Pages** (same as Method 1, Step 3)

## 🌐 Connect Your Custom Domain

After your site is live, connect baanausa.org:

### Step 1: In GitHub

1. Go to Settings > Pages
2. Under "Custom domain", enter: `baanausa.org`
3. Click "Save"
4. Check "Enforce HTTPS" (after DNS propagates)

### Step 2: Update DNS Settings

1. **Log in to your domain registrar** (where you bought baanausa.org)
2. **Go to DNS settings**
3. **Add these A records:**
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

4. **Add CNAME record for www:**
   ```
   Type: CNAME
   Name: www
   Value: sourav75033.github.io
   ```

5. **Save changes**
6. **Wait 24-48 hours** for DNS to propagate

## ✅ Verification

After uploading, verify:

1. ✅ All files are in the repository
2. ✅ GitHub Pages is enabled
3. ✅ Site is accessible at: https://sourav75033.github.io/BAANAUSA-Website/
4. ✅ All pages work (click through navigation)
5. ✅ Images are showing
6. ✅ Mobile menu works

## 🔄 Updating Your Website Later

When you want to make changes:

### Using Web Interface:
1. Go to your repository
2. Click on the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes
5. Scroll down and click "Commit changes"
6. Changes appear on your site in 1-2 minutes

### Using GitHub Desktop:
1. Make changes to files locally
2. Open GitHub Desktop
3. Review changes
4. Commit with a message
5. Push to GitHub
6. Changes appear automatically

## 🆘 Troubleshooting

**Files not uploading?**
- Try uploading in smaller batches
- Upload folders separately (css, js, images)

**Site not showing?**
- Wait 2-3 minutes after enabling Pages
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check that index.html is in the root folder

**Images not showing?**
- Verify images folder uploaded correctly
- Check file names match (case-sensitive)

**Need help?**
- GitHub Support: https://support.github.com
- Email: info@baanausa.org

## 📝 Quick Checklist

- [ ] Files uploaded to GitHub repository
- [ ] GitHub Pages enabled
- [ ] Site accessible at GitHub URL
- [ ] All pages working
- [ ] Images displaying
- [ ] Mobile responsive
- [ ] Custom domain configured (optional)
- [ ] DNS updated (optional)

---

**Your Repository:** https://github.com/Sourav75033/BAANAUSA-Website  
**Your Live Site:** https://sourav75033.github.io/BAANAUSA-Website/ (after upload)  
**Custom Domain:** https://baanausa.org (after DNS setup)