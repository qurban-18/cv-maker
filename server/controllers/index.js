import mongoose from "mongoose";
import { userDataModel } from "../model/userDataModel.js";

export const create = async (req, res) => {
  const { email, phone } = req.body;
  const checkEmail = await userDataModel.findOne({ email: email });
  if (checkEmail) {
    res.send({ res: "one cv is already created on this email" });
  } else {
    const userData = new userDataModel(req.body);
    await userData.save();
    res.send({ res: "cv created successfully" });
  }
};

export const search = async (req, res) => {
  const { search } = req.body;
  const userData = await userDataModel.findOne({ email: search });
  if (userData) {
    res.send(userData);
  } else {
    res.send({ userData: false });
  }
};
