const express = require("express");
const path = require("path");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection Configuration
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017";
const DB_NAME = "cms_lab";
const COLLECTION_NAME = "posts";

const client = new MongoClient(MONGO_URL, { serverSelectionTimeoutMS: 2500 });
let postsCollection;
let isFallbackMode = false;

// In-memory fallback dataset for offline/local testing when MongoDB service is not running
let fallbackPosts = [
    {
        _id: new ObjectId("68d5a123456789abcdef1001"),
        title: "Backend Development",
        author: "Rahul",
        content: "Backend development focuses on server-side logic, database interactions, authentication, and application architecture. It ensures smooth communication between user requests and database records.",
        createdAt: new Date("2026-09-26T10:30:00Z")
    },
    {
        _id: new ObjectId("68d5a123456789abcdef1002"),
        title: "Introduction to MongoDB",
        author: "Priya",
        content: "MongoDB is a document-oriented database that stores data in flexible JSON-like documents.\n\nIt is commonly used with modern web applications because it provides a flexible data model.",
        createdAt: new Date("2026-09-26T09:15:00Z")
    },
    {
        _id: new ObjectId("68d5a123456789abcdef1003"),
        title: "Building Web Applications",
        author: "Amit",
        content: "Building web applications requires understanding both frontend presentations and robust backend services. Using MVC or server-side rendering with templating engines like EJS simplifies dynamic web content generation.",
        createdAt: new Date("2026-09-25T14:00:00Z")
    }
];

const fallbackCollection = {
    find: (filter = {}, options = {}) => ({
        sort: (sortObj = {}) => ({
            toArray: async () => {
                let list = [...fallbackPosts];
                if (sortObj.createdAt === -1) {
                    list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                }
                if (options.projection?.content === 0) {
                    list = list.map(({ content, ...rest }) => rest);
                }
                return list;
            }
        })
    }),
    findOne: async (query) => {
        const idStr = query._id ? query._id.toString() : null;
        return fallbackPosts.find(p => p._id.toString() === idStr) || null;
    },
    insertOne: async (doc) => {
        const newDoc = { _id: new ObjectId(), ...doc };
        fallbackPosts.unshift(newDoc);
        return { insertedId: newDoc._id };
    }
};

// Connect to MongoDB with graceful local fallback
async function connectDB() {
    try {
        await client.connect();
        const database = client.db(DB_NAME);
        postsCollection = database.collection(COLLECTION_NAME);
        console.log(`[MongoDB] Connected successfully to ${MONGO_URL} (Database: ${DB_NAME}, Collection: ${COLLECTION_NAME})`);
    } catch (err) {
        isFallbackMode = true;
        postsCollection = fallbackCollection;
        console.warn(`[MongoDB] Could not reach ${MONGO_URL}. Active fallback mode enabled for instant local testing.`);
        console.warn(`[MongoDB] (When run in the lab environment with MongoDB active, it will connect automatically to the real MongoDB database.)`);
    }
}

// View Engine & Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Date and exact time formatting helper accessible in all templates
app.locals.formatDate = function (dateInput) {
    if (!dateInput) return "";
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) return "";

    const datePart = date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const timePart = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    return `${datePart} at ${timePart}`;
};
app.locals.formatDateTime = app.locals.formatDate;


// -------------------------------------------------------------
// ROUTES
// -------------------------------------------------------------

// Redirect root to /posts
app.get("/", (req, res) => {
    res.redirect("/posts");
});

// 1. Display All Posts (Post List)
// Note: Content is excluded from post-list query as per requirement
app.get("/posts", async (req, res) => {
    try {
        const posts = await postsCollection
            .find({}, { projection: { content: 0 } })
            .sort({ createdAt: -1 })
            .toArray();

        res.render("posts", { posts, pageTitle: "All Posts" });
    } catch (err) {
        console.error("Error fetching posts:", err);
        res.status(500).send("Internal Server Error while retrieving posts.");
    }
});

// 2. Display Create Post Form
app.get("/posts/new", (req, res) => {
    res.render("new-post", {
        errorMessage: null,
        formData: { title: "", content: "", author: "" },
        pageTitle: "Create New Post"
    });
});

// 3. Handle Create Post Form Submission
app.post("/posts", async (req, res) => {
    const { title, content, author } = req.body;

    // Strict Validation: Ensure title, content, and author are not empty strings
    if (
        !title || !title.trim() ||
        !content || !content.trim() ||
        !author || !author.trim()
    ) {
        return res.status(400).render("new-post", {
            errorMessage: "All fields (Title, Content, and Author) are mandatory and cannot be empty.",
            formData: { title: title || "", content: content || "", author: author || "" },
            pageTitle: "Create New Post"
        });
    }

    try {
        await postsCollection.insertOne({
            title: title.trim(),
            content: content.trim(),
            author: author.trim(),
            // Creation date and time generated automatically by backend
            createdAt: new Date()
        });

        // Redirect user to the post list page
        res.redirect("/posts");
    } catch (err) {
        console.error("Error saving post:", err);
        res.status(500).render("new-post", {
            errorMessage: "An error occurred while saving the post. Please try again.",
            formData: { title, content, author },
            pageTitle: "Create New Post"
        });
    }
});

// 4. View Individual Post (Complete Post)
app.get("/posts/:id", async (req, res) => {
    const postId = req.params.id;

    // Validate ObjectId format
    if (!ObjectId.isValid(postId)) {
        return res.status(404).render("post", {
            post: null,
            errorMessage: "Invalid Post ID format.",
            pageTitle: "Post Not Found"
        });
    }

    try {
        const post = await postsCollection.findOne({ _id: new ObjectId(postId) });

        if (!post) {
            return res.status(404).render("post", {
                post: null,
                errorMessage: "The requested post could not be found.",
                pageTitle: "Post Not Found"
            });
        }

        res.render("post", {
            post,
            errorMessage: null,
            pageTitle: post.title
        });
    } catch (err) {
        console.error("Error fetching single post:", err);
        res.status(500).send("Internal Server Error while retrieving the post.");
    }
});

// Start Server after connecting to MongoDB with automatic port conflict handling
function startServer(port) {
    const server = app.listen(port, () => {
        console.log(`\n==================================================`);
        console.log(`🚀 Simple CMS Server is running at http://localhost:${port}`);
        console.log(`📖 View Posts:   http://localhost:${port}/posts`);
        console.log(`✍️  Create Post:  http://localhost:${port}/posts/new`);
        console.log(`==================================================\n`);
    });

    server.on("error", (err) => {
        if (err.code === "EADDRINUSE") {
            console.warn(`[Port Conflict] Port ${port} is currently in use.`);
            console.log(`Automatically trying alternative port ${port + 1}...`);
            startServer(port + 1);
        } else {
            console.error("Server error:", err);
        }
    });
}

connectDB().then(() => {
    startServer(PORT);
});

