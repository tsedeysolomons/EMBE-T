import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, ArrowLeft } from "lucide-react";

export default function BookingHistory() {
  const [dateRange, setDateRange] = useState("last-week");
  const [customRange, setCustomRange] = useState("");
  const [transportType, setTransportType] = useState("all");

  const bookingData = [
    {
      type: "Train",
      d1: 20,
      d2: 22,
      d3: 20,
      d4: 0,
      d5: 30,
      d6: 30,
      d7: 30,
      d8: 0,
      d9: 10,
      d10: 0,
    },
    {
      type: "Departed",
      d1: 20,
      d2: 0,
      d3: 0,
      d4: 11,
      d5: 0,
      d6: 11,
      d7: 35,
      d8: 1,
      d9: 0,
      d10: 0,
    },
    {
      type: "Bus",
      d1: 30,
      d2: 0,
      d3: 0,
      d4: 10,
      d5: 0,
      d6: 30,
      d7: 30,
      d8: 1,
      d9: 20,
      d10: 0,
    },
  ];

  return (
    <div className="w-full max-w-[900px] mx-auto p-6 bg-white rounded-lg shadow-lg">
      <header className="flex items-center justify-between mb-8 border-b pb-4">
        <h1 className="text-2xl font-bold">My Account: BOOKING HISTORY</h1>
        <Button variant="ghost" size="icon">
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </header>

      <div className="grid md:grid-cols-[250px,1fr] gap-6">
        {/* Left Sidebar */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-semibold text-lg">DATE RANGE</h2>
            <RadioGroup defaultValue="last-week" onValueChange={setDateRange}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="last-week" id="last-week" />
                <label htmlFor="last-week">Last week</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="last-month" id="last-month" />
                <label htmlFor="last-month">Last month</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="custom" />
                <label htmlFor="custom">Custom</label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <h2 className="font-semibold text-lg">Transport Type</h2>
            <RadioGroup defaultValue="all" onValueChange={setTransportType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="train" id="train" />
                <label
                  htmlFor="train"
                  className="flex items-center justify-between w-full"
                >
                  Train
                  <ChevronRight className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="departed" id="departed" />
                <label
                  htmlFor="departed"
                  className="flex items-center justify-between w-full"
                >
                  Departed
                  <ChevronRight className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bus" id="bus" />
                <label
                  htmlFor="bus"
                  className="flex items-center justify-between w-full"
                >
                  Bus
                  <ChevronRight className="h-4 w-4" />
                </label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div className="relative">
            <Input
              placeholder="Custom range"
              value={customRange}
              onChange={(e) => setCustomRange(e.target.value)}
              className="bg-gray-50"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20">
              <img
                src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-m59uL4iMOHP2EgYgbhMvMucQwVYuSy.png`}
                alt="Train illustration"
                className="w-24 h-12 object-contain"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">TICKET TYPE</h3>
            <div className="flex gap-4">
              <Button variant="secondary" className="flex-1">
                VIEW
              </Button>
              <Button variant="secondary" className="flex-1">
                REPRINTED
              </Button>
              <Button variant="secondary" className="flex-1">
                CANCELLED
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-sm">
                  <th className="border p-2 text-left">Type</th>
                  <th className="border p-2">D1</th>
                  <th className="border p-2">D2</th>
                  <th className="border p-2">D3</th>
                  <th className="border p-2">D4</th>
                  <th className="border p-2">D5</th>
                  <th className="border p-2">D6</th>
                  <th className="border p-2">D7</th>
                  <th className="border p-2">D8</th>
                  <th className="border p-2">D9</th>
                  <th className="border p-2">D10</th>
                </tr>
              </thead>
              <tbody>
                {bookingData.map((row, index) => (
                  <tr key={index} className="text-center">
                    <td className="border p-2 text-left font-medium">
                      {row.type}
                    </td>
                    <td className="border p-2">{row.d1}</td>
                    <td className="border p-2">{row.d2}</td>
                    <td className="border p-2">{row.d3}</td>
                    <td className="border p-2">{row.d4}</td>
                    <td className="border p-2">{row.d5}</td>
                    <td className="border p-2">{row.d6}</td>
                    <td className="border p-2">{row.d7}</td>
                    <td className="border p-2">{row.d8}</td>
                    <td className="border p-2">{row.d9}</td>
                    <td className="border p-2">{row.d10}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
