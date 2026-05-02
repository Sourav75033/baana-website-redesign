# BAANA Website - Modern Redesign

A modern, mobile-friendly website for the Bhojpuri Awadhi Association of North America (BAANA).

## 🌟 Features

- **Modern, Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- **Mobile-First Navigation** - Hamburger menu for mobile devices
- **Fast Loading** - Optimized CSS and JavaScript, no heavy frameworks
- **Accessible** - WCAG compliant with semantic HTML and ARIA labels
- **Interactive Elements** - Smooth animations, lightbox gallery, scroll effects
- **SEO Optimized** - Proper meta tags and semantic structure

## 📁 Project Structure

```
baana-website-redesign/
├── index.html              # Homepage
├── about.html              # About Us page
├── community.html          # Community Engagement page
├── events.html             # Events Calendar page
├── gallery.html            # Photo Gallery page
├── contact.html            # Contact Us page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
├── images/                 # Image assets
│   ├── logo.png
│   ├── hero-buddha.jpg
│   ├── gallery/            # Gallery images
│   └── partners/           # Partner logos
└── assets/                 # Additional assets
```

## 🚀 Quick Start

### Option 1: Open Locally

1. Open `index.html` in your web browser
2. Navigate through the site using the menu

### Option 2: Use a Local Server

```bash
# Using Python 3
cd baana-website-redesign
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server -p 8000

# Then open: http://localhost:8000
```

## 📸 Adding Images

### Required Images

Place these images in the `images/` folder:

**Main Images:**
- `logo.png` - BAANA logo (recommended: 200x60px)
- `hero-buddha.jpg` - Homepage hero image (recommended: 1920x1080px)
- `about-hero.jpg` - About page hero
- `community-hero.jpg` - Community page hero
- `events-hero.jpg` - Events page hero
- `gallery-hero.jpg` - Gallery page hero
- `contact-hero.jpg` - Contact page hero

**Festival Images:**
- `makarsankranti.jpg`
- `holi.jpg`
- `bihar-day.jpg`
- `hartalika-teej.jpg`
- `annual-gala.jpg`
- `community-services.jpg`

**Gallery Images:**
Place in `images/gallery/` folder:
- `holi-1.jpg` through `holi-4.jpg`
- `bihar-diwas-1.jpg` through `bihar-diwas-4.jpg`
- `teej-1.jpg` through `teej-4.jpg`
- `gala-1.jpg` through `gala-4.jpg`
- And more...

**Partner Logos:**
Place in `images/partners/` folder:
- `bijusa.png`
- `bana.png`
- `dallas-gotra.png`
- `mepsc.png`
- `consulate-india.png`
- `iccr.png`
- `bihar-foundation.png`

### Image Optimization Tips

1. **Compress images** before uploading (use tools like TinyPNG, ImageOptim)
2. **Recommended formats:**
   - Photos: JPEG (quality 80-85%)
   - Logos: PNG with transparency
   - Icons: SVG when possible
3. **Recommended sizes:**
   - Hero images: 1920x1080px (max 500KB)
   - Gallery images: 800x800px (max 200KB)
   - Logos: 200x200px (max 50KB)

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended - FREE)

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com
   - Sign up for free

2. **Create a new repository**
   ```bash
   # Initialize git in your project folder
   cd baana-website-redesign
   git init
   git add .
   git commit -m "Initial commit - BAANA website redesign"
   ```

3. **Push to GitHub**
   - Create a new repository on GitHub (name it: `baana-website`)
   - Follow GitHub's instructions to push your code:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/baana-website.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Select "main" branch
   - Click Save
   - Your site will be live at: `https://YOUR-USERNAME.github.io/baana-website/`

5. **Custom Domain (Optional)**
   - In GitHub Pages settings, add your custom domain: `baanausa.org`
   - Update your domain's DNS settings (contact your domain registrar)
   - Add a CNAME record pointing to: `YOUR-USERNAME.github.io`

### Option 2: Netlify (Recommended - FREE)

1. **Sign up at Netlify**
   - Go to https://www.netlify.com
   - Sign up with GitHub, GitLab, or email

