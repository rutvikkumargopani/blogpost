


// Packages

const express = require('express')
const path = require('path')

const ejs = require('ejs')



const mongoose = require('mongoose')

const DriveTest = require('./models/DriveTest')
const bodyParser = require('body-parser')





// connecting to the db

mongoose.connect('mongodb+srv://admin:admin123@cluster0.ffyvbal.mongodb.net/myFirstDatabase?retryWrites=true', {useNewUrlParser: true})
const app = new express()



// Template engine 

app.set('view engine', 'ejs')


app.use(express.static('public'))

app.use(express.json())

app.use(express.urlencoded())


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));



app.listen(4000, () => {

    console.log("App is running on 4000")

})



app.get('/', async (req, res) => {

    res.render('dashboard');

})



app.get('/g', async (req, res) => {

    res.render('g');

})



app.post('/g/displayData', async (req, res) => {

    const lnum = req.body.license_no

    const drivetests = await DriveTest.find({

        license_no: lnum

    })

    if (drivetests.length > 0) {

        res.render('g', {

            drivetests


        })

    }

    else {

        res.render('g2', {

            error: "No User Found"

        })

    }

})




app.post("/update/drivetests", async (req, res) => {
    await DriveTest.findOneAndUpdate({


        license_no: (req.body.license_no).toString()

    },

    {

        car_details: {

            make: req.body.make,

            model: req.body.model,

            year: req.body.year,

            platno: req.body.platno

        }
        }

        );

        res.render('dashboard', {

            message: "Data Updated Successfully"

        });

    })




app.
get('/g2', (req, res) => {

    res.render('g2');

})



// Save Data to database 
app.post('/post/test', async (req, res) => {


    
    console.log("G---------------", req.body);
    
    let make = req.body.make;
    
    let model = req.body.model;
    
    let year = req.body.year;
    
    let platno = req.body.platno;
    
    // console.log(req.body);


    
    // Save data to DataBase
    await DriveTest.create({
    
        ...req.body,
    
        car_details: {
    
            make: make,
    
            model: model,
    
            year: year,
    
            platno: platno,
    
        }
    
    });


    

    
    res.redirect('/g2');
});




app.get('/login', (req, res) => {

    res.render('login');

})







