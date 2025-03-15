document.addEventListener('DOMContentLoaded', () => {
    const hardSkills = [
        { name: 'Python', url: 'https://www.python.org/', img: 'core/images/hard/py.svg' },
        { name: 'Pytest', url: 'https://docs.pytest.org/en/stable/', img: 'core/images/hard/pytest.svg' },
        { name: 'Django', url: 'https://www.djangoproject.com/', img: 'core/images/hard/django.svg' },
        { name: 'DRF', url: 'https://www.django-rest-framework.org/', img: 'core/images/hard/drf.svg' },
        { name: 'Celery', url: 'https://docs.celeryq.dev/en/stable/index.html', img: 'core/images/hard/celery.svg' },
        { name: 'PostgresSQL', url: 'https://www.postgresql.org/', img: 'core/images/hard/psql.svg' },
        { name: 'Docker', url: 'https://www.docker.com/', img: 'core/images/hard/docker.svg' },
        { name: 'Redis', url: 'https://redis.io/', img: 'core/images/hard/redis.svg' },
        { name: 'nginx', url: 'https://nginx.org/', img: 'core/images/hard/nginx.svg' },
        { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', img: 'core/images/hard/html.svg' },
        { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', img: 'core/images/hard/css.svg' },
        { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', img: 'core/images/hard/js.svg' },
        { name: 'Ubuntu', url: 'https://ubuntu.com/', img: 'core/images/hard/ubuntu.svg' },
    ];

    const softSkills = [
        // { name: 'Коммуникация', url: '#', img: 'core/images/soft/communication.svg' },
        // { name: 'Работа в команде', url: '#', img: 'core/images/soft/teamwork.svg' }
    ];

    const hardSkillsContainer = document.getElementById('hard-skills-container');
    const softSkillsContainer = document.getElementById('soft-skills-container');

    function createSkillElement({ name, url, img }) {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');
        skillDiv.innerHTML = `
            <a href='${url}'>
                <img src='${img}' alt='${name} Logo'>
            </a>
            <span>${name}</span>
        `;
        return skillDiv;
    }

    function renderSkills(skills, container) {
        skills.forEach(skill => container.appendChild(createSkillElement(skill)));
    }

    renderSkills(hardSkills, hardSkillsContainer);
    renderSkills(softSkills, softSkillsContainer);
});
