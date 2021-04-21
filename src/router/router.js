const express = require('express')
const router = new express.Router();

router.get('/services/orthodontics', (req, res)=>{
    res.render('services/orthodontics')
})
router.get('/services/oral-surgery', (req, res)=>{
    res.render('services/oral')
})
router.get('/services/endodontics', (req, res)=>{
    res.render('services/endodontics')
})
router.get('/services/perodontics', (req, res)=>{
    res.render('services/perodontics')
})
router.get('/services/implants', (req, res)=>{
    res.render('services/implants')
})
router.get('/services/conservative-denstiry', (req, res)=>{
    res.render('services/conservative')
})
router.get('/services/prosthodontics', (req, res)=>{
    res.render('services/prosthodontics')
})

module.exports = router;