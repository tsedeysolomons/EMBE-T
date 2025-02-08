const paymentWebhook = async (req, res) => {
  try {
    const { tx_ref } = req.body;

    const payment = await prisma.payment.findUnique({
      where: { tx_ref: tx_ref },
    });

    const updatePayment = await prisma.payment.update({
      where: { tx_ref: tx_ref },
      data: {
        status: "success",
      },
    });

    if (!payment) {
      return res.status(404).send({ message: "Payment not found!" });
    }

    res.status(200).json(payment);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  paymentWebhook,
};
