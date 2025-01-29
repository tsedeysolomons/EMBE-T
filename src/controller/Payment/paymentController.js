const prisma = require("../../service/db");
const { filterNotUndefined } = require("../../utiles");
const axios = require("axios");

const initiatePayment = async (req, res) => {
  try {
    const { amount, currency, email, firstName, lastName, callbackUrl } =
      req.body;

    // Replace with your Chapa public key
    const publicKey = process.env.CHAPA_PUBLIC_KEY;

    const response = await axios.post(
      "https://api.chapa.co/v1/transaction/initialize",
      {
        amount,
        currency,
        email,
        first_name: firstName,
        last_name: lastName,
        tx_ref: "TX_REF_" + Date.now(),
        callback_url: callbackUrl,
        customization: {
          title: "Ethiopian Midr Babur",
          description: "Payment for train ticket",
          logo: "https://www.chinadaily.com.cn/world/images/attachement/jpg/site1/20161005/eca86bd9d543195e77c102.jpg", // Replace with your logo URL
        },
      },
      {
        headers: {
          Authorization: `Bearer ${publicKey}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createPayment = async (req, res) => {
  try {
    const {
      paymentType,
      paymentAmount,
      paymentDate,
      currency,
      status,
      reservationId,
    } = req.body;

    if (
      !paymentType ||
      !paymentAmount ||
      !paymentDate ||
      !currency ||
      !status ||
      !reservationId
    ) {
      return res.status(400).send({ message: "All fields are required!" });
    }

    const payment = await prisma.payment.create({
      data: {
        paymentType,
        paymentAmount,
        paymentDate: new Date(paymentDate),
        currency,
        status,
        reservationId,
      },
    });

    // const onlineTransactions = await prisma.onlineTransaction.create({
    //   data: {
    //     id,
    //     ticketId,
    //     amount,
    //     status,
    //     date,
    //     paymentId: payment.id,
    //   },
    // });

    res.status(201).json({ message: "Payment created successfully", payment });
  } catch (error) {
    console.log(`${error.message} this is error.`);
    res.status(500).send(error.message);
  }
};

const getPayments = async (req, res) => {
  try {
    const payments = await prisma.payment.findMany();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getPaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await prisma.payment.findUnique({
      where: { id: parseInt(id) },
    });

    if (!payment) {
      return res.status(404).send({ message: "Payment not found!" });
    }

    res.status(200).json(payment);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      paymentType,
      paymentAmount,
      paymentDate,
      currency,
      status,
      reservationId,
    } = req.body;

    const payment = await prisma.payment.update({
      where: { id: parseInt(id) },
      data: {
        ...filterNotUndefined({
          paymentType,
          paymentAmount,
          paymentDate,
          currency,
          status,
          reservationId,
        }),
      },
    });

    res.status(200).json({ message: "Payment updated successfully", payment });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.payment.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: "Payment deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createPayment,
  getPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
  initiatePayment, // Add the new function to the exports
};
