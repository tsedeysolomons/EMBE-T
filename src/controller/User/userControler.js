const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../../service/db");

const createUse = async (req, res) => {
  try {
    const {
      title,
      first_name,
      middle_name,
      last_name,
      date_of_birth,
      country,
      email,
      password,
      phone,
    } = req.body;

    if (
      !title ||
      !first_name ||
      !middle_name ||
      !last_name ||
      !date_of_birth ||
      !country ||
      !email ||
      !password ||
      !phone
    )
      return res.status(400).send({ message: "All fields are required!" });

    const userExist = await prisma.passenger.findUnique({
      where: { email: email },
    });

    if (userExist)
      return res.status(400).send({ message: "User already exists!" });

    const hashPassword = await bcrypt.hash(password, 10);

    await prisma.passenger.create({
      data: {
        title,
        firstName: first_name,
        middleName: middle_name,
        lastName: last_name,
        dateOfBirth: new Date(date_of_birth),
        country,
        email,
        password: hashPassword,
        phone,
      },
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (e) {
    console.log(`${e.message} this is error.`);
    res.status(500).send(e.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).send({ message: "Invalid email or password" });

    const foundUser = await prisma.passenger.findUnique({
      where: { email: email },
    });
    if (!foundUser) return res.status(401).send({ message: "User not found!" });

    const isPasswordMatch = await bcrypt.compare(password, foundUser.password);
    if (!isPasswordMatch)
      return res.status(401).send({ message: "Invalid password" });

    const accessToken = jwt.sign(
      {
        UserInfo: {
          email: foundUser.email,
          roles: foundUser.role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { email: foundUser.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" }
    );

    // Create secure cookie with refresh token
    res.cookie("jwt", refreshToken, {
      httpOnly: true, // accessible only by web server
      secure: true, // https
      sameSite: "None", // cross-site cookie
      maxAge: 7 * 24 * 60 * 60 * 1000, // cookie expiry: set to match rT
    });

    // Send accessToken containing username and roles
    res.status(200).json({ accessToken });
  } catch (error) {
    console.log(`${error.message} this is error.`);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createUse,
  login,
};
