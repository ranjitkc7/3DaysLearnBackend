import { db } from "../db/db.js";

export const getAllUsers = function (req, res) {
  const query = "SELECT * FROM users";
  db.query(query, function (err, results) {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Error fetching users" });
    }
    res.status(200).json(results);
  });
};

export const createUser = function (req, res) {
  try {
    const { username, email } = req.body;

    // Basic validation
    if (!username || !email) {
      return res.status(400).json({ error: "Username and email are required" });
    }

    // Prevent SQL Injection using parameterized query
    const query = "INSERT INTO users (username, email) VALUES (?, ?)";
    const values = [username, email];

    console.log(values);

    db.query(query, values, function (err, results) {
      if (err) {
        console.error("DB error:", err);
        return res.status(500).json({ error: "Error creating user" });
      }
      res.status(201).json({ id: results.insertId, username, email });
    });
  } catch (error) {
    console.error("Server error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
