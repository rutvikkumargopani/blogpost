const User = require("../models/personalDetails");

//This method will check all routes
const checkLoginAtOtherPage = (req, res, next) => {
  if (!loggedIn) {
    return res.redirect("/login");
  } else if ((req.path == "/G2" || req.path == "/G") && userType != "Driver") {
    return res.redirect("/Dashboard");
  } else if (
    (req.path == "/Appointment" || req.path == "/Saveappointment") &&
    userType != "Admin"
  ) {
    return res.redirect("/Dashboard");
  }
  next();
};

//This middleware is just for the login and signup page
//If user is already logged in redirect them to Dashboard
const checkGetLogin = (req, res, next) => {
  if (loggedIn) {
    return res.redirect("/");
  }
  next();
};

module.exports = { checkLoginAtOtherPage, checkGetLogin };
