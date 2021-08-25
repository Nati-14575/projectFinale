const User = require("../models/user");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (isEmpty(email) || isEmpty(password))
    return customErrorMessage("Fields can not be empty", 400, res);

  if (!user || !(await bcrypt.compare(password, user.password)))
    return customErrorMessage("Incorrect credentials", 400, res);

  if (!user.verified)
    return customErrorMessage("Account needs to be verified first", 400, res);

  //   sendToken(user, 200, req, res);
};
