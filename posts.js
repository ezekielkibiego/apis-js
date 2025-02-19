async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        // console.log(data)
        data.forEach(post => {
            console.log(`Title: ${post.title}`);
            console.log(`Title: ${post.body}`);
        })

    } catch (error) {
        console.error("Error: ", error)
    }
}

fetchPosts();