const paymentWebhook = async (req, res) => {
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
