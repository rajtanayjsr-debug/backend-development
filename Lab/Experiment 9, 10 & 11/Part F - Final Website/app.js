const tableBody = document.querySelector("#studentTable");
const statusMessage = document.querySelector("#status");


// --------------------------------------------------
// DISPLAY STUDENTS
// --------------------------------------------------

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
// FETCH JSON
// --------------------------------------------------

document.querySelector("#loadJson").addEventListener(
    "click",
    async () => {

        statusMessage.textContent = "Loading JSON data...";

        try {

            const response = await fetch("students.json");

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const data = await response.json();

            displayStudents(data.students);

            statusMessage.textContent =
                "JSON data loaded successfully using Fetch API.";

        } catch (error) {

            statusMessage.textContent =
                `Error loading JSON: ${error.message}`;
        }
    }
);


// --------------------------------------------------
// FETCH XML
// --------------------------------------------------

document.querySelector("#loadXml").addEventListener(
    "click",
    async () => {

        statusMessage.textContent = "Loading XML data...";

        try {

            const response = await fetch("students.xml");

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const xmlText = await response.text();

            const xmlDocument =
                new DOMParser().parseFromString(
                    xmlText,
                    "application/xml"
                );

            if (xmlDocument.querySelector("parsererror")) {
                throw new Error("Invalid XML document.");
            }

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
                "XML data loaded successfully using Fetch API.";

        } catch (error) {

            statusMessage.textContent =
                `Error loading XML: ${error.message}`;
        }
    }
);


// --------------------------------------------------
// jQUERY AJAX
// --------------------------------------------------

$("#loadJquery").on("click", function () {

    $("#status").text(
        "Loading JSON data using jQuery AJAX..."
    );

    $.ajax({

        url: "students.json",

        method: "GET",

        dataType: "json",

        success: function (data) {

            displayStudents(data.students);

            $("#status").text(
                "JSON data loaded successfully using jQuery AJAX."
            );
        },

        error: function (xhr, status, error) {

            $("#status").text(
                `jQuery AJAX Error: ${error}`
            );
        }

    });

});