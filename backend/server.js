const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route (to check backend)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Contact route – save data to file
app.post("/contact", (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ success: false, message: "Missing data" });
  }

  const newMessage = {
    email,
    message,
    date: new Date().toISOString(),
  };

  const filePath = path.join(__dirname, "messages.json");
  let messages = [];

  // Read existing messages safely
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, "utf8");
    if (fileData.trim().length > 0) {
      messages = JSON.parse(fileData);
    }
  }

  // Add new message
  messages.push(newMessage);

  // Write back to file
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

  console.log("Saved message:", newMessage);

  res.json({ success: true, message: "Message saved successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
