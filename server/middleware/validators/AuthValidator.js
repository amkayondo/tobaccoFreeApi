import Joi from '@hapi/joi';


export default class AuthValidator {
  constructor() {
    this.validatePhoneNumber = (req, res, next) => {
      const { phoneNumber } = req.body;
      console.log(phoneNumber)
      const schema = Joi.object({
        phoneNumber: Joi.number()
          .min(10)
          .max(10)
          .required(),
      });
      schema.validate(phoneNumber);
    //   next();
    };
  }
}
