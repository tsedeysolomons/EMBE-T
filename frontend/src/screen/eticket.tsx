import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
//import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { format } from "date-fns";

interface ETicketProps {
  ticketNo: number;
  passengerId: number;
  trainId: number;
  setNo: number;
  class: string;
  journeyDate: Date;
  departureStatus: string;
  ticketPrice: number;
  passenger: {
    name: string;
  };
}

export default function ETicket({
  ticketNo,
  trainId,
  setNo,
  class: ticketClass,
  journeyDate,
  departureStatus,
  ticketPrice,
  passenger,
}: ETicketProps) {
  const ticketData = JSON.stringify({
    ticketNo,
    trainId,
    passenger: passenger.name,
  });

  return (
    <Card className="w-full max-w-2xl bg-white">
      <CardHeader className="bg-[#1B5E20] text-white">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">
              E-Digital E-Ticket
            </CardTitle>
            <p className="text-lg">EthiSeat</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold">ETB{ticketPrice}</p>
            <p className="text-sm">ETB</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-8 p-6">
        <div className="space-y-6">
          <QRCodeSVG value={ticketData} size={150} />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">
              Train Details
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">ID:</span>
                <span>{trainId}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Departure:</span>
                <span>{format(journeyDate, "MM/dd/yy")}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Class:</span>
                <span>{ticketClass}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Status:</span>
                <span>{departureStatus}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="relative h-48 w-full">
            <img
              src="./asset/image/train1.jpg"
              alt="E-Ticket Preview"
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">
              Passenger Details
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Name:</span>
                <span>{passenger.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Seat:</span>
                <span>{setNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Class:</span>
                <span>{ticketClass}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-4">
          <div className="w-full flex justify-center">
            <div className="text-center">
              <div className="h-12 w-64 bg-black mb-2" />
              <p className="font-mono">
                ETB{ticketNo.toString().padStart(9, "0")}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
