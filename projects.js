// Project data structure
// Each project should have: name, description, link, and optionally tags or other metadata

const projects = [
    {
        name: "Example Project 1",
        description: "This is a sample project demonstrating how the project index works. Replace this with real project data.",
        link: "https://github.com/example/project1",
        tags: ["web", "javascript"]
    },
    {
        name: "Demo Application",
        description: "A demonstration application showcasing modern web development practices and responsive design.",
        link: "https://github.com/example/demo-app",
        tags: ["react", "css", "responsive"]
    },
    {
        name: "Utility Library",
        description: "A collection of utility functions and helpers for common programming tasks. Well-documented and tested.",
        link: "https://github.com/example/utility-lib",
        tags: ["library", "utilities", "npm"]
    }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projects;
}