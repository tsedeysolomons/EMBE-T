const prisma = require("../../service/db");
const { filterNotUndefined } = require("../../utiles");

const createOnlineTransaction = async (req, res) => {
  try {
    const { ticketId, amount, status, date, paymentId } = req.body;

    if (!ticketId || !amount || !status || !date || !paymentId) {
      return res.status(400).send({ message: "All fields are required!" });
    }

    const onlineTransaction = await prisma.onlineTransaction.create({
      data: {
        ticketId,
        amount,
        status,
        date: new Date(date),
        paymentId,
      },
    });

    res.status(201).json({
      message: "OnlineTransaction created successfully",
      onlineTransaction,
    });
  } catch (error) {
    console.log(`${error.message} this is error.`);
    res.status(500).send(error.message);
  }
};

const getOnlineTransactions = async (req, res) => {
  try {
    const onlineTransactions = await prisma.onlineTransaction.findMany();
    res.status(200).json(onlineTransactions);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOnlineTransactionById = async (req, res) => {
  try {
    const { id } = req.params;
    const onlineTransaction = await prisma.onlineTransaction.findUnique({
      where: { id: parseInt(id) },
    });

    if (!onlineTransaction) {
      return res.status(404).send({ message: "OnlineTransaction not found!" });
    }

    res.status(200).json(onlineTransaction);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateOnlineTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { ticketId, amount, status, date, paymentId } = req.body;

    const onlineTransaction = await prisma.onlineTransaction.update({
      where: { id: parseInt(id) },
      data: {
        ...filterNotUndefined({
          ticketId,
          amount,
          status,
          date: new Date(date),
          paymentId,
        }),
      },
    });
    

    res.status(200).json({
      message: "OnlineTransaction updated successfully",
      onlineTransaction,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

 
const deleteOnlineTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.onlineTransaction.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: "OnlineTransaction deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createOnlineTransaction,
  getOnlineTransactions,
  getOnlineTransactionById,
  updateOnlineTransaction,
  deleteOnlineTransaction,
};
