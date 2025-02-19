async function fetchProfile() {
    try {
        const response = await fetch('https://api.github.com/users/ezekielkibiego')
        const statusCode = response.status;
        const profile = await response.json();
        console.log(statusCode)
        console.log(profile.login)
        console.log(profile.html_url)
        
    } catch (error) {
        console.error("Error: ", error)
    }
}

fetchProfile();


async function fetchRepos() {
    try {
        const response = await fetch('https://api.github.com/users/ezekielkibiego/repos')
        const statusCode = response.status;
        const repos = await response.json();
        console.log(statusCode)
        console.log(repos)
        repos.forEach(repo => {
            console.log(`Name: ${repo.name}`);
            console.log(`URL: ${repo.html_url}`);
            console.log(`Description: ${repo.description}`);

            console.log('-----------------------------------------------------')

        })

    } catch (error) {
        console.error("Error: ", error)
    }
}

fetchRepos();