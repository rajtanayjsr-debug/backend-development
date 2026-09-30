/**
 * Optional helper script to populate sample posts matching the exam prompt.
 * Usage: node seed.js
 */
const { MongoClient } = require("mongodb");

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017";
const DB_NAME = "cms_lab";
const COLLECTION_NAME = "posts";

const samplePosts = [
    {
        title: "Backend Development",
        author: "Rahul",
        content: "Backend development focuses on server-side logic, database interactions, authentication, and application architecture. It ensures smooth communication between user requests and database records.",
        createdAt: new Date("2026-09-26T10:30:00Z")
    },
    {
        title: "Introduction to MongoDB",
        author: "Priya",
        content: "MongoDB is a document-oriented database that stores data in flexible JSON-like documents.\n\nIt is commonly used with modern web applications because it provides a flexible data model.",
        createdAt: new Date("2026-09-26T09:15:00Z")
    },
    {
        title: "Building Web Applications",
        author: "Amit",
        content: "Building web applications requires understanding both frontend presentations and robust backend services. Using MVC or server-side rendering with templating engines like EJS simplifies dynamic web content generation.",
        createdAt: new Date("2026-09-25T14:00:00Z")
    }
];

async function seed() {
    const client = new MongoClient(MONGO_URL);
    try {
        await client.connect();
        const db = client.db(DB_NAME);
        const col = db.collection(COLLECTION_NAME);

        const result = await col.insertMany(samplePosts);
        console.log(`Successfully seeded ${result.insertedCount} posts into ${DB_NAME}.${COLLECTION_NAME}`);
    } catch (err) {
        console.error("Seeding failed:", err.message);
    } finally {
        await client.close();
    }
}

seed();
