const { last } = require("lodash");
const bcrypt = require("bcrypt");
const DataBase = require("../../service/db");

const createUse = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone, role } = req.body;

    if (!firstName || !lastName || !email || !password || !phone || !role)
      res.send({ message: "All field ! " }).status(400);

    const db = DataBase.getInstance();

    const userExist = await db.user.findUnique({ where: { email: email } });

    if (userExist)
      return res.send({ message: "User  Already Exists !" }).status(400);

    const hashPassword = await bcrypt.hash(password, 10);

    await db.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: hashPassword,
        phone: phone,
        role: `${role}`.toUpperCase(),
      },
    });

    res.json({ message: "User created successfully" }).status(201);
  } catch (e) {
    console.log(`${e.message} this is error.`);
    res.send(e.message).status(500);
  }
};
const login = async (req, res) => {
  try {
    const { role, email, password } = req.body;

    if (!role || !email || !password)
      res
        .send({ message: "Invalid email,password or role try again " })
        .status(400);

    const db = DataBase.getInstance();

    const userExist = await db.user.findUnique({ where: { email: email } });
    if (!userExist)
      return res.send({ message: "User  Not Found !" }).status(401);

    const isPasswordMatch = await bcrypt.compare(password, userExist.password);
    if (!isPasswordMatch)
      return res.send({ message: "Invalid password" }).status(401);

    res.send({ message: "Login Successfull" }).status(200);
  } catch (error) {
    console.log(`${error.message} this is error.`);
    res.send(error.message).status(500);
  }
};

module.exports = {
  createUse,
  login,
};
