# Experiment 07 & 08: ES6, DOM Manipulation, and Event Handling

## Objective

To understand and apply ES6 (ECMAScript 2015) features in JavaScript, learn DOM (Document Object Model) manipulation, and implement event handling to build interactive web pages.

By the end of this experiment, modern JavaScript features, DOM manipulation techniques, and event listeners are used to create an Interactive To-Do List application.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- ES6 (ECMAScript 2015)
- DOM API
- Browser Event Handling

---

## Part A – ES6 Features

ES6 introduced several modern JavaScript features that make programs cleaner, more readable, and easier to maintain.

### let and const

`let` is used for variables whose values may change.

`const` is used for values that should not be reassigned.

In the To-Do application:

```javascript
let tasks = [];

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
```

### Arrow Functions

Arrow functions provide a shorter syntax for writing functions.

Example:

```javascript
const renderTasks = () => {
    // render task list
};
```

### Template Literals

Template literals use backticks and allow values and expressions to be inserted directly inside strings.

Example:

```javascript
const name = "Student";
const message = `Hello, ${name}!`;
```

### Destructuring

Object destructuring was used while displaying tasks:

```javascript
tasks.forEach(({ id, title, completed }) => {
    // task rendering
});
```

### Spread Operator

The spread operator was used to create a new array when adding a task:

```javascript
tasks = [...tasks, new Task(title)];
```

It was also used while updating a task:

```javascript
{ ...t, completed: !t.completed }
```

### Classes

An ES6 class was used to represent each task:

```javascript
class Task {
    constructor(title) {
        this.id = Date.now();
        this.title = title;
        this.completed = false;
    }
}
```

---

## Part B – DOM Manipulation

The Document Object Model (DOM) is a programming interface for HTML documents. JavaScript can access and modify the DOM to dynamically change a web page.

### Selecting Elements

Elements were selected using:

```javascript
document.getElementById()
```

The application selects:

- Task input field
- Add button
- Task list

### Creating Elements

New HTML elements were created dynamically using:

```javascript
document.createElement()
```

For every task, JavaScript creates:

- `<li>`
- `<span>`
- Delete button

### Modifying Content

Task text was inserted using:

```javascript
span.textContent = title;
```

### Modifying CSS Classes

Completed tasks use:

```javascript
span.classList.add("done");
```

The `done` class changes the task to gray and applies a line-through effect.

### Adding Elements to the DOM

The dynamically created elements were inserted using:

```javascript
li.append(span, delBtn);
list.appendChild(li);
```

### Updating the DOM

The task list is cleared and rendered again whenever a task is added, completed, or deleted.

```javascript
list.innerHTML = "";
```

---

## Part C – Event Handling

Event handling allows JavaScript to respond to actions performed by users, such as clicks and keyboard input.

### Add Button Event

A click event listener was attached to the Add button:

```javascript
addBtn.addEventListener("click", addTask);
```

Clicking the Add button creates a new task.

### Keyboard Event

The Enter key can also be used to add a task:

```javascript
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
```

### Event Object

The event object provides information about the event and the element that triggered it.

Example:

```javascript
event.target
```

### Event Delegation

A single event listener was attached to the task list:

```javascript
list.addEventListener("click", (event) => {
    // complete or delete task
});
```

Event delegation allows dynamically created tasks and Delete buttons to be handled using a single listener.

---

## Practical Exercise – Interactive To-Do List

An Interactive To-Do List application was developed by combining ES6, DOM manipulation, and event handling.

### Features Implemented

- Add a new task using the Add button
- Add a new task using the Enter key
- Dynamically display tasks
- Mark tasks as completed
- Toggle completed status
- Delete tasks
- Prevent empty tasks from being added
- Dynamically create Delete buttons
- Use event delegation
- Update task data using ES6 array methods

### Task Class

Each task is represented using an ES6 class:

```javascript
class Task {
    constructor(title) {
        this.id = Date.now();
        this.title = title;
        this.completed = false;
    }
}
```

### Adding a Task

The `addTask()` function reads the value entered by the user and creates a new Task object.

```javascript
const addTask = () => {
    const title = input.value.trim();

    if (!title) return;

    tasks = [...tasks, new Task(title)];

    input.value = "";

    renderTasks();
};
```

### Rendering Tasks

The `renderTasks()` function dynamically creates the HTML elements required to display every task.

```javascript
const renderTasks = () => {
    list.innerHTML = "";

    tasks.forEach(({ id, title, completed }) => {
        const li = document.createElement("li");
        li.dataset.id = id;

        const span = document.createElement("span");
        span.textContent = title;

        if (completed) {
            span.classList.add("done");
        }

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList.add("delete-btn");

        li.append(span, delBtn);
        list.appendChild(li);
    });
};
```

### Completing a Task

Clicking a task changes its `completed` property:

```javascript
tasks = tasks.map(t =>
    t.id === id
        ? { ...t, completed: !t.completed }
        : t
);
```

The completed task becomes gray and crossed out.

### Deleting a Task

Clicking the Delete button removes the selected task:

```javascript
tasks = tasks.filter(t => t.id !== id);
```

The task list is then rendered again.

---

## Files Included

- `index.html` – To-Do List user interface and CSS styling
- `app.js` – ES6, DOM manipulation, and event-handling logic
- `README.md` – Experiment documentation

---

## Concepts Used

- `let`
- `const`
- Arrow functions
- Template literals
- Destructuring
- Spread operator
- ES6 classes
- `forEach()`
- `map()`
- `filter()`
- DOM selection
- `getElementById()`
- `createElement()`
- `appendChild()`
- `classList`
- `textContent`
- `innerHTML`
- `dataset`
- `addEventListener()`
- Click events
- Keyboard events
- Event object
- Event delegation

---

## Testing Performed

### Test 1 – Add Button

Entered:

`Complete Backend Lab`

Clicked the **Add** button.

**Result:** The task was successfully added.

### Test 2 – Enter Key

Entered:

`Study JavaScript`

Pressed the **Enter** key.

**Result:** The task was successfully added.

### Test 3 – Complete Task

Clicked on:

`Complete Backend Lab`

**Result:** The task became gray and crossed out.

### Test 4 – Delete Task

Clicked the Delete button beside:

`Study JavaScript`

**Result:** The task was successfully removed from the list.

### Test 5 – Empty Input

The application checks the input using:

```javascript
if (!title) return;
```

**Result:** Empty tasks are not added to the list.

---

## Key Learning Outcomes

Through this experiment:

- Modern ES6 JavaScript features were implemented.
- HTML elements were selected and manipulated using the DOM.
- New elements were dynamically created using JavaScript.
- CSS classes were dynamically applied.
- Mouse click events were handled.
- Keyboard events were handled.
- Event delegation was implemented.
- Array methods were used to manage application state.
- An interactive web application was successfully created.

---

## Conclusion

In this experiment, modern ES6 features were explored and applied along with DOM manipulation and event handling.

JavaScript was used to select, create, modify, and remove HTML elements dynamically. Event listeners were used to respond to mouse and keyboard interactions, while event delegation was used to efficiently handle dynamically generated elements.

The final Interactive To-Do List successfully demonstrated how ES6, DOM manipulation, and event handling can be combined to build an interactive web application.