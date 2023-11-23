const personalDetails = require("../models/personalDetails");
const appointment = require("../models/appointment");

const getG2 = async (req, res) => {
  const personalDetail = await personalDetails.findById(loggedIn);
  if (personalDetail && personalDetail.licenceNo != "undefine") {
    const timeSlot = await appointment.findById(personalDetail.appointmentId);
    res.render("g2", { personalDetail: personalDetail, timeSlot: timeSlot });
  } else {
    res.render("g2", { personalDetail: new personalDetails() });
  }
};

const getG2ByLicenceNo = async (req, res) => {
  const personalDetail = await personalDetails.find({
    licenceNo: req.params.licenceNo,
  });
  res.render("g2", {
    personalDetail,
  });
};

const saveUserDetails = async (req, res) => {
  console.log(req.body);
  // await personalDetails.findByIdAndUpdate(loggedIn, {
  //   ...req.body,
  //   appointmentId: req.body.timeSlot,
  //   car_details: {
  //     make: req.body.make,
  //     model: req.body.model,
  //     year: req.body.year,
  //     plat_number: req.body.plat_number,
  //   },
  // });

  // await appointment.findByIdAndUpdate(
  //   { _id: req.body.timeSlot },
  //   {
  //     isTimeSlotAvailable: false,
  //   }
  // );
  res.redirect("/");
};

const getAvailSlots = async (req, res) => {
  const data = await appointment.find({
    date: req.query.dateSlot,
    isTimeSlotAvailable: true,
  });
  res.end(JSON.stringify(data, null, 3));
};

module.exports = { getG2, getG2ByLicenceNo, saveUserDetails, getAvailSlots };
