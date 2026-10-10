// Get HTML elements
const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesList = document.getElementById("notesList");

// Get notes from localStorage
function getNotes() {
    const raw = localStorage.getItem("notes");
    return raw ? JSON.parse(raw) : [];
}

// Save notes to localStorage
function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Add a new note
function addNote() {
    const text = noteInput.value.trim();

    if (text === "") {
        alert("Please enter a note.");
        return;
    }

    const notes = getNotes();

    const newNote = {
        id: Date.now(),
        text: text,
        createdAt: new Date().toISOString(),
        updatedAt: null
    };

    notes.push(newNote);
    saveNotes(notes);

    noteInput.value = "";
    renderNotes();
}

// Delete a note
function deleteNote(id) {
    const notes = getNotes().filter(note => note.id !== id);

    saveNotes(notes);
    renderNotes();
}

// Edit a note
function editNote(id) {
    const notes = getNotes();

    const note = notes.find(note => note.id === id);

    if (note) {
        const newText = prompt("Edit your note:", note.text);

        if (newText !== null && newText.trim() !== "") {
            note.text = newText.trim();
            note.updatedAt = new Date().toISOString();

            saveNotes(notes);
            renderNotes();
        }
    }
}

// Display all notes
function renderNotes() {
    const notes = getNotes();

    notesList.innerHTML = "";

    notes.forEach(note => {
        const noteCard = document.createElement("div");
        noteCard.className = "note-card";

        noteCard.innerHTML = `
            <p>${note.text}</p>

            <small>
                Created: ${new Date(note.createdAt).toLocaleString()}
            </small>

            <button class="edit-btn" onclick="editNote(${note.id})">
                Edit
            </button>

            <button class="delete-btn" onclick="deleteNote(${note.id})">
                Delete
            </button>
        `;

        notesList.appendChild(noteCard);
    });
}

// Add note when button is clicked
addBtn.addEventListener("click", addNote);

// Add note when Enter key is pressed
noteInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addNote();
    }
});

// Display saved notes when page loads
renderNotes();