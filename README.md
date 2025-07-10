# Screaming Goat Collectibles Website

A modern, responsive website for Screaming Goat Collectibles built with HTML, CSS (Tailwind), and JavaScript.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Contact form with Netlify Forms integration
- Optimized for static hosting
- Pinegrow compatible
- Easy SVG replacement system

## File Structure

\`\`\`
/
├── index.html          # Main HTML file
├── netlify.toml        # Netlify configuration
├── logo.svg           # Header logo
├── 1.svg              # Mission section icon 1
├── 2.svg              # Mission section icon 2
├── 3.svg              # Mission section icon 3
├── hero-bg.jpg        # Hero background image
└── gallery-*.jpg      # Gallery images
\`\`\`

## SVG Replacement

To replace the SVG icons:

1. **Logo**: Replace `logo.svg` with your company logo
2. **Mission Icons**: Replace `1.svg`, `2.svg`, `3.svg` with your custom icons
3. All SVGs should be optimized and sized appropriately

## Deployment

### Netlify
1. Connect your repository to Netlify
2. The `netlify.toml` file will handle the build configuration
3. Forms will automatically work with Netlify Forms

### Other Static Hosts
The site is built with standard HTML/CSS/JS and will work on any static hosting platform.

## Pinegrow Compatibility

This site is fully compatible with Pinegrow Web Editor:
- Uses standard HTML structure
- Tailwind CSS via CDN
- No complex build processes
- Clean, semantic markup

## Customization

- Colors can be modified in the Tailwind config section
- Text content can be edited directly in the HTML
- Images should be placed in the root directory
- Forms are configured for Netlify but can be adapted for other services
