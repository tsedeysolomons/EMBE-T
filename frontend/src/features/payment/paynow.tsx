import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Copy, Plane } from "lucide-react";
import { useState } from "react";

export default function ConfirmationPage() {
  const [isCopied, setIsCopied] = useState(false);

  const copyBookingReference = () => {
    navigator.clipboard.writeText("BBSJZ2");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="w-full bg-gray-900 px-6 py-4">
        <div className="max-w-[1400px] mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-16%20170503-sonwxVBHqMXYubVz9b3yivmaFrwnVt.png"
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
              Your trip to dubai
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl font-serif mb-3">Booking confirmed</h1>
              <p className="text-gray-600">
                You&apos;ll receive a confirmation email to{" "}
                <span className="font-medium">tsedeys19@gmail.com</span>{" "}
                shortly.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <span className="text-gray-600 mb-1">Booking reference:</span>
              <div className="flex items-center gap-2">
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
              </div>
            </div>
          </div>

          {/* Dubai Image Card */}
          <Card className="w-full overflow-hidden mb-8">
            <div className="relative w-full h-[500px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-16%20170503-sonwxVBHqMXYubVz9b3yivmaFrwnVt.png"
                alt="Dubai Skyline"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Card>

          {/* Flight Details */}
          <Card className="w-full p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              {/* Departure */}
              <div>
                <div className="text-sm text-gray-600">Sun 19 Jan</div>
                <div className="text-3xl font-semibold">14:50</div>
                <div className="text-xl">ADD</div>
              </div>

              {/* Flight Duration */}
              <div className="flex flex-col items-center col-span-2">
                <div className="text-sm text-gray-600 mb-2">4 hrs 10 mins</div>
                <div className="flex items-center gap-2 w-full max-w-[300px]">
                  <div className="h-3 w-3 rounded-full bg-gray-400" />
                  <div className="h-[2px] flex-1 bg-gray-300" />
                  <Plane className="h-5 w-5 rotate-90" />
                </div>
                <div className="text-sm text-gray-600 mt-2">Non-stop</div>
              </div>

              {/* Arrival */}
              <div className="text-right">
                <div className="text-sm text-gray-600">Sun 19 Jan</div>
                <div className="text-3xl font-semibold">20:00</div>
                <div className="text-xl">DXB</div>
                <div className="text-lg font-medium text-green-700 mt-2">
                  Economy Flex
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
                <span className="text-md font-semibold">54,948</span>
              </div>
              <Button className="bg-red-500 hover:bg-red-700 text-white  text-md h-auto">
                Pay now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
