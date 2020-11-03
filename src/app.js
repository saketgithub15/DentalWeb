const express = require('express');
const app = express();
const path  = require('path')

const port = 3000;

console.log(path.join(__dirname, "../public"))

const staticPath = (path.join(__dirname, "../public"))

 app.use(express.static(staticPath))

app.set('views', 'hbs');

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(port); 