const prisma = require("../../service/db");

const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send({ message: "All fields are required!" });
    }

    const admin = await prisma.admin.create({
      data: {
        name,
        email,
        password,
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
    const { name, email, password } = req.body;

    const admin = await prisma.admin.update({
      where: { id: parseInt(id) },
      data: {
        name,
        email,
        password,
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