const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Item = require("./Models/item"); // Ensure this path is correct and the model is defined

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection URL
const ATLAS_URL = "mongodb+srv://lavanyap5904:DhPM7wGN7kzZO76M@cluster0.jdu8vyu.mongodb.net/Myntra?retryWrites=true&w=majority";

// Main function to connect to the database
async function main() {
  await mongoose.connect(ATLAS_URL);
}

// Call the main function to connect to the database
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error connecting to the database:", err);
  });

// Route to get items by color
app.get("/api/color/:color", async (req, res) => {
  try {
    const color = req.params.color;
    if (!color) {
      return res.status(400).json({ message: "Color query parameter is required" });
    }
    const items = await Item.find({ color: color });
    console.log(items);
    res.json(items);
  } catch (err) {
    console.error("Error fetching items:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Start the server
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
