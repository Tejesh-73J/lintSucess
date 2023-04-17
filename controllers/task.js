const Schema = require('../model/model');
const homepage = (req, res) => {
  res.sendFile(
    '/home/gundrapallytejesh/Documents/projects/CompleteAuthenticationBasis/htmlCodes/homepage.html',
  );
};

const loginpage = (req, res) => {
  res.sendFile(
    '/home/gundrapallytejesh/Documents/projects/CompleteAuthenticationBasis/htmlCodes/login.html',
  );
};

const registerpage = (req, res) => {
  res.sendFile(
    '/home/gundrapallytejesh/Documents/projects/CompleteAuthenticationBasis/htmlCodes/register.html',
  );
};

const login = async (req, res) => {
  try {
    const { name: name } = req.body;
    //console.log(name,password);
    const task = await Schema.findOne({ name: name });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `no data found plss create a new account` });
    }
    res.status(201).json({ msg: `Welcome ${name}` });
  } catch (error) {
    console.log(error + 'HIii');
    res.status(400).json({ msg: error });
  }
};

const register = async (req, res) => {
  try {
    const { name: name } = req.body;
    console.log(name);
    const isPresent = await Schema.findOne({ name: name });
    console.log(isPresent);
    if (!isPresent) {
      const newTask = await Schema.create(req.body);
      return res.status(200).json({ newTask });
    } else {
      return res
        .status(301)
        .json({ msg: `already a user present with username ${name}` });
    }
  } catch (error) {
    res.status(400).json({ msg: error, sucess: false });
  }
};

module.exports = {
  homepage,
  login,
  loginpage,
  registerpage,
  register,
};
