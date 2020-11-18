const express = require('express');
const app = express();
const path  = require('path');
const hbs = require('hbs');
require('./db/conn');
const UserData = require('./model/userdata');


const port = process.env.PORT;

//  console.log(path.join(__dirname, "../public"))
const staticPath = (path.join(__dirname, "../public"));
const templatePath = (path.join(__dirname, "../templates/views"));
const servicePath = (path.join(__dirname, "../templates/views/services"));
const partialsPath = (path.join(__dirname, "../templates/partials"));

app.set('view engine', 'hbs');
app.set('views', templatePath);
app.use(express.json());
app.use(express.urlencoded({extended: false}))

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
app.get('/contact', (req, res)=>{
    res.render('contact');
})

app.post('/contact', async (req, res)=>{
    // console.log(req.body.firstname);
    // console.log(req.body.email);
    // console.log(req.body.number);
try{
    const data = new UserData({
        name: req.body.firstname,
        email: req.body.email,
        number: req.body.number
    });

    await data.save();
    res.status(201).render('contact')

} catch (error){
    res.status(404).send(error);
}


})

app.get('/services/orthodontics', (req, res)=>{
    res.render('services/orthodontics');
})

app.listen(port, ()=>{
    console.log(`listining on the ${port}`)
}); 