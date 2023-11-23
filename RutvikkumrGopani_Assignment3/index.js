



// Packages

const express = require('express')

const path = require('path')

const ejs = require('ejs')

const mongoose = require('mongoose')

const DriveTest = require('./models/DriveTest')
      const bodyParser = require('body-parser')

      const expressSession = require("express-session");






      
      // connecting to the db
      
      mongoose.connect('mongodb+srv://admin:admin123@cluster0.ffyvbal.mongodb.net/myFirstDatabase?retryWrites=true', {useNewUrlParser: true})
      
      const app = new express()
      
      // Function



      
      // Template engine 
      
      app.set('view engine', 'ejs')




      
      // Midleware
      
      app.use(bodyParser.urlencoded({
      
        extended: true
      }));




      
      const authMiddleware = require("./middleware/authMiddleware");
      
      app.use(
      
        expressSession({
      
          secret: "session are best",
      
        })
      );




      
      // For static files 
      
      app.use(express.static('public'))
      
      app.use(express.json())
      
      app.use(express.urlencoded())
      
      app.use(bodyParser.json());
      
      app.use(bodyParser.urlencoded({extended: true}));



      
      // Routes files 
      
      app.listen(4000, () => {
      
        console.log("App start at 4000")
      
      })




      
      // Control navigation
      
      global.loggedIn = null;
      
      global.userType = null;


      
      app.use("*", (req, res, next) => {
      
        global.loggedIn = req.session.userId;
        global.userType = req.session.userType;
      
        next();
      
      });




      
      //Controller 
      
      const dashboardPageController = require('./controller/dashboardPageController');
      
      const gPageController = require('./controller/gPageController');
      
      const g2PageController = require('./controller/g2PageController');
      
      const loginPageController = require('./controller/loginPageController');






      
      app.use('/', dashboardPageController);
      
      app.use('/', gPageController);
      
      app.use('/', g2PageController);
      
      app.use('/', loginPageController);





      