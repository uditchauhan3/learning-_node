const express = require("express");


const router =express.Router();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded form data

// Middleware
app.use((req, res, next) => {
    console.log("hello from middleware 1");
    next();
});

// Create a new user in the database
app.post("/api/users", async (req, res) => {
    try {
        const { first_name, last_name, email, job_title, gender } = req.body;
        
        const newUser = await User.create({
            first_name,
            last_name,
            email,
            job_title,
            gender
        });
        
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// Existing routes
app.route('/api/users/:id').get((req, res) => {
    const id = parseInt(req.params.id); // Convert id to a number
    const user = users.find(user => user.id === id);

    if (user) {
        return res.json(user);
    } else {
        return res.status(404).json({ error: "User not found" });
    }
}).post((req, res) => {
    return res.json({ status: "pending" }); // Make "pending" a string
}).patch((req, res) => {
    return res.json({ status: "pending" });
}).delete((req, res) => {
    return res.json({ status: "pending" });
});

// REST API to get users
app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    return res.send(html);
});

module.exports= router;