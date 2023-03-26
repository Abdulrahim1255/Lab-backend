import Joi from "joi";

import bcrypt from "bcrypt";
import Item from "../Model/Item";
import jsonwebservise from "../error/jsonwebtoken";


const registerController = {
  async register(req, res, next) {
    const registerSchema = Joi.object({
     
      email: Joi.string().required(),
      password: Joi.string().required(),
      reppassword: Joi.ref("password"),
    });

    const { error } = registerSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    // User Already Exist....

    try {
      const exist = await Item.exists({ email: req.body.email });

      if (exist) {
        return next(new Error("User Already Exist."));
      }
    } catch (error) {
      return next(error);
    }

    // bcrypt password...
    const { email, password } = req.body;

    const hasdPassword = await bcrypt.hash(password, 10);

    let user = new Item({
     
      email,
      password: hasdPassword,
    });

    // save code......
    let access_jwt_token;

    try {
      user = await user.save();

      access_jwt_token = jsonwebservise.sign({ _id: user._id });
    } catch (error) {
      console.log(error);
      return next(error);
    }

    res.json({ access_jwt_token });
  },
};
export default registerController;
