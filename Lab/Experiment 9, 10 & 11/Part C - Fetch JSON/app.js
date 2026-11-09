const tableBody = document.querySelector("#studentTable");
const statusMessage = document.querySelector("#status");

function displayStudents(students) {
    tableBody.replaceChildren();

    students.forEach(student => {
        const row = document.createElement("tr");

        [student.id, student.name, student.course].forEach(value => {
            const cell = document.createElement("td");

            cell.textContent = value;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
}

document.querySelector("#loadJson").addEventListener("click", async () => {
    statusMessage.textContent = "Loading JSON data...";

    try {
        const response = await fetch("students.json");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        displayStudents(data.students);

        statusMessage.textContent =
            "JSON data loaded successfully.";

    } catch (error) {
        statusMessage.textContent =
            `Error: ${error.message}`;
    }
});