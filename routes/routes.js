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


//@type:   GET
//@route:  /api/userListFetch
//@desc:   Fetching the data from database
//@access: PUBLIC
router.get('/userListFetch', (req, res) => {
    // res.json({ 'test': ' Route is being tested' })

    MyData.find({active: true})
        .then(data =>{
            if(data){
                res.json({'msg': 'user list got successfully', data : data})
            }else{
                res.json({'msg': 'user list error'})
            }
        })         
        .catch(err => console.log(err))
});



//@type:   POST
//@route:  /api/udpateRecord
//@desc:   Updating the data to database
//@access: PUBLIC
router.post('/udpateRecord', (req, res) => {
    // res.json({ 'test': ' Route is being tested' })
    console.log("udpateRecord",req.body)
    MyData.updateOne(
            { "key" : req.body.key},
            {
                $set: {
                    "name": req.body.name,
                    "age": req.body.age,
                    "address": req.body.address
                }
            })
        .then(data =>{
            if(data){
                res.json({'msg': 'user list got successfully', data : data})
            }else{
                res.json({'msg': 'user list error'})
            }
        })         
        .catch(err => console.log(err))
});


//@type:   POST
//@route:  /api/saveDataApi
//@desc:   Saving the data to database
//@access: PUBLIC
router.post('/saveDataApi', (req, res) => {
    console.log("req", req.body);
    // res.json({ 'test': ' Route is being tested' })

    MyData.findOne({key: req.body.key})
        .then(data =>{
            if(data){
                res.json({'msg': 'user already exists.'})
            }else{
                const newUser = new MyData({
                    key:req.body.key,
                    name: req.body.name,
                    age: req.body.age,
                    address: req.body.address
                });
                newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err))
            }
        })         
        .catch(err => console.log(err))
});


//@type:   POST
//@route:  /api/deleteRecord
//@desc:   deleteing the data by making it active=false
//@access: PUBLIC
router.post('/deleteRecord', (req, res) => {
    // res.json({ 'test': ' Route is being tested' })
    console.log("deleteRecord",req.body)
    MyData.updateOne(
            { "key" : req.body.key},
            {
                $set: {
                    "active": req.body.active
                }
            })
        .then(data =>{
            if(data){
                res.json({'msg': 'user list deleted successfully', data : data})
            }else{
                res.json({'msg': 'user list error'})
            }
        })         
        .catch(err => console.log(err))
});

module.exports = router;