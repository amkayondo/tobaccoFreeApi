import Models from '../models';

const userModel = Models.Users;


export default class UserDriver {
  constructor() {
    this.checkIfUserExists = async (phoneNumber) => {
      const foundUser = userModel.findOne({
        where: {
          phoneNumber,
        },
      });
      const result = await foundUser;
      if (!result) {
        return null;
      }
      return result.dataValues;
    };
    this.addNewUser = async (data) => {
      const { phoneNumber, pin } = data;
      const addUser = userModel.create({
        userId: parseInt(Math.trunc((phoneNumber) / 234 - 3554 / 34), 20),
        phoneNumber,
        userPin: pin,
        isAdmin: false,
      });
      const result = await addUser;
      return result.dataValues;
    };
    this.checkUserPin = async (pin, phoneNumber) => {
      const foundUser = await userModel.findOne({
        where: {
          phoneNumber,
          userPin: pin,
        },
      });
      const result = await foundUser;
      if (!result) {
        return null;
      }
      return foundUser.dataValues;
    };
  }
}
