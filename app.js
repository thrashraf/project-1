const express = require ('express')
const bodyParser = require('body-parser');
const ejs = require('ejs');
const { urlencoded } = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs');


app.use(express.static('public'));

app.get('/' , (req , res)=> {
 
 
    
    res.render('home')
   
})

app.post('/result' , (req , res)=> {

    const display = req.body.search

    console.log(display)
    res.render('result'  , {displaySearch:display})
})


app.listen(3000 , (req , res )=> {

    console.log('server start at port 3000')


})