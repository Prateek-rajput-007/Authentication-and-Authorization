const User = require("../model/user");

exports.getUser = async (req, res) => {
  const userId = req.id;
  let user;
  try {
    user = await User.findById(userId, "-password");
    // -password means not to include password
  } catch (error) {
    console.log(error.message);
  }

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json({ message: user });
};