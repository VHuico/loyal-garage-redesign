# Loyal Garage - Modern Website Redesign

A modern, conversion-focused website for Loyal Garage, a garage door service business in El Paso, TX. Built with Next.js 14, TypeScript, and Tailwind CSS, optimized for GitHub Pages deployment.

## Features

- **Modern Design**: Clean, professional design with yellow/gold brand colors
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Comprehensive metadata and structured data for search engines
- **Performance**: Static site generation for fast loading times
- **Conversion Focused**: Multiple CTAs, booking forms, and contact options
- **Accessibility**: WCAG compliant with proper ARIA labels

## Sections

1. **Hero Section** - Eye-catching header with CTAs and trust badges
2. **Services** - Detailed service cards with pricing and features
3. **Why Choose Us** - Key differentiators and value propositions
4. **Portfolio** - Before/after gallery (placeholders for real photos)
5. **Testimonials** - Customer reviews and ratings
6. **About Us** - Company story and team information
7. **Service Area** - Coverage map for El Paso region
8. **Booking/Contact** - Form integration and contact details
9. **FAQ** - Common questions and answers
10. **Footer** - Complete contact info and site navigation

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React + React Icons
- **Deployment**: GitHub Pages (static export)
- **Forms**: Formspree integration (setup required)

## Getting Started

### Prerequisites

- Node.js 20+ and npm installed
- Git installed
- GitHub account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/loyal-garage-redesign.git
cd loyal-garage-redesign
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (creates /out folder)
npm run lint     # Run ESLint
```

## Deployment to GitHub Pages

### Step 1: Push to GitHub

1. Create a new repository on GitHub (e.g., `loyal-garage-website`)

2. Initialize git and push:
```bash
git init
git add .
git commit -m "Initial commit: Loyal Garage website redesign"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/loyal-garage-website.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. The workflow will automatically deploy on every push to main

### Step 3: Configure Custom Domain (loyalgarage.com)

#### In GitHub:

1. Go to **Settings** > **Pages**
2. Under "Custom domain", enter: `loyalgarage.com`
3. Click **Save**
4. Wait for DNS check (may take a few minutes)
5. Enable **Enforce HTTPS** once DNS is verified

#### In GoDaddy:

1. Log in to your GoDaddy account
2. Go to **My Products** > **DNS** for loyalgarage.com
3. Click **Manage DNS**

4. **Add/Update these DNS records:**

**For root domain (loyalgarage.com):**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 600 (or default)
```

Add three more A records with the same settings but different values:
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 600 (or default)
```

5. **Remove or update conflicting records:**
   - Delete any existing A records pointing to old hosting
   - Remove any conflicting CNAME records

6. **Save changes**

#### DNS Propagation

- DNS changes can take **15 minutes to 48 hours** to propagate
- Check status: [https://dnschecker.org](https://dnschecker.org)
- Once propagated, your site will be live at loyalgarage.com

## Configuration & Customization

### 1. Update Contact Information

Search and replace these placeholders throughout the codebase:

- **Phone**: Replace `(915) 555-0123` with actual phone number
- **Email**: Replace `info@loyalgarage.com` with actual email
- **Address**: Update service area details in `ServiceArea.tsx`

### 2. Set Up Formspree (Contact Form)

1. Sign up at [https://formspree.io](https://formspree.io) (free tier: 50 submissions/month)
2. Create a new form
3. Copy your form ID
4. In `components/Booking.tsx`, replace:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
   with your actual form ID

### 3. Add Real Images

Replace placeholder images in these folders:

```
public/images/
├── hero/           # Hero section background
├── portfolio/      # Before/after photos
├── team/           # About Us team photos
└── logos/          # Brand logos, certifications
```

Update image imports in components:
- `Hero.tsx` - Line 47 (hero image)
- `Portfolio.tsx` - Replace gradient placeholders
- `About.tsx` - Line 127 (team photo)

### 4. Update Social Media Links

In `components/Footer.tsx`, update these URLs:
- Facebook: Line 23
- Instagram: Line 31
- Yelp: Line 39

### 5. Google Services

**Google Analytics:**
- Add tracking code to `app/layout.tsx`

**Google Search Console:**
- Verify ownership in `app/layout.tsx` (line 52)
- Replace `your-google-verification-code` with actual code

**Google My Business:**
- Link to your GMB profile in testimonials section

### 6. Add Spanish Language Support (Optional)

Create translation files:
```
lib/
└── translations/
    ├── en.json
    └── es.json
```

Implement i18n using `next-intl` or similar library.

## Customization Tips

### Colors

Edit Tailwind config or use these classes:
- Primary (Yellow): `bg-yellow-500`, `text-yellow-500`
- Dark: `bg-gray-900`, `text-gray-900`
- Light: `bg-gray-50`

### Typography

Fonts are configured in `app/layout.tsx`:
- Headings: Montserrat (bold)
- Body: Inter

### Add New Sections

1. Create component in `components/`
2. Import and add to `app/page.tsx`
3. Update navigation in `Navigation.tsx`

## Performance Optimization

- Images are automatically optimized by Next.js
- Static export generates pure HTML/CSS/JS
- Tailwind CSS purges unused styles
- Lazy loading for images below the fold

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Troubleshooting

### GitHub Pages not updating

1. Check Actions tab for build errors
2. Ensure `gh-pages` branch exists
3. Verify Pages is enabled in Settings

### Custom domain not working

1. Wait 24-48 hours for DNS propagation
2. Check DNS records in GoDaddy
3. Verify CNAME file in repository
4. Try clearing browser cache

### Form not submitting

1. Verify Formspree form ID is correct
2. Check browser console for errors
3. Ensure CORS is enabled in Formspree settings

### Images not loading

1. Check file paths (use absolute paths from `/public`)
2. Verify images exist in `public/images/`
3. Check image file extensions match code

## Maintenance

### Regular Updates

- Review and respond to form submissions
- Update testimonials with new reviews
- Add new portfolio photos
- Check and fix broken links
- Update business hours/contact info as needed

### Dependencies

Update dependencies regularly:
```bash
npm update
npm audit fix
```

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **GitHub Pages**: https://docs.github.com/en/pages
- **Formspree**: https://help.formspree.io

## License

This project is proprietary and confidential. Unauthorized copying or distribution is prohibited.

---

## Quick Reference: Important Files

- `app/page.tsx` - Main page with all sections
- `app/layout.tsx` - SEO metadata and fonts
- `components/` - All page sections
- `next.config.ts` - Next.js configuration (static export)
- `.github/workflows/deploy.yml` - Auto-deployment script
- `public/` - Static assets (images, fonts)

## Next Steps After Deployment

1. ✅ Verify site is live at loyalgarage.com
2. ✅ Set up Formspree and test contact form
3. ✅ Add real photos to portfolio section
4. ✅ Update all phone numbers and contact info
5. ✅ Connect Google Analytics
6. ✅ Submit sitemap to Google Search Console
7. ✅ Set up Google My Business integration
8. ✅ Test mobile responsiveness on real devices
9. ✅ Run Lighthouse audit for performance
10. ✅ Share with team for feedback

---

**Built with ❤️ for Loyal Garage, El Paso's trusted garage door experts**
