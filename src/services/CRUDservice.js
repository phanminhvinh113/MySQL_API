import bcrypt from "bcryptjs";
import db from "../../models/index";
const salt = bcrypt.genSaltSync(10);

const createNewUser = async (data) => {
  return new Promise(async (res, rej) => {
    try {
      const hashPasswordFromBcrypt = await hashUserPassword(data.password);
      const hashPhoneNumberFromBrcypt = await hashData(data.phonenumber);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phonenumber: hashPhoneNumberFromBrcypt,
        gender: data.gender,
        roleId: data.roleId === "1" ? true : false,
      });
      res("create user success");
    } catch (error) {
      rej(error);
    }
  });
};
//Hash Phone Number
const hashData = async (data) => {
  try {
    const hashData = await bcrypt.hashSync(data, salt);
    return hashData;
  } catch (error) {
    alert(error);
  }
};
//Hash Password
const hashUserPassword = (password) => {
  return new Promise(async (res, rej) => {
    try {
      const hashPassword = await bcrypt.hashSync(password, salt);
      res(hashPassword);
    } catch (error) {
      rej(error);
    }
  });
};
module.exports = { createNewUser, hashUserPassword };
