const express = require('express');
const router = express.Router();

const Subject = '{"connection": ["General Enquery", "Classes", "Schedule", "Instructors", "Prices", "Other","2"] }';
const subject_file = require('../data/contact_subject.json');

router.get('/', (req, res) => {
    res.json(subject_file);
}); 

module.exports = router;