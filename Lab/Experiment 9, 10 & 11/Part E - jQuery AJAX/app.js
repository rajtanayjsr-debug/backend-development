// Display students inside the table
function displayStudents(students) {

    const tableBody = $("#studentTable");

    tableBody.empty();

    students.forEach(student => {

        const row = $("<tr>");

        $("<td>")
            .text(student.id)
            .appendTo(row);

        $("<td>")
            .text(student.name)
            .appendTo(row);

        $("<td>")
            .text(student.course)
            .appendTo(row);

        tableBody.append(row);
    });
}


// --------------------------------------------------
// LOAD JSON USING jQuery AJAX
// --------------------------------------------------

$("#loadJson").on("click", function () {

    $("#status").text("Loading data using jQuery AJAX...");

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
                `Error loading data: ${error}`
            );
        }

    });

});