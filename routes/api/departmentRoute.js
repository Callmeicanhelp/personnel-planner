const express = require("express");
const router = express.Router();
const db = require("../../db/connection");
const inputCheck = require("../../utils/inputCheck");

// Get all departments
router.get("/department", (req, res) => {
  const sql = `SELECT * FROM department`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "Retrieved all departments",
      data: rows,
    });
  });
});

// Get single department
router.get("/department/:id", (req, res) => {
  const sql = `SELECT * FROM department WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "Retrieved department",
      data: row,
    });
  });
});

// Add a new department
router.post("/department", ({ body }, res) => {
  const errors = inputCheck(body, "department_name");
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO department (department_name) VALUES (?)`;
  const params = [body.department_name];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "New department added",
      changes: result.affectedRows,
      data: body,
    });
  });
});

// Delete a department
router.delete("/department/:id", (req, res) => {
  const sql = `DELETE FROM department WHERE id = ?`;

  db.query(sql, req.params.id, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Department not found",
      });
    } else {
      res.json({
        message: "Deleted department",
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
  });
});

module.exports = router;
