
const projectsData = [
    { 
        title: "Api",
        description: "Description of Project 1",
        imageSrc: "images/Api.png",
        link: "#"
    },
    {
        title: "Birthday gift",
        description: "Description of Project 2",
        imageSrc: "images/Birthdaygift.png",
        link: "#"
    }
    
    
];

// Function to create project cards
function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = project.imageSrc;
    img.alt = project.title;
    card.appendChild(img);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const title = document.createElement('h3');
    title.textContent = project.title;
    cardContent.appendChild(title);

    const description = document.createElement('p');
    description.textContent = project.description;
    cardContent.appendChild(description);

    const link = document.createElement('a');
    link.textContent = "Learn More";
    link.href = project.link;
    link.classList.add('learn-more');
    cardContent.appendChild(link);

    card.appendChild(cardContent);

    return card;
}

// Function to initialize projects
function initializeProjects() {
    const projectsContainer = document.getElementById('projects');
    projectsData.forEach(project => {
        const card = createProjectCard(project);
        projectsContainer.appendChild(card);
    });
}

// Call the initializeProjects function when the document is loaded
document.addEventListener('DOMContentLoaded', initializeProjects);
