# Simple CMS - Blog Content Management System

Backend Development Lab Examination - Exam 01 C  
Developed with **Node.js**, **Express.js**, **EJS**, and **MongoDB**.

---

## 📌 Project Overview

**Simple CMS** is a server-side rendered blog application that lets users create, read, and view blog posts stored permanently in a MongoDB database.

### Features
1. **Post List (`GET /posts`)**:
   - Displays all posts sorted in descending order of creation date (`createdAt: -1`).
   - Displays Title, Author, and Formatted Creation Date (e.g., `26 September 2026`).
   - Title of each post is a clickable link.
   - Note: Post content is excluded from the list view query to optimize payload size.
2. **Create Post (`GET /posts/new` & `POST /posts`)**:
   - HTML form to enter Title, Author, and Content.
   - Server-side validation ensuring title, author, and content are not empty.
   - `createdAt` date is automatically generated on the backend server.
   - Redirects to `/posts` upon successful creation.
3. **View Individual Post (`GET /posts/:id`)**:
   - Fetches the specific document by its MongoDB `ObjectId`.
   - Displays the full post content along with title, author, and date.
   - Graceful 404 error handling for non-existent or invalid post IDs.

---

## 🛠️ Technology Stack

- **Backend Runtime:** Node.js
- **Web Framework:** Express.js
- **Template Engine:** EJS (Embedded JavaScript)
- **Database:** MongoDB (using official `mongodb` driver)
- **Styling:** CSS3

---

## 📂 Project Structure

```text
cms-lab/
├── app.js                 # Express application & route handlers
├── package.json           # Dependencies and project metadata
├── README.md              # Project documentation and execution instructions
├── views/
│   ├── posts.ejs          # All posts list template
│   ├── new-post.ejs       # Create post form template
│   └── post.ejs           # Single post details template
└── public/
    └── style.css          # CSS styling
```

---

## 🚀 Setup & Execution Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) running locally on default port `27017`

### 1. Install Dependencies
Open a terminal in the `cms-lab` directory:
```bash
npm install
```

### 2. Verify MongoDB
Ensure your MongoDB service is running on `mongodb://127.0.0.1:27017`:
- Database name: `cms_lab`
- Collection name: `posts`

*(If your MongoDB server uses a custom URI, specify the `MONGO_URL` environment variable: `MONGO_URL=mongodb://localhost:27017 npm start`)*

### 3. Run the Application
```bash
npm start
```
or
```bash
node app.js
```

### 4. Access the Application
Open your web browser and navigate to:
```text
http://localhost:3000
```
(Automatically redirects to `http://localhost:3000/posts`)

---

## 🌐 Routes Summary

| Method | Route        | Description |
| :---   | :---         | :--- |
| `GET`  | `/`          | Redirects to `/posts` |
| `GET`  | `/posts`     | Displays list of all blog posts |
| `GET`  | `/posts/new` | Displays form to write a new post |
| `POST` | `/posts`     | Handles validation, backend timestamp, and MongoDB insertion |
| `GET`  | `/posts/:id` | Displays complete post by its MongoDB `_id` |

---

## 📝 Document Schema in MongoDB

```json
{
  "_id": ObjectId("..."),
  "title": "Introduction to Backend Development",
  "content": "Backend development deals with server-side logic...",
  "author": "Rahul",
  "createdAt": ISODate("2026-09-26T10:00:00.000Z")
}
```
