const todo = require("../db/model");

exports.getAllData = async (req, res) => {
  try {
    await todo.find().then((result) => {
      res.status(200).json({
        success: "true",
        data: result,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

exports.addNewData = async (req, res) => {
  try {
    await todo(req.body).save();
    res.status(201).json({
      success: "true",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.editData = async (req, res) => {
  try {
    await todo.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true });
    res.status(200).json({
      success: "true",
      data: req.body,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteData = async (req, res) => {
  try {
    await todo.findOneAndDelete({ task: req.body.task });
    res.status(200).send();
  } catch (error) {
    console.log(error);
  }
};
