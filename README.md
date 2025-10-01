# Custom Glove Designer

A modern, responsive web application for designing custom Akadema baseball gloves. This single-page application provides an intuitive interface for users to customize every aspect of their glove, from leather type to embroidery details.

## Features

### 🎨 Customization Options

- **Leather Selection**: 4 premium leather types (Torino, Precision Leather, Pro Leather, Pro Soft)
- **Throw Hand**: Right or Left hand throw options
- **Web/Shell Styles**: 10 different web patterns with specific size options
- **Dynamic Sizing**: Available sizes automatically update based on selected web style
- **Color Customization**: 
  - Shell & Upper Thumb (leather-specific colors)
  - Pocket, Web, Lace, Welting, Stitch, Binding colors (7 standard colors)
- **Embroidery**: Optional personalized text (max 15 characters)
- **Branding**: Akadema label options and finger embroidery colors
- **Flag Selection**: 9 flag options including USA, Canada, Mexico, Japan, and more

### ✨ User Experience

- **Progress Tracking**: Visual progress bar showing completion status
- **Dynamic Form Logic**: Options update based on previous selections
- **Responsive Design**: Mobile-first design that works on all devices
- **Accessibility**: WCAG compliant with keyboard navigation and ARIA labels
- **Order Summary**: Review all selections before final submission
- **Validation**: Real-time form validation with helpful error messages

### 🎯 Design

- **Modern Sports Aesthetic**: Premium color palette with deep browns, tans, and accent blues
- **Clean Typography**: Inter font family for excellent readability
- **Smooth Animations**: Subtle transitions and animations for better UX
- **Color Swatches**: Visual color indicators for quick selection
- **Card-based Layout**: Organized sections with numbered steps

## Technology Stack

- **HTML5**: Semantic markup with accessibility in mind
- **CSS3**: Modern CSS with custom properties, Grid, and Flexbox
- **Vanilla JavaScript**: No dependencies, pure ES6+ JavaScript
- **Static Site**: Fully client-side application, no backend required

## File Structure

```
Akadema_custom/
│
├── index.html          # Main HTML structure
├── styles.css          # All styles and responsive design
├── app.js             # Application logic and interactivity
├── data.js            # Data definitions (styles, colors, etc.)
└── README.md          # This file
```

## Getting Started

### Local Development

1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. No build process or dependencies required!

### Testing Locally

You can use a simple HTTP server for testing:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Deployment

### Netlify Deployment (Recommended)

#### Option 1: Drag and Drop

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up or log in
3. Drag and drop your project folder onto the Netlify dashboard
4. Your site will be live in seconds!

#### Option 2: Git Integration

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to Netlify
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - **Build command**: (leave empty)
   - **Publish directory**: (leave as root or `.`)
6. Click "Deploy site"

#### Option 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# For production deployment
netlify deploy --prod
```

### Netlify Forms Integration (Optional)

To enable form submissions through Netlify Forms:

1. Add `data-netlify="true"` to the `<form>` tag in `index.html`:
   ```html
   <form id="gloveForm" data-netlify="true" name="custom-glove" novalidate>
   ```

2. Add a hidden input for the form name:
   ```html
   <input type="hidden" name="form-name" value="custom-glove" />
   ```

3. In `app.js`, uncomment the `submitToNetlify()` function call in the `confirmOrder()` function

4. Netlify will automatically detect the form and handle submissions

### Other Hosting Options

#### GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select the branch to deploy
4. Your site will be available at `https://username.github.io/repository-name`

#### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### AWS S3 + CloudFront

1. Create an S3 bucket
2. Enable static website hosting
3. Upload all files
4. (Optional) Set up CloudFront for CDN

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Adding New Glove Styles

Edit `data.js` and add new entries to the `webStyles` array:

```javascript
{
  id: 'new-style-id',
  name: 'New Style Name',
  backType: 'Open', // or 'Closed'
  sizes: ['11', '11.5', '12']
}
```

### Adding New Colors

Edit `data.js` and add colors to the appropriate array:

```javascript
{
  id: 'color-id',
  name: 'Color Name',
  hex: '#hexcode'
}
```

### Modifying Styles

All visual styles are in `styles.css`. Key CSS custom properties are defined in the `:root` selector:

```css
:root {
  --color-primary: #3d2817;
  --color-accent: #1565c0;
  /* etc. */
}
```

## Form Data Handling

The application currently logs form data to the console. To implement actual order processing:

### Option 1: Netlify Forms
- Enable Netlify Forms as described above
- View submissions in Netlify dashboard

### Option 2: Custom API
- Create a serverless function (AWS Lambda, Netlify Functions, etc.)
- Update `confirmOrder()` in `app.js` to POST to your API

### Option 3: Email Integration
- Use a service like EmailJS, Formspree, or SendGrid
- Add the service's SDK and configure in `app.js`

Example with EmailJS:

```javascript
// Add EmailJS SDK to index.html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

// In app.js
emailjs.send('service_id', 'template_id', formState)
  .then(() => console.log('Email sent'))
  .catch((error) => console.error('Error:', error));
```

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Color contrast compliance (WCAG AA)
- Form validation messages

## Performance

- No external dependencies
- Minimal JavaScript (~400 lines)
- Optimized CSS (~600 lines)
- Fast load times (<100ms)
- No framework overhead

## Future Enhancements

Potential features to add:

- [ ] Visual glove preview (3D or illustrated)
- [ ] Price calculator based on selections
- [ ] Save/load custom designs
- [ ] Share design via URL
- [ ] Image upload for custom logos
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Print-friendly order summary

## License

This project is provided as-is for Akadema custom glove orders.

## Support

For technical issues or questions about the application, please contact your development team.

For glove-related questions, contact Akadema directly.

## Credits

- **Design**: Modern sports-inspired UI
- **Font**: Inter by Rasmus Andersson
- **Icons**: Unicode symbols
- **Color Palette**: Custom Akadema-themed

---

**Built with ❤️ for Akadema Custom Gloves**

