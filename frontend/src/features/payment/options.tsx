import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Plane } from "lucide-react";

export default function Options() {
  return (
    <div className="w-full px-6 py-4">
      {/* Header */}
      <div className="bg-white shadow-sm mb-6">
        <div className="w-full px-6 py-3">
          <div className="flex items-center justify-between">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-16%20164354-F79v98EgkZw3aMRjQmfgjrVgMqWt5D.png"
              alt="Emirates Logo"
              width={130}
              height={40}
              className="object-contain"
            />
            <Button variant="outline" className="flex items-center gap-2">
              View summary <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Flight Info */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-lg mb-2">
          <span>Addis Ababa (ADD)</span>
          <Plane className="h-5 w-5 rotate-90" />
          <span>Dubai (DXB)</span>
        </div>
        <div className="flex gap-4 text-sm text-gray-600">
          <span>One way</span>
          <span>•</span>
          <span>1 passenger</span>
          <Button variant="link" className="p-0 h-auto text-red-600">
            Change search
          </Button>
        </div>
        <div className="flex justify-end">
          <div className="text-sm">
            Cost
            <div className="text-xl font-semibold">ETB 54,948</div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-12 relative">
        <div className="absolute h-1 bg-gray-200 left-0 right-0 top-3 -z-10" />
        <div className="absolute h-1 bg-blue-600 left-0 right-1/3 top-3 -z-10" />
        {["Flights", "Passengers", "Options", "Payment"].map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-6 h-6 rounded-full ${
                index <= 2 ? "bg-blue-600" : "bg-gray-200"
              } mb-2`}
            />
            <span
              className={`text-sm ${
                index === 2 ? "text-blue-600 font-medium" : "text-gray-600"
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="mb-12">
        <h1 className="text-3xl font-serif mb-8">
          Enhance your travel experience
        </h1>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-8">
            <div className="flex items-center gap-8">
              <div className="w-48 h-48 relative rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-16%20164354-F79v98EgkZw3aMRjQmfgjrVgMqWt5D.png"
                  alt="Additional Baggage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2">
                  Add additional baggage
                </h3>
                <p className="text-gray-600 mb-4">
                  For 1 additional bag of 23kg
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-sm text-gray-600">From</span>
                    <div className="text-2xl font-semibold">ETB 16,444</div>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">
                    Add baggage
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex justify-between px-4">
        <Button variant="outline">Back to Passengers</Button>
        <Button className="bg-red-600 hover:bg-red-700">
          Continue to Payment
        </Button>
      </div>
    </div>
  );
}
