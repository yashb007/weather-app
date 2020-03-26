const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utilis/geocode');
const forecast = require('./utilis/forecast');
// console.log(__dirname);
// console.log(path.join(__dirname,'../public'))

const app = express();
const  publicPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname, '../temp/views')
const partialpath = path.join(__dirname, '../temp/partials')

app.set('view engine', 'hbs');
app.set('views', viewPath)
app.use(express.static(publicPath));
hbs.registerPartials(partialpath)
app.get('', (req, res) => {
    res.render('index', {
        title : 'weatherapp',
    })
})  

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/weather' , (req,res) => {
    if(!req.query.address){
        return res.send({
             error: 'Provide a address',
         })
     }       
 geocode(req.query.address, (error,data) => {
        if(error){
            return res.send(error)
        }
    
 forecast(data.latitude, data.longitude, (error,forecastdata) => {
       if(error){
         return res.send(error)   
       }
    
     res.send({
         location : data.location,
         forecast :forecastdata
     
    })
})
 })

    // res.send({
    //             forecast : 'today is sunny day',
    //             location : req.query.address,
    //         })
})
app.get('/product' , (req,res) => {

    if(!req.query.search){
       return res.send({
            error: 'Provide a search term',
        })
    }
    console.log(req.query);
    res.send({
        game : 'gta',
     })
})

app.get('*', (req, res) =>{
  res.send("404 error")
})

app.listen(3000, () =>{
    console.log('Server is started');
})