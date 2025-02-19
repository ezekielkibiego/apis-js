require('dotenv').config();


async function fetchGitHubRepos() {
    
    const username = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_ACCESS_TOKEN;
    const url = `https://api.github.com/users/${username}/repos`;
    
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `token ${token}`
            }
        });
        console.log('Status Code: ', response.status)

        if (!response.ok) {
            console.error("Failed to fetch repos!")
            return;
        }
        const repos = await response.json()
        // console.log(repos);
        repos.forEach(repo => {
            console.log(`Name: ${repo.name}`);
            console.log(`URL: ${repo.html_url}`);
            console.log(`Description: ${repo.description}`);

            console.log('-----------------------------------------------------')

        })

    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

fetchGitHubRepos()