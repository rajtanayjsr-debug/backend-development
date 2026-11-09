# Experiment 09, 10 & 11: AJAX, JSON, XML and jQuery

## Objective

To understand and implement asynchronous data loading in web applications using AJAX, Fetch API, JSON, XML, DOMParser, and jQuery AJAX.

The experiment demonstrates how data can be retrieved from different data sources and dynamically displayed on a webpage without reloading the entire page.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- AJAX
- Fetch API
- JSON
- XML
- DOMParser
- jQuery
- DOM Manipulation
- Python Local HTTP Server

---

## Experiment Structure

The experiment is organized part-wise so that each stage of implementation can be viewed and tested independently.

Experiment 9, 10 & 11/

- Part A - Project Structure
- Part B - Data Sources
- Part C - Fetch JSON
- Part D - Fetch XML
- Part E - jQuery AJAX
- Part F - Final Website

---

## Part A - Project Structure

The initial project structure was created using the following files:

- `index.html`
- `style.css`
- `app.js`
- `students.json`
- `students.xml`

These files provide the basic structure required for developing the AJAX-based Student Directory application.

---

## Part B - Data Sources

Two different data formats were created to store student information.

### JSON Data

The `students.json` file stores student information using JSON objects and arrays.

The JSON file contains the following student records:

- 101 - Aarav - B.Tech CSE
- 102 - Meera - B.Tech IT
- 103 - Kabir - B.Tech CSE

### XML Data

The `students.xml` file stores the same student information using XML elements and attributes.

This demonstrates how the same structured information can be represented using both JSON and XML formats.

---

## Part C - AJAX using Fetch API with JSON

A Student Directory webpage was created using HTML and CSS.

JavaScript uses the Fetch API to asynchronously retrieve student information from `students.json`.

The JSON response is converted into a JavaScript object using the `response.json()` method.

The retrieved student records are then dynamically inserted into an HTML table using DOM manipulation.

The data is displayed without refreshing the webpage.

### Expected Output

| ID | Name | Course |
|---|---|---|
| 101 | Aarav | B.Tech CSE |
| 102 | Meera | B.Tech IT |
| 103 | Kabir | B.Tech CSE |

The application displays the message:

`JSON data loaded successfully.`

---

## Part D - AJAX using JSON and XML

The Student Directory application was extended to support both JSON and XML data.

Two buttons are provided:

- Load JSON Students
- Load XML Students

JSON information is retrieved using the Fetch API and parsed using `response.json()`.

XML information is retrieved using the Fetch API as text.

The XML text is then converted into an XML document using `DOMParser`.

Student elements are extracted from the XML document and converted into JavaScript objects.

The same `displayStudents()` function is used to display both JSON and XML information inside the table.

The application therefore demonstrates asynchronous handling of two different data formats.

---

## Part E - AJAX using jQuery

The student JSON data was also retrieved using jQuery AJAX.

The `$.ajax()` method is used to request `students.json`.

The AJAX request specifies:

- URL of the data source
- HTTP GET method
- JSON data type
- Success callback
- Error callback

When the request succeeds, the student information is dynamically displayed inside the Student Directory table.

The application displays:

`JSON data loaded successfully using jQuery AJAX.`

This demonstrates how jQuery provides a simplified approach for performing AJAX requests.

---

## Part F - Final AJAX Application

The final Student Directory application integrates all the techniques implemented during the experiment.

The final webpage provides three options:

1. Fetch JSON
2. Fetch XML
3. jQuery AJAX

### Fetch JSON

The Fetch API retrieves `students.json`.

The JSON response is parsed and the student information is dynamically displayed in the table.

### Fetch XML

The Fetch API retrieves `students.xml`.

The XML response is converted into text and parsed using `DOMParser`.

The student elements are extracted and displayed in the table.

### jQuery AJAX

The `$.ajax()` method retrieves student information from the JSON file.

The success callback displays the retrieved student records.

All three approaches display the same student information without requiring a complete webpage refresh.

---

## Error Handling

Error handling was implemented for the AJAX operations.

For Fetch API requests, the HTTP response is checked using `response.ok`.

If the request fails, an error message is displayed to the user.

XML parsing is also checked for parser errors before attempting to display the information.

For jQuery AJAX, the `error` callback handles unsuccessful requests.

This improves the reliability of the application and provides feedback when data cannot be loaded.

---

## Running the Application

The application should be executed using a local HTTP server because Fetch API requests may not work correctly when the HTML file is opened directly using the `file://` protocol.

Navigate to the required part of the experiment.

For example:

`Part F - Final Website`

Run:

    python3 -m http.server 8000

The local server starts on port 8000.

Open a browser and visit:

    http://localhost:8000

The Student Directory application will appear.

---

## Final Output

The final webpage contains:

Student Directory

Part F - Final AJAX Application

[ Fetch JSON ] [ Fetch XML ] [ jQuery AJAX ]

The following student information is displayed after selecting any of the loading methods:

| ID | Name | Course |
|---|---|---|
| 101 | Aarav | B.Tech CSE |
| 102 | Meera | B.Tech IT |
| 103 | Kabir | B.Tech CSE |

### Fetch JSON Result

`JSON data loaded successfully using Fetch API.`

### Fetch XML Result

`XML data loaded successfully using Fetch API.`

### jQuery AJAX Result

`JSON data loaded successfully using jQuery AJAX.`

---

## Key Concepts Learned

- AJAX
- Asynchronous web requests
- Fetch API
- JSON data representation
- XML data representation
- JSON parsing
- XML parsing
- DOMParser
- DOM manipulation
- jQuery AJAX
- Event handling
- HTTP requests and responses
- Error handling
- Dynamic webpage updates
- Local HTTP server execution

---

## Files Implemented

### Part A - Project Structure

- `index.html`
- `style.css`
- `app.js`
- `students.json`
- `students.xml`

### Part B - Data Sources

- `students.json`
- `students.xml`

### Part C - Fetch JSON

- `index.html`
- `style.css`
- `app.js`
- `students.json`

### Part D - Fetch XML

- `index.html`
- `style.css`
- `app.js`
- `students.json`
- `students.xml`

### Part E - jQuery AJAX

- `index.html`
- `style.css`
- `app.js`
- `students.json`

### Part F - Final Website

- `index.html`
- `style.css`
- `app.js`
- `students.json`
- `students.xml`

---

## Conclusion

In this experiment, asynchronous data retrieval was successfully implemented using the Fetch API and jQuery AJAX.

Student information stored in JSON and XML formats was retrieved, parsed, and dynamically displayed inside a webpage without requiring a full page reload.

The experiment demonstrated the use of JSON parsing, XML parsing with DOMParser, DOM manipulation, Fetch API, jQuery AJAX, event handling, HTTP response handling, and error handling.

The final Student Directory application successfully integrates JSON Fetch, XML Fetch, and jQuery AJAX into a single interactive web application.