# Red Hat Open Training Program - Landing Page

A beautiful, interactive landing page for the Red Hat Open Training Program, featuring the Rapid Course Builder (RCB) tool and showcasing published training courses. Optimized for QR code access and GitHub Pages hosting.

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
   git commit -m "Initial commit: Open Training landing page"
   git branch -M main
   git remote add origin https://github.com/RedHatQuickCourses/RH1.git
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
   https://redhatquickcourses.github.io/RH1/
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

## Page Structure

The landing page includes:

1. **Header**: Animated red gradient with title "Are you 'the person in the red hat?'" and inspirational quote
2. **Open Training Program Card**: Description of the self-service content development model
3. **Tab Navigation**: "For Associates" and "For Partners" tabs
4. **For Associates Tab**:
   - Rapid Course Builder (RCB) section with early access badge
   - Process steps for creating courses
   - Benefits section
   - Coming soon features
5. **For Partners Tab**: Collaboration information and CTA
6. **Published Courses**: 7 courses with Associate and Partner links
7. **Resources Section**: Quick links and support information

## Customization

### Update Course Count
Edit the `targetCount` in the `useEffect` hook:
```javascript
const targetCount = 7; // Current course count
```

### Add More Courses
Update the `publishedCourses` array:
```javascript
const publishedCourses = [
  {
    title: "Course Name",
    contributors: "Contributor Name(s)",
    associateLink: "https://associate-link.com",
    partnerLink: "https://partner-link.com"
  },
  // Add more courses...
];
```

### Update RCB Tool Link
The RCB tool link is currently set to:
```javascript
href="http://72.32.49.189:8501/"
```
Update this if the RCB tool URL changes.

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
├── .nojekyll          # Prevents Jekyll processing
└── from-gemini.ts     # Original component file (reference)
```

## Key Features

### Open Training Program
- Self-service content development model
- Empowers subject matter experts to share knowledge
- Collaborative approach complementing formal development

### Rapid Course Builder (RCB)
- AI-powered drafting assistant
- Early access pilot program
- Streamlit-based interface
- Kerberos ID login (no password required)
- Access: http://72.32.49.189:8501/

### Published Courses
Currently displaying 7 published courses with:
- Course titles
- Contributor information
- Separate Associate and Partner links
- Links open in new tabs

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

