# Quick Start Guide - Custom Glove Designer

## 🚀 Get Started in 3 Steps

### Step 1: View Locally

Simply open `index.html` in your web browser. No installation required!

**Or use a local server:**

```bash
# Option 1: Using Python
python -m http.server 8000

# Option 2: Using npx (Node.js)
npx serve

# Then visit: http://localhost:8000
```

### Step 2: Test the Application

1. Select a leather type (Torino, Precision, Pro Leather, or Pro Soft)
2. Choose your throwing hand
3. Pick a web/shell style - notice how available sizes update automatically
4. Select your glove size
5. Customize colors for each section
6. Add embroidery if desired
7. Choose label, finger embroidery, and flag options
8. Accept the agreement
9. Fill in customer and payment information
10. Submit to see your order summary

### Step 3: Deploy to Netlify

#### Easiest Method: Drag & Drop

1. Visit [netlify.com](https://www.netlify.com/)
2. Sign up or log in (free account)
3. Drag the entire `Akadema_custom` folder onto the Netlify dashboard
4. Your site is live! 🎉

#### Alternative: Using Git

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit - Custom Glove Designer"

# Push to GitHub
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main

# Then connect in Netlify dashboard:
# 1. Click "New site from Git"
# 2. Choose your repository
# 3. Click "Deploy site"
```

#### Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## 📋 Features Checklist

- ✅ 4 Leather types with dynamic color restrictions
- ✅ 10 Web/shell styles with specific size options
- ✅ Full color customization (7+ colors)
- ✅ Optional embroidery (max 15 characters)
- ✅ Label and finger embroidery options
- ✅ Flag selection (9 options)
- ✅ Customer information form
- ✅ Payment details capture
- ✅ Order summary modal
- ✅ Progress tracking
- ✅ Responsive design (mobile & desktop)
- ✅ Form validation
- ✅ Accessibility (WCAG compliant)

## 🎨 Customization Tips

### Change Color Palette

Edit CSS custom properties in `styles.css`:

```css
:root {
  --color-primary: #3d2817;    /* Change main brown */
  --color-accent: #1565c0;     /* Change blue accent */
  /* etc. */
}
```

### Add New Glove Styles

Edit `data.js`:

```javascript
webStyles: [
  // ... existing styles
  {
    id: 'your-new-style',
    name: 'Your New Style Name',
    backType: 'Open',
    sizes: ['11', '11.5', '12']
  }
]
```

### Add New Colors

Edit `data.js`:

```javascript
colors: {
  standard: [
    // ... existing colors
    { id: 'purple', name: 'Purple', hex: '#9c27b0' }
  ]
}
```

## 🔧 Troubleshooting

### Form won't submit?
- Check that all required fields are filled
- Verify the agreement checkbox is checked
- Open browser console (F12) to see any errors

### Colors not updating?
- Make sure you've selected a leather type first
- Shell colors are restricted based on leather selection

### Size dropdown disabled?
- Select a web/shell style first
- Sizes populate based on the selected style

## 📧 Form Submission Options

### Option 1: Console Logging (Current)
- Form data is logged to browser console
- Check with F12 → Console tab

### Option 2: Netlify Forms
1. Add to `<form>` tag in `index.html`:
   ```html
   data-netlify="true" name="custom-glove"
   ```
2. Add hidden input:
   ```html
   <input type="hidden" name="form-name" value="custom-glove">
   ```
3. View submissions in Netlify dashboard

### Option 3: Email Service
Use EmailJS, Formspree, or similar service:
1. Sign up for service
2. Add their SDK to `index.html`
3. Update `confirmOrder()` in `app.js`

## 📱 Mobile Testing

Test on mobile devices:
- iPhone: Safari and Chrome
- Android: Chrome and Samsung Internet
- Tablet: iPad and Android tablets

## 🌐 Browser Support

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 💡 Pro Tips

1. **Progress Bar**: Watch it fill as you complete sections
2. **Color Swatches**: Visual indicators help you see your choices
3. **Dynamic Updates**: Options change based on your selections
4. **Summary Review**: Always review your order before confirming
5. **Mobile First**: Designed to work beautifully on phones

## 🚨 Important Notes

- **No Backend**: This is a static site (frontend only)
- **Form Data**: Currently logs to console - configure submission method
- **Production Ready**: Deploy as-is to Netlify, Vercel, or GitHub Pages
- **Customization**: All data in `data.js` is easily editable

## 📞 Support

For issues:
1. Check browser console for errors (F12)
2. Verify all files are present
3. Test in different browser
4. Check README.md for detailed docs

---

**Ready to Deploy?** Just drag your folder to Netlify! 🚀

