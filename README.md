# Personal Academic Website

A clean, minimal academic website template based on the [Minimal Academic Website](https://github.com/yuhui-zh15/Minimal-Academic-Website/) template.

## Features

- 🎨 Clean, minimalist design
- 📱 Fully responsive layout
- 🔍 SEO-friendly with meta tags
- 📚 Dynamic publications loading from JSON
- 🚀 Ready for GitHub Pages deployment
- ♿ Accessible design with proper focus states
- 🖨️ Print-friendly styles

## Quick Start

1. **Customize your information**: Edit `index.html` and replace all placeholders marked with `[brackets]`
2. **Add your profile photo**: Replace `images/profile.jpg` with your own photo
3. **Update publications**: Modify `publications.json` with your research papers
4. **Deploy to GitHub Pages**: Push to your GitHub repository and enable Pages in settings

## File Structure

```
.
├── index.html          # Main webpage
├── styles.css          # CSS styling
├── scripts.js          # JavaScript for dynamic content
├── publications.json   # Publication data
├── cv.pdf             # Your CV file
└── images/            # Image assets
    └── profile.jpg    # Profile photo
```

## Customization Guide

### 1. Personal Information
Edit the following sections in `index.html`:
- `[Your Name]` - Your full name
- `[Your Title/Position]` - Your current position
- `[Your Institution]` - Your university or organization
- `[your-email]` - Your email address
- `[Your Location]` - Your location
- Social media links (GitHub, LinkedIn, Google Scholar)

### 2. Content Sections
- **About**: Write a brief introduction about yourself
- **Research**: Describe your research interests
- **Publications**: Automatically loaded from `publications.json`
- **News**: Add recent news and updates
- **Contact**: Contact information

### 3. Publications
Edit `publications.json` to add your publications:

```json
[
    {
        "title": "Your Paper Title",
        "authors": "Your Name, Co-author 1, Co-author 2",
        "venue": "Journal/Conference Name, Year",
        "links": [
            {
                "type": "PDF",
                "url": "link-to-pdf"
            },
            {
                "type": "DOI",
                "url": "doi-link"
            }
        ]
    }
]
```

## GitHub Pages Deployment

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch" and choose "main" branch
4. Your site will be available at `https://[your-username].github.io`

## Local Development

To test your website locally:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Then visit http://localhost:8000
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

This project is based on the [Minimal Academic Website](https://github.com/yuhui-zh15/Minimal-Academic-Website/) template by Yuhui Zhang.

**Original Template License**: MIT License  
**Original Repository**: https://github.com/yuhui-zh15/Minimal-Academic-Website/
