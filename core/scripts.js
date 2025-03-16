document.addEventListener('DOMContentLoaded', () => {
    const hardSkills = [
        { name: 'Python', url: 'https://www.python.org/', img: 'core/images/hard/py.svg' },
        { name: 'MyPy', url: 'https://mypy.readthedocs.io/en/stable/', img: 'core/images/hard/mypy.svg' },
        { name: 'Pytest', url: 'https://docs.pytest.org/en/stable/', img: 'core/images/hard/pytest.svg' },
        { name: 'Django', url: 'https://www.djangoproject.com/', img: 'core/images/hard/django.svg' },
        { name: 'DRF', url: 'https://www.django-rest-framework.org/', img: 'core/images/hard/drf.svg' },
        { name: 'Celery', url: 'https://docs.celeryq.dev/en/stable/index.html', img: 'core/images/hard/celery.svg' },
        { name: 'Aiogram', url: 'https://aiogram.dev/', img: 'core/images/hard/aiogram.svg' },
        { name: 'SQLAlchemy', url: 'https://www.sqlalchemy.org/', img: 'core/images/hard/sqlalchemy.svg' },
        { name: 'PostgresSQL', url: 'https://www.postgresql.org/', img: 'core/images/hard/psql.svg' },
        { name: 'Docker', url: 'https://www.docker.com/', img: 'core/images/hard/docker.svg' },
        { name: 'Redis', url: 'https://redis.io/', img: 'core/images/hard/redis.svg' },
        { name: 'nginx', url: 'https://nginx.org/', img: 'core/images/hard/nginx.svg' },
        { name: 'GitHub Actions', url: 'https://github.com/features/actions', img: 'core/images/hard/gh_actions.svg' },
        { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', img: 'core/images/hard/html.svg' },
        { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', img: 'core/images/hard/css.svg' },
        { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', img: 'core/images/hard/js.svg' },
        { name: 'Ubuntu', url: 'https://ubuntu.com/', img: 'core/images/hard/ubuntu.svg' },
    ];

    const softSkills = [
        { name: 'Самоорганизованность', url: '#', img: 'core/images/soft/self-organization.svg' },
        { name: 'Обучаемость', url: '#', img: 'core/images/soft/learning.svg' },
        { name: 'Критическое мышление', url: '#', img: 'core/images/soft/critical-thinking.svg' },
        { name: 'Внимательность к&nbsp;деталям', url: '#', img: 'core/images/soft/attention-to-detail.svg' },
        { name: 'Целеустремленность', url: '#', img: 'core/images/soft/purposefulness.svg' },
        { name: 'Пунктуальность', url: '#', img: 'core/images/soft/punctuality.svg' },
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
