const express = require('express');
const app = express();
const path  = require('path');
const hbs = require('hbs');


const port = process.env.PORT || 8000;

// console.log(path.join(__dirname, "../public"))
const staticPath = (path.join(__dirname, "../public"));
const templatePath = (path.join(__dirname, "../templates/views"));
const partialsPath = (path.join(__dirname, "../templates/partials"));

app.set('view engine', 'hbs');
app.set('views', templatePath);

hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));



app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/service', (req, res)=>{ 
    res.render('service');
})

app.get('/gallery', (req, res)=>{
    res.render('gallery');
})

app.listen(port); 