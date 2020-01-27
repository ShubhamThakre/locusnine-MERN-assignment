var express = require("express");
var router  = express.Router();
const MyData = require('../database/schema')

//@type:   GET
//@route:  /api/
//@desc:   just for testing
//@access: PUBLIC
router.get('/get', (req, res) => {
    res.json({ 'test': ' Route is being tested' })
});

module.exports = router;