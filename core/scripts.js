class Skill {
  constructor({ name, url, img }) {
    this.name = name;
    this.url = url;
    this.img = img;
  }

  get html() {
    return `
      <div class="skill">
        <a href="${this.url}" target="_blank">
          <img src="${this.img}" alt="${this.name} Logo">
        </a>
        <span>${this.name}</span>
      </div>
    `;
  }
}

class Project {
  constructor({ title, summary, details, stack, dates }) {
    this.title = title;
    this.summary = summary;
    this.details = details;
    this.stack = stack;
    this.dates = dates;
  }

  get html() {
    return `
      <div class="project">
        <h3>${this.title}</h3>
        <p class="summary">${this.summary}</p>
        <p class="toggle-btn">Подробнее об этом проект</p>
        <div class="project-details">
          <p class="description">${this.details}</p>
          <p class="stack"><strong>Стек:</strong> ${this.stack}</p>
          <p class="dates">${this.dates}</p>
        </div>
      </div>
    `;
  }
}

function appendSkills(skills, container) {
  skills.forEach(skillData => {
    const skill = new Skill(skillData);
    container.insertAdjacentHTML('beforeend', skill.html);
  });
}

function appendProjects(projects, container) {
  projects.forEach(projectData => {
    const project = new Project(projectData);
    container.insertAdjacentHTML('beforeend', project.html);
    const projectDiv = container.lastElementChild;
    const toggleBtn = projectDiv.querySelector('.toggle-btn');
    toggleBtn.addEventListener('click', () => {
      projectDiv.classList.toggle('open');
      toggleBtn.textContent = projectDiv.classList.contains('open')
        ? 'Свернуть'
        : 'Подробнее об этом проекте';
    });
  });
}

function fetchAndRenderSkills() {
  fetch('core/data/skills.json')
    .then(response => response.json())
    .then(data => {
      appendSkills(data.hardSkills, document.getElementById('hard-skills-container'));
      appendSkills(data.softSkills, document.getElementById('soft-skills-container'));
    })
    .catch(error => console.error('Ошибка загрузки данных скиллов:', error));
}

function fetchAndRenderProjects() {
  fetch('core/data/experience.json')
    .then(response => response.json())
    .then(data => {
      appendProjects(data.projects, document.getElementById('experience-container'));
    })
    .catch(error => console.error('Ошибка загрузки данных опыта:', error));
}

document.addEventListener('DOMContentLoaded', () => {
  fetchAndRenderSkills();
  fetchAndRenderProjects();
});
