const express = require("express");
const router = express.Router();
const schemaa = require("../models/courseModel");




//get all courses
router.get("/courses", async (req, res) => {
  try {
    const data = await schemaa.find();
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

//crate course by post method

router.post("/courses", async (req, res) => {
  console.log(req.body)
  const course = await schemaa.create(req.body);
  console.log(course)
  res.json(course);
});


// update course 
router.put("/courses", async (req, res) => {
 res.send(
    "welcome, Here you can update your database as like you wanted to do . "
  );
});

// delete course 
router.delete('/:courseId',async(req,res)=>{
  try {
    await schemaa.deleteOne({"_Id":req.params.courseId})

  } catch (error) {
    console.warn(error)
  }
})




module.exports = router;
