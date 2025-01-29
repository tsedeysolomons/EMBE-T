const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../../service/db");

const createUse = async (req, res) => {
  try {
    const {
      title,
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      country,
      email,
      password,
      phone,
    } = req.body;

    console.log(req.body);

    if (
      !title ||
      !firstName ||
      !middleName ||
      !lastName ||
      !dateOfBirth ||
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
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        dateOfBirth: new Date(dateOfBirth),
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
          firstName: foundUser.firstName,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "50m" }
    );

    const refreshToken = jwt.sign(
      { email: foundUser.email, firstName: foundUser.firstName },
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

const refresh = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.status(401).json({ message: "Unauthorized" });

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) return res.status(403).json({ message: "Forbidden" });

      console.log(decoded);

      const foundUser = await User.findOne({
        email: decoded.email,
      }).exec();

      if (!foundUser) return res.status(401).json({ message: "Unauthorized" });

      const accessToken = jwt.sign(
        {
          UserInfo: {
            email: foundUser.email,
            firstName: foundUser.firstName,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );

      res.json({ accessToken });
    }
  );
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ message: "User ID is required" });

    const user = await prisma.passenger.findUnique({
      where: { id: parseInt(id) },
    });

    if (!user) return res.status(404).send({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    console.log(`${error.message} this is error.`);
    res.status(500).send(error.message);
  }
};

const registerGust = async (req, res) => {
  try {
    const {
      title,
      email,
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      country,
      phone,
    } = req.body;

    if (!email) return res.status(400).send({ message: "Email is required" });

    const guestExist = await prisma.guest.findUnique({
      where: { email: email },
    });

    if (guestExist)
      return res.status(400).send({ message: "Guest already registered!" });

    await prisma.guest.create({
      data: {
        title,
        email,
        firstName,
        middleName,
        lastName,
        country,
        phone,
      },
    });

    return res.status(201).json({ message: "Guest registered successfully" });
  } catch (e) {
    console.log(`${e.message} this is error.`);
    return res.status(500).send(e.message);
  }
};

module.exports = {
  createUse,
  login,
  getUser,
  refresh,
  registerGust,
};
