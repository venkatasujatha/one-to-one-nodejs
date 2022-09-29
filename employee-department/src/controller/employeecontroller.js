const { dataSource } = require("../database/database");
const { emp } = require("../entity/employee");
const employeeRepo = dataSource.getRepository("T1");
const appConst = require("../constants");
//post
const add = async (req, res) => {
  try {
    const resp = await employeeRepo.save(req.body);

    res.status(200).json({
      status: appConst.status.success,
      response: resp.count,
      message: null,
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: err.message,
    });
  }
};
//getall
const findall = async (req, res) => {
  try {
    const resp = await employeeRepo.find();
    res.send(resp);
    res.status(200).json({
      status: appConst.status.success,
      response: resp.count,
      message: null,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: error.message,
    });
  }
};
//get one emp
const findemp = async (req, res) => {
  try {
    const resp = await employeeRepo.findOneBy({ id: req.params.id });
    res.send(resp);
    res.status(200).json({
      status: appConst.status.success,
      response: resp.count,
      message: null,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: error.message,
    });
  }
};

//delete employee

const deleteemp = async (req, res) => {
  try {
    const resp = await employeeRepo.delete({ id: req.params.id });
    console.log("deleted successfully", resp);
    res.status(200).json({
      status: appConst.status.success,
      response: resp.count,
      message: null,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: error.message,
    });
  }
};
//update employee

const updateemp = async (req, res) => {
  try {
    const id = req.params.id;

    await employeeRepo.update({ id: id }, req.body);
    res.send(id + " is updated successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { add, findall, findemp, deleteemp, updateemp };
