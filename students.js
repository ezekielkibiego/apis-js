
async function fetchStudents() {
    try {
        const response = await fetch('http://127.0.0.1:8000/students/')
        const statusCode = response.status;
        const data = await response.json();
        console.log(statusCode)
        console.log(data.students)
        data.students.forEach(student => {
            console.log(`First Name: ${student.first_name}`);
           
            console.log('-----------------------------------------------------')

        })

    } catch (error) {
        console.error("Error: ", error)
    }
}

fetchStudents();