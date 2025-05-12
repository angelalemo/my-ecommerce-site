const express = require('express');
const router = express.Router();

//const subject_text = '{"contactSubject": ["General Enquery","Classes","Schdules","Instructors","Prices","Other","Thanakorn","Copy"]}'
const subject_file = require('../data/contact_subject.json');

router.get('/', (req, res) => {
    //res.end(subject_text);
    res.json(subject_file)
});

module.exports = router;