const bcrypt = require("bcrypt");
const prisma = require("../../service/db");
const { filterNotUndefined } = require("../../utiles");

const createAdmin = async (req, res) => {
  try {
    const { username, name, email, password, contactNo } = req.body;

    if (!username || !name || !email || !password || !contactNo) {
      return res.status(400).send({ message: "All fields are required!" });
    }

    const adminExist = await prisma.admin.findUnique({ where: { email } });

    if (adminExist)
      return res.status(400).send({ message: "Admin already exists!" });

    console.log("Admin does not exist");

    const hashPassword = await bcrypt.hash(password, 10);

    const admin = await prisma.admin.create({
      data: {
        username,
        name,
        email,
        password: hashPassword,
        contactNo,
      },
    });

    res.status(201).json({ message: "Admin created successfully", admin });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAdmins = async (req, res) => {
  try {
    const admins = await prisma.admin.findMany();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAdminById = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await prisma.admin.findUnique({
      where: { id: parseInt(id) },
    });

    if (!admin) {
      return res.status(404).send({ message: "Admin not found!" });
    }

    res.status(200).json(admin);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    let { username, name, email, password, contactNo } = req.body;

    const adminExist = await prisma.admin.findUnique({
      where: { id: parseInt(id) },
    });

    if (!adminExist)
      return res.status(404).send({ message: "Admin not found!" });

    if (password) password = await bcrypt.hash(password, 10);

    const data = {
      username,
      name,
      email,
      password,
      contactNo,
    };

    const filteredData = filterNotUndefined(data);

    const admin = await prisma.admin.update({
      where: { id: parseInt(id) },
      data: {
        ...filteredData,
      },
    });

    res.status(200).json({ message: "Admin updated successfully", admin });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.admin.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createAdmin,
  getAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
};
