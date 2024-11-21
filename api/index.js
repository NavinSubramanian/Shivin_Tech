const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Parser } = require("json2csv");
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); 

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI,{
  retryWrites: true,
  w: 'majority',
});
const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoDB'));



const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});
const Contact = mongoose.model('Contact', contactSchema);

// Course Schema
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  courseLink: { type: String, required: true },
  imageUrl: { type: String, required: true },
  duration: { type: String, required: true },
  time: { type: String, required: true },
  rating: { type: Number, required: true },
  about: { type: String, required: true },
  rate: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  chapters: { type: Number, required: true},
  coursetype: { type: String, required: true},
  benefits: { type: [String], required: true },
});
const Course = mongoose.model('Course', courseSchema);

// Enquiry Schema
const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  department: { type: String, required: true },
  course: { type: String, required: true },
  mode: { type: String, enum: ['Online', 'Offline', 'Hybrid'], required: true },
  message: { type: String, required: true },
});
const Enquiry = mongoose.model('Enquiry', enquirySchema);

// Routes

// Contact Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, phone, email, subject, message } = req.body;
    const fullName = firstName+" "+ lastName;
    const contact = new Contact({ fullName, phone, email, subject, message });
    await contact.save();
    res.status(201).json({ message: 'Contact form submitted successfully!', contact });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Course Routes
app.post('/api/courses', async (req, res) => {
  try {
    const { title, subtitle, courseLink, imageUrl, duration, time, rating, about, rate } = req.body;
    const course = new Course({ title, subtitle, courseLink, imageUrl, duration, time, rating, about, rate });
    await course.save();
    res.status(201).json({ message: 'Course added successfully!', course });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/courses/search', async (req, res) => {
  const query = req.query.query;
  
  if (!query || query.trim() === '') {
    return res.json([]); // Return empty array if query is empty
  }

  const courses = await Course.find({ title: { $regex: query, $options: 'i' } });
  res.json(courses);
});

app.get("/api/courses/:name", async (req, res) => {
  const { name } = req.params;
  const courseLink = name;
  const course = await Course.findOne({ courseLink });
  console.log(course);
  
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }
  res.json(course);
});

// Enquiry Routes
app.post('/api/enquiries', async (req, res) => {
  try {
    const { name, email, phone, department, course, mode, message } = req.body;
    const enquiry = new Enquiry({ name, email, phone, department, course, mode, message });
    await enquiry.save();
    res.status(201).json({ message: 'Enquiry submitted successfully!', enquiry });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get("/api/download/:type", async (req, res) => {
  const { type } = req.params;

  try {
    let opts;
    let data = []
    if (type === "enquiries") {
      data = await Enquiry.find();
      const fields = ['name', 'email', 'phone', 'department', 'course', 'mode', 'message'];
      opts = { fields };
    } else if (type === "contacts") {
      data = await Contact.find();
      const fields = ['fullName', 'email', 'phone', 'subject', 'message'];
      opts = { fields };
    } else {
      return res.status(400).send("Invalid data type.");
    }

    const parser = new Parser(opts);
    const csv = parser.parse(data);
    res.setHeader("Content-Disposition", `attachment; filename=${type}.csv`);
    res.setHeader("Content-Type", "text/csv");
    res.status(200).send(csv);
  } catch (error) {
    console.error("Error generating CSV:", error);
    res.status(500).send("Failed to download data.");
  }
});

module.exports = app;



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));