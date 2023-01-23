const express = require("express");
const router = express.Router();
const schema = require("../models/courseModel");

router.get("/courses", async (req, res) => {
  try {
    const data = await schema.find();
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

//get single course

router.get("/:courseId", async (req, res) => {
  const courseid = req.params.courseId;

  try {
    const courseId = await schema.findById(courseid);
    res.json(courseId);
  } catch (error) {
    res.json(error);
  }
});

//crate couse

router.post("/", async (req, res) => {
  const course = await schema.create(res.body);
  res.json(course);
});

router.put("/courses", (req, res) => {
  res.send(
    "welcome, Here you can update your database as like you wanted to do . "
  );
});

module.exports = router;
