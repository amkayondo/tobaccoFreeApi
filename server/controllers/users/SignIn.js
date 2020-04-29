import Joi from '@hapi/joi';
import UserDriver from '../../drivers/UserDriver';
import Response from '../../helpers/responses/responses';
import authData from '../../helpers/user/authData';

const userDriver = new UserDriver();
const response = new Response();

const schema = Joi.object({
  phoneNumber: Joi.string().trim().regex(/^[0-9]+$/).max(10)
    .required(),
  pin: Joi.string().trim().regex(/^[0-9]+$/).max(6)
    .required(),
});

const SignInUser = async (req, res) => {
  const { phoneNumber, pin } = req.body;
  const result = schema.validate({
    phoneNumber, pin,
  });
  if (result.error) {
    return res.status(400).json({ status: 400, error: result.error.details[0].message });
  }
  const foundUser = await userDriver.checkIfUserExists(phoneNumber);
  if (!foundUser) {
    return response.errorMessage(res, 404, "invalid phone number");
  }
  const checkPin = await userDriver.checkUserPin(pin, phoneNumber);
  if (!checkPin) {
    return response.errorMessage(res, 400, "invalid pin");
  }
  return response.successUser(res, 200, "welcome back", authData(foundUser));
};

export default SignInUser;
