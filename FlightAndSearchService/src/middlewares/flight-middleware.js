const { ClientErrorCodes } = require("../utils/error-codes");

const validateFlightCreation = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.depatureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.depatureTime ||
    !req.body.price
  ) {
    return res.status(ClientErrorCodes.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "Invalid request body for flight creation",
      error: "missing mendatory field for flight creation",
    });
  }
  next();
};

module.exports = { validateFlightCreation };
