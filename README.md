# Gary's Project List

A clean, responsive website for indexing and showcasing projects. Built with vanilla HTML, CSS, and JavaScript, designed to be hosted on GitHub Pages.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with gradient headers and card-based layout
- **Easy Updates**: Simple JavaScript array structure for adding/removing projects
- **GitHub Pages Ready**: Zero-configuration deployment to GitHub Pages
- **Accessible**: Semantic HTML and proper contrast ratios
- **Security**: XSS protection through HTML escaping

## Structure

- `index.html` - Main HTML page
- `styles.css` - All styling and responsive design
- `projects.js` - Project data array
- `main.js` - JavaScript functionality for rendering projects

## Adding Projects

To add new projects, edit the `projects.js` file and add objects to the `projects` array:

```javascript
{
    name: "Your Project Name",
    description: "A brief description of what your project does and why it's interesting.",
    link: "https://github.com/username/project-repo",
    tags: ["optional", "tags", "for", "future", "use"]
}
```

## Local Development

To test the website locally:

1. Clone this repository
2. Start a local HTTP server:
   ```bash
   python3 -m http.server 8000
   ```
3. Open http://localhost:8000 in your browser

## GitHub Pages Deployment

This website is configured to work with GitHub Pages. Once pushed to the main branch, it will be automatically available at:
`https://[username].github.io/[repository-name]`

## Future Enhancements

The codebase is designed to easily support future features like:
- Project filtering by tags
- Search functionality
- Dark mode toggle
- Project categories
- Image thumbnails