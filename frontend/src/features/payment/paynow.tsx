import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";
import TrainIcon from "@mui/icons-material/Train";
import { selectClassType } from "../searchResult/searchSlice";
import { useSelector } from "react-redux";
import { Train } from "./types";
import { useInitiatPaymentMutation } from "./bookApiSlice";
import {
  selecReservation,
  selectPaymentDetails,
  selectUser,
  setPaymentDetails,
} from "./bookSlice";

export default function ConfirmationPage({
  handleNext,
  train,
}: {
  handleNext: (step: number) => void;
  train: Train;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const copyBookingReference = () => {
    navigator.clipboard.writeText("BBSJZ2");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const clasType = useSelector(selectClassType);

  const {
    data: { reservation },
  } = useSelector(selecReservation);

  console.log(reservation);

  const user = useSelector(selectUser);

  const handlRedirctToChapa = (checkOutUrl: string) => {
    window.open(checkOutUrl, "_blank");
  };

  /*
  const handlePayment = () => {
    const chapa = new.chapa({
      publicKey: "YOUR_CHAPA_PUBLIC_KEY", // Replace with your Chapa public key
      amount:
        clasType === "HardSeat"
          ? train?.HardSeatPrice.toFixed(2)
          : train?.HardSleepPrice.toFixed(2),
      currency: "ETB",
      email: "customer@example.com", // Replace with the customer's email
      firstName: "Customer", // Replace with the customer's first name
      lastName: "Name", // Replace with the customer's last name
      tx_ref: "TX_REF_" + Date.now(), // Unique transaction reference
      callback_url: "http://localhost:3000/payment-success", // Replace with your callback URL
      customization: {
        title: "Ethiopian Midr Babur",
        description: "Payment for train ticket",
        logo: "https://www.chinadaily.com.cn/world/images/attachement/jpg/site1/20161005/eca86bd9d543195e77c102.jpg", // Replace with your logo URL
      },
    });
  };
*/

  const priceAmount =
    clasType === "HardSleep"
      ? train?.HardSleepPrice.toFixed(2)
      : train?.HardSeatPrice.toFixed(2);

  const [initiatPayment, { isLoading }] = useInitiatPaymentMutation();

  const paymentDetails = useSelector(selectPaymentDetails);

  const handlePayment = async (): Promise<void> => {
    if (!paymentDetails.checkout_url) {
      const url: { data: { data: { checkout_url: string } } } =
        await initiatPayment({
          newBookingInfo: {
            amount: parseFloat(priceAmount),
            currency: "ETB",
            email: user?.email,
            firstName: user?.firstName,
            lastName: user?.lastName,
            callbackUrl: window.location.href,
            returnUrl: `http://localhost:5173/${reservation.id}/eTicket`,
            reservationId: reservation.id,
          },
        });

      setPaymentDetails(url?.data?.data);

      if (url?.data) handlRedirctToChapa(url?.data?.data?.checkout_url);
    }

    handlRedirctToChapa(paymentDetails?.checkout_url);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="w-full bg-gray-900 px-6 py-4">
        <div className="max-w-[1400px] mx-auto">
          <img
            src="https://i.onthe.io/0fgjhsio0qm4co98o.70ca36e5.jpg"
            alt="Emirates Logo"
            width={130}
            height={40}
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-6">
        <div className="max-w-[1400px] mx-auto py-8">
          {/* Confirmation Header */}
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <Check className="h-5 w-5 text-green-600" />
            <span className="uppercase text-sm font-medium">
              Your trip to {train?.endStation}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl font-serif mb-3">Booking confirmed</h1>
              <p className="text-gray-600">
                You&apos;ll receive a confirmation email to{" "}
                <span className="font-medium">EMAIL</span> shortly.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <span className="text-gray-600 mb-1">Booking reference:</span>
              {/* <div className="flex items-center gap-2">
                <span className="text-2xl font-medium">BBSJZ2</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyBookingReference}
                  className="h-8"
                >
                  {isCopied ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div> */}
            </div>
          </div>

          {/* Dubai Image Card */}
          <Card className="w-full overflow-hidden mb-8">
            <div className="relative w-full h-[500px]">
              <img
                src="https://static01.nyt.com/images/2019/04/14/travel/08ethiopia-train1/08ethiopia-train1-superJumbo-v2.jpg?quality=90&auto=webp"
                alt="Dubai Skyline"
                className="object-cover"
              />
            </div>
          </Card>

          {/* Flight Details */}
          <Card className="w-full p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              {/* Departure */}
              <div>
                <div className="text-sm text-gray-600">
                  {new Date(train.departureDate).toDateString()}
                </div>
                <div className="text-3xl font-semibold">
                  {new Date(train.departureDate).toTimeString().split(" ")[0]}
                </div>
                <div className="text-xl">{train?.startStation}</div>
              </div>

              {/* Flight Duration */}
              <div className="flex flex-col items-center col-span-2">
                <div className="text-sm text-gray-600 mb-2">4 hrs 10 mins</div>
                <div className="flex items-center gap-2 w-full max-w-[300px]">
                  <div className="h-3 w-3 rounded-full bg-gray-400" />
                  <div className="h-[2px] flex-1 bg-gray-300" />
                  <TrainIcon className="h-5 w-5 " />
                </div>
                <div className="text-sm text-gray-600 mt-2">Non-stop</div>
              </div>

              {/* Arrival */}
              <div className="text-right">
                <div className="text-sm text-gray-600">
                  {new Date(train.arrivalDate).toTimeString().split(" ")[0]}
                </div>
                <div className="text-3xl font-semibold">
                  {new Date(train.arrivalDate).toTimeString().split(" ")[0]}
                </div>
                <div className="text-xl">{train?.endStation}</div>
                <div className="text-lg font-medium text-green-700 mt-2">
                  Enjoy your Travel
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 w-full bg-gray-50 border-t">
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-md text-gray-700">Total to be paid</span>
              <span className="text-sm text-gray-500">(in ETB)</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-baseline gap-2">
                <span className="text-gray-700">ETB</span>
                <span className="text-md font-semibold">
                  <div className="text-xl text-green-500 font-semibold">
                    {priceAmount}
                  </div>
                </span>
              </div>
              <Button
                onClick={handlePayment}
                className="bg-red-500 hover:bg-red-700 text-white  text-md h-auto"
              >
                Pay now with Chapa <TrainIcon className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