2. **Deploy via Drag & Drop**
   - Log in to Netlify
   - Drag the `baana-website-redesign` folder to the deploy area
   - Your site will be live instantly!

3. **Custom Domain**
   - Go to Site Settings > Domain Management
   - Add custom domain: `baanausa.org`
   - Follow Netlify's DNS configuration instructions

4. **Continuous Deployment (Optional)**
   - Connect your GitHub repository
   - Netlify will auto-deploy when you push changes

### Option 3: Traditional Web Hosting

1. **Get hosting** (GoDaddy, Bluehost, HostGator, etc.)
2. **Upload files via FTP/cPanel**
   - Upload all files to `public_html` or `www` folder
   - Maintain the folder structure
3. **Point domain** to hosting server
4. **Site will be live** at your domain

## 🔧 Customization Guide

### Updating Content

#### 1. Change Colors
Edit `css/styles.css` - look for CSS variables at the top:
```css
:root {
  --primary-color: #003d82;    /* Main blue color */
  --secondary-color: #ff9800;  /* Orange accent */
  --accent-color: #ffa726;     /* Light orange */
}
```

#### 2. Update Contact Information
Edit all HTML files - search for:
- Email: `info@baanausa.org`
- Phone: `+1 469 630 2262`
- Address: `Plano, TX 75023 USA`

#### 3. Add/Remove Events
Edit `events.html`:
- Find the events section
- Copy an existing event card
- Update the details (date, title, description)

#### 4. Update Social Media Links
Search for `https://facebook.com` and `https://instagram.com` in all HTML files
Replace with your actual social media URLs

#### 5. Modify Navigation Menu
Edit the `<nav>` section in each HTML file to add/remove menu items

### Adding New Pages

1. Copy an existing HTML file (e.g., `about.html`)
2. Rename it (e.g., `new-page.html`)
3. Update the content
4. Add a link to it in the navigation menu of all pages

## 📱 Testing

### Browser Testing
Test the website in:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Responsive Testing
Test on different screen sizes:
- 📱 Mobile: 320px - 480px
- 📱 Tablet: 768px - 1024px
- 💻 Desktop: 1200px+

### Tools
- Chrome DevTools (F12) - Device toolbar
- https://responsivedesignchecker.com
- https://www.browserstack.com (for cross-browser testing)

## 🔄 Updating the Website

### Method 1: Direct File Edit
1. Edit HTML/CSS/JS files locally
2. Test changes in browser
3. Upload changed files to hosting/GitHub

### Method 2: GitHub (if using GitHub Pages)
```bash
# Make changes to files
git add .
git commit -m "Description of changes"
git push origin main
# Site updates automatically!
```

### Method 3: Netlify (if using Netlify)
- Drag updated folder to Netlify
- Or push to connected GitHub repo

## 📧 Contact Form Setup

The contact form currently shows an alert. To make it functional:

### Option 1: Formspree (Easy, FREE)
1. Sign up at https://formspree.io
2. Create a new form
3. Update `contact.html` form action:
```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

### Option 2: Netlify Forms (if using Netlify)
1. Add `netlify` attribute to form:
```html
<form name="contact" method="POST" data-netlify="true">
```
2. Submissions appear in Netlify dashboard

### Option 3: EmailJS (FREE)
1. Sign up at https://www.emailjs.com
2. Follow their integration guide
3. Update the JavaScript in `js/main.js`

## 🛠️ Maintenance

### Regular Updates
- ✅ Update event dates and information
- ✅ Add new photos to gallery
- ✅ Update community statistics
- ✅ Refresh partner logos
- ✅ Check and fix broken links

### Security
- Keep contact form protected from spam (use reCAPTCHA)
- Regularly backup website files
- Monitor for broken links

### Performance
- Compress images before uploading
- Test site speed: https://pagespeed.web.dev
- Optimize if load time > 3 seconds

## 📞 Support

For questions or issues with the website:
- **Email:** info@baanausa.org
- **Phone:** +1 469 630 2262

## 📄 License

© 2026 Bhojpuriya and Awadhi Association of North America. All rights reserved.

---

**Developed & Maintained by:** Irisidea TechSolutions Pvt Ltd

**Last Updated:** May 2026