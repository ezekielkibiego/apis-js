async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const statusCode = response.status;
        const users = await response.json();
        console.log(statusCode);
        console.log(users);

        users.forEach(user => {
            console.log(`Name: ${user.name}`);
            console.log(`Username: ${user.username}`);
            console.log(`Email: ${user.email}`);
            console.log(`City: ${user.address.city}`);
            console.log(`Company Name: ${user.company.name}`);

            console.log('-----------------------------------------------------')

        })

    } catch (error) {
        console.error("Error: ", error)
    }
}

fetchUsers();