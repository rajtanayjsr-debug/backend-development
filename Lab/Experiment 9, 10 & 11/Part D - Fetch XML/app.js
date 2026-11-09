const tableBody = document.querySelector("#studentTable");
const statusMessage = document.querySelector("#status");


// Display student records inside the table
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


// --------------------------------------------------
// LOAD JSON USING FETCH API
// --------------------------------------------------

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


// --------------------------------------------------
// LOAD XML USING FETCH API
// --------------------------------------------------

document.querySelector("#loadXml").addEventListener("click", async () => {

    statusMessage.textContent = "Loading XML data...";

    try {

        const response = await fetch("students.xml");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        // XML is initially received as text
        const xmlText = await response.text();

        // Convert XML text into an XML document
        const xmlDocument = new DOMParser().parseFromString(
            xmlText,
            "application/xml"
        );

        // Check whether XML parsing failed
        if (xmlDocument.querySelector("parsererror")) {
            throw new Error("The XML document is invalid.");
        }

        // Extract student elements from XML
        const students = Array.from(
            xmlDocument.querySelectorAll("student")
        ).map(student => ({

            id: student.getAttribute("id"),

            name:
                student.querySelector("name").textContent,

            course:
                student.querySelector("course").textContent
        }));

        displayStudents(students);

        statusMessage.textContent =
            "XML data loaded successfully.";

    } catch (error) {

        statusMessage.textContent =
            `Error: ${error.message}`;
    }
});