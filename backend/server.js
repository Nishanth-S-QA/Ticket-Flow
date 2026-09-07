const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Create ticket API
app.post("/api/tickets", (req, res) => {

    const ticket = {
        ticketId: "TKT" + Math.floor(1000 + Math.random() * 9000),
        customerName: req.body.customerName,
        email: req.body.email,
        issueTitle: req.body.issueTitle,
        description: req.body.description,
        category: req.body.category,
        priority: req.body.priority,
        status: "Open"
    };

    console.log("New Ticket Created:");
    console.log(ticket);

    res.json({
        message: "Ticket created successfully",
        ticket: ticket
    });

});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
