# Red Hat Open Training - Landing Page

A beautiful, interactive landing page for the Red Hat Open Training Rapid Course Builder (RCB) program, optimized for QR code access and GitHub Pages hosting.

## Features

✨ **Interactive Elements:**
- Animated gradient header with sparkle particles
- Smooth scroll-triggered animations
- Interactive hover effects on cards and buttons
- Floating icon animations
- Pulse glow effects on CTAs
- Shimmer effects on buttons
- Animated course counter

🎨 **Design:**
- Red Hat branded color scheme (#EE0000)
- Responsive mobile-first design
- Tailwind CSS styling
- Smooth transitions and animations

📱 **QR Code Optimized:**
- Fast loading (single HTML file)
- Mobile-friendly layout
- Clear call-to-actions
- Easy navigation

## GitHub Pages Setup

### Option 1: Quick Setup (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: RCB landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR-ORG/YOUR-REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository Settings
   - Navigate to **Pages** (under Code and automation)
   - Under **Source**, select `main` branch
   - Select `/ (root)` as the folder
   - Click **Save**

3. **Your site will be live at:**
   ```
   https://YOUR-ORG.github.io/YOUR-REPO/
   ```

### Option 2: Using `gh-pages` Branch

If you prefer to keep your source files separate:

1. Create a `gh-pages` branch:
   ```bash
   git checkout -b gh-pages
   git push origin gh-pages
   ```

2. Enable GitHub Pages to use the `gh-pages` branch in Settings → Pages

### Option 3: Using GitHub Actions (Advanced)

For automatic deployments, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/configure-pages@v2
      - uses: actions/upload-pages-artifact@v1
        with:
          path: '.'
      - uses: actions/deploy-pages@v1
```

## Customization

### Update Course Count
Edit the `targetCount` in the `useEffect` hook (line ~30):
```javascript
const targetCount = 2; // Change to your actual course count
```

### Add More Courses
Update the `publishedCourses` array:
```javascript
const publishedCourses = [
  {
    title: "Course Name",
    desc: "Course description",
    link: "https://course-url.com"
  },
  // Add more courses...
];
```

### Customize Colors
The page uses Red Hat's brand color `#EE0000`. To customize:
- Search for `#EE0000` and replace with your color
- Update Tailwind config if using a build process

### Add Intake Form Embed
To embed the intake form directly:

1. Get the form embed code from your form provider
2. Add a modal or inline section:
```jsx
{showForm && (
  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-xl max-w-2xl">
      {/* Your form embed code here */}
    </div>
  </div>
)}
```

## File Structure

```
.
├── index.html          # Main landing page (single file)
├── README.md          # This file
└── .nojekyll          # Prevents Jekyll processing (if needed)
```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Single HTML file for fast loading
- CDN-hosted dependencies (React, Tailwind)
- Optimized animations (CSS-based where possible)
- Lazy loading ready

## QR Code Best Practices

1. **Test on Mobile:** Always test the QR code on actual mobile devices
2. **Short URL:** Consider using a URL shortener for the GitHub Pages URL
3. **Error Handling:** Ensure the page works offline or shows a helpful message
4. **Analytics:** Consider adding Google Analytics or similar for tracking

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

Copyright © 2026 Red Hat Open Training Initiative

---

**Build. Share. Revolutionize.** 🚀

