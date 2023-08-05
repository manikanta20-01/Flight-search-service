const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully Created City",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "City Not created",
      error: { error },
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.parms.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted City",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "City Not deleted",
      error: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.parms.id);
    return response.status(201).json({
      data: res,
      success: true,
      message: "Succesfully get the city",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to get the city",
      error: error,
    });
  }
};
// update /parms/:id
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.parms.id, req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Succesfully update the city",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to update the city",
      error: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
};
