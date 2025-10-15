// Main JavaScript file for project list functionality

document.addEventListener('DOMContentLoaded', function() {
    const projectsList = document.getElementById('projects-list');
    
    // Show loading state
    projectsList.innerHTML = '<div class="loading">Loading projects...</div>';
    
    // Simulate a small delay to show loading state, then render projects
    setTimeout(() => {
        renderProjects();
    }, 300);
});

function renderProjects() {
    const projectsList = document.getElementById('projects-list');
    
    if (!projects || projects.length === 0) {
        projectsList.innerHTML = `
            <div class="empty-state">
                <h2>No projects yet</h2>
                <p>Projects will appear here when they are added to the list.</p>
            </div>
        `;
        return;
    }
    
    const projectsHTML = projects.map(project => createProjectCard(project)).join('');
    projectsList.innerHTML = projectsHTML;
}

function createProjectCard(project) {
    // Sanitize inputs to prevent XSS
    const safeName = escapeHtml(project.name || 'Untitled Project');
    const safeDescription = escapeHtml(project.description || 'No description available.');
    const safeLink = escapeHtml(project.link || '#');
    
    return `
        <div class="project-card">
            <h2 class="project-title">${safeName}</h2>
            <p class="project-description">${safeDescription}</p>
            <a href="${safeLink}" class="project-link" target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>
    `;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Function to add new projects (for future use)
function addProject(name, description, link) {
    const newProject = {
        name: name,
        description: description,
        link: link
    };
    
    projects.push(newProject);
    renderProjects();
}

// Function to update the project list (for future use)
function updateProjects(newProjectsArray) {
    projects.length = 0; // Clear existing projects
    projects.push(...newProjectsArray);
    renderProjects();
}