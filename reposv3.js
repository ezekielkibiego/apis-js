document.addEventListener("DOMContentLoaded", fetchGitHubRepos);

async function fetchGitHubRepos() {
    const username = 'ezekielkibiego';
    const url = `https://api.github.com/users/${username}/repos`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            console.error("Failed to fetch repos!")
            return;
        }
        const repos = await response.json();

        const container = document.getElementById('repos');
        container.innerHTML = '';

        repos.forEach(repo => {
            const repoDiv = document.createElement('div');
            repoDiv.classList.add('repo');
            repoDiv.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'No description provided'}</p>
                <a href="${repo.html_url}" target="_blank">View Repository</a>
            `;
            container.appendChild(repoDiv);
        });
    } catch (error) {
        console.error(`Error: ${error}`);
    }
    
}