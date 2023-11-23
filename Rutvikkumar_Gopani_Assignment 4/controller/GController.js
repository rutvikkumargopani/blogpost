const personalDetails = require("../models/personalDetails");

const getG = (req, res) => {
  res.render("g");
};

const getUserDetails = async (req, res) => {
  const personalDetail = await personalDetails.findById(loggedIn);
  console.log(personalDetail);
  if (personalDetail) {
    res.render("g", { personalDetail: personalDetail });
  } else {
    res.render("g", {
      error: "No User Found",
    });
  }
};

const updateUserInfo = async (req, res) => {
  await personalDetails.findOneAndUpdate(
    { licenceNo: req.body.licenceNo },
    {
      car_details: {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        plat_number: req.body.plat_number,
      },
    }
  );
  getUserDetails(req, res);
};

module.exports = { getG, getUserDetails, updateUserInfo };
