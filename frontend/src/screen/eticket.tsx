import { Image } from "/asset/image";
import { QRCodeSVG } from "qrcode.react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ETicket() {
  return (
    <Card className="w-full max-w-2xl mx-auto bg-white p-4 relative overflow-hidden">
      <div className="flex items-start gap-4">
        {/* Logo and Title Section */}
        <div className="flex flex-col items-center">
          <Image
            src="/placeholder.svg?height=50&width=50"
            alt="Ethiopian Railways Logo"
            width={50}
            height={50}
            className="mb-2"
          />
          <span className="text-sm font-semibold">Ethiopian</span>
        </div>

        <div className="flex-1">
          {/* Header */}
          <div className="bg-[#1B5E4B] text-white p-3 rounded-t-lg">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">E-Digital E-Ticket</h1>
              <span className="text-lg">ETBE1</span>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span>EthiSeat</span>
              <span>ETB</span>
            </div>
          </div>

          {/* Ticket Content */}
          <div className="border-2 border-t-0 border-[#1B5E4B] p-4 rounded-b-lg">
            <div className="grid grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <QRCodeSVG
                  value="https://ethiopian-railways.com/ticket/123"
                  size={120}
                  className="mb-4"
                />
                <div>
                  <h3 className="text-sm text-gray-600">Train Details</h3>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="font-semibold">ID:</span>
                    <span>2</span>
                    <span className="font-semibold">Departure:</span>
                    <span>2/2/20</span>
                    <span className="font-semibold">Class:</span>
                    <span>22B</span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <Image
                  src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-01-11%2018.24.11%20-%20A%20realistic%20and%20professional%20design%20for%20a%20digital%20E-Ticket%20for%20an%20Ethiopian%20train%20service.%20The%20ticket%20is%20presented%20in%20a%20real-world%20style%20with%20elements-8Hx6p6EiXd962XpjS90ux7sGHaOhIl.webp`}
                  alt="Ethiopian Train"
                  width={200}
                  height={100}
                  className="w-full object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-sm text-gray-600">Passenger Details</h3>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="font-semibold">Name:</span>
                    <span>22</span>
                    <span className="font-semibold">Seat:</span>
                    <span>22</span>
                    <span className="font-semibold">Class:</span>
                    <span>ETB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Barcode Section */}
            <div className="mt-6 text-center">
              <div className="inline-block">
                <div className="h-8 w-48 bg-gradient-to-r from-black to-black bg-[length:8px_100%] bg-repeat-x"></div>
                <span className="text-sm text-gray-600">ETB123456789</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
