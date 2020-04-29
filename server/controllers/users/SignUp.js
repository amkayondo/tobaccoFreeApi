import Joi from '@hapi/joi';
import UserDriver from '../../drivers/UserDriver';
import Response from '../../helpers/responses/responses';
import authData from '../../helpers/user/authData';

const userDriver = new UserDriver();
const response = new Response();
const schema = Joi.object({
  phoneNumber: Joi.string().trim().regex(/^[0-9]+$/).min(10)
    .max(10)
    .required(),
  pin: Joi.string().trim().regex(/^[0-9]+$/).min(6)
    .max(6)
    .required(),
});

const SignUp = async (req, res) => {
  const { phoneNumber, pin } = req.body;
  const result = schema.validate({
    phoneNumber, pin,
  });
  if (result.error) {
    return res.status(400).json({ status: 400, error: result.error.details[0].message });
  }
  const foundPhoneNumber = await userDriver.checkIfUserExists(phoneNumber);
  if (foundPhoneNumber != null) {
    return response.errorMessage(res, 404, "phone number already used by another user");
  }
  const newUser = await userDriver.addNewUser({ phoneNumber, pin });
  return response.successUser(res, 201, "account successfully created",
    authData(newUser));
};

export default SignUp;
