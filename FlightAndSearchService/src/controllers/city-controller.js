const { CitytService } = require("../services/index");

const cityService = new CitytService();

const create = async (req, res) => {
  try {
    const data = req.body;
    const city = await cityService.createCity(data.name);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error occured while creating the city ",
      err: error,
    });
  }
};

const createAll = async (req, res) => {
  try {
    data = req.body;
    const cities = cityService.createAllCity(data.name);
    return res.status(201).json({
      data: cities,
      success: true,
      message: "Successfully created a city ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error occured while creating all city ",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const data = req.params.id;
    const response = await cityService.deleteCity(data);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a city ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error occured while deleting a city ",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const data = req.params.id;
    const city = await cityService.searchCity(data);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully fetched the city ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error occured while fetching the city ",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const filter = req.query;
    const city = await cityService.searchAllCities(filter);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully fetched all the city ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error occured while fetching all city ",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.body.name;
    const city = await cityService.updateCity(id, name);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully update the city ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error occured while updating the city ",
      err: error,
    });
  }
};

module.exports = { create, createAll, destroy, get, getAll, update };
