import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export default function PassengerDetails() {
  const [isFrequentFlyerOpen, setIsFrequentFlyerOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Progress Steps - Similar to payment.tsx */}
      <div className="flex items-center justify-between mb-8">
        {[
          { step: 1, label: "Flights", completed: true },
          { step: 2, label: "Passengers", current: true },
          { step: 3, label: "Options", completed: false },
          { step: 4, label: "Payment", completed: false },
          { step: 5, label: "Confirm", completed: false },
        ].map((item, index) => (
          <div key={item.step} className="flex flex-1 items-center">
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center 
                  transition-all duration-200 ease-in-out
                  ${
                    item.current
                      ? "bg-red-600 text-white"
                      : item.completed
                      ? "bg-gray-900 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
              >
                {item.step}
              </div>
              <span className="mt-2 text-sm">{item.label}</span>
            </div>
            {index < 4 && (
              <div
                className={`h-1 flex-1 ${
                  item.completed ? "bg-gray-900" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Passenger 1 (Adult)</CardTitle>
          <CardDescription>
            Names must exactly match passport details and should be entered
            using English characters only. They can&apos;t be changed after your
            booking is complete.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="space-y-6">
            {/* Passenger Details */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="col-span-2 md:col-span-1">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Title" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mr">Mr</SelectItem>
                    <SelectItem value="mrs">Mrs</SelectItem>
                    <SelectItem value="ms">Ms</SelectItem>
                    <SelectItem value="dr">Dr</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2 grid gap-6 md:grid-cols-2">
                <Input placeholder="First name" />
                <Input placeholder="Last name" />
              </div>
            </div>

            {/* Frequent Flyer Section */}
            <Collapsible
              open={isFrequentFlyerOpen}
              onOpenChange={setIsFrequentFlyerOpen}
              className="border rounded-md px-4"
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full py-4">
                <span>Add frequent flyer membership details (optional)</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isFrequentFlyerOpen ? "transform rotate-180" : ""
                  }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="pb-4 space-y-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select airline program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ethiopian">
                      Ethiopian Airlines
                    </SelectItem>
                    <SelectItem value="emirates">Emirates Skywards</SelectItem>
                    <SelectItem value="qatar">Qatar Airways</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Membership number" />
              </CollapsibleContent>
            </Collapsible>

            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact details</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Contact person" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="passenger1">Passenger 1</SelectItem>
                </SelectContent>
              </Select>
              <div className="grid gap-6 md:grid-cols-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Country/territory" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="et">Ethiopia</SelectItem>
                    <SelectItem value="ae">United Arab Emirates</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Mobile number" type="tel" />
              </div>
              <Input placeholder="Email address" type="email" />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button variant="outline">Return to Flights</Button>
              <Button className="bg-red-600 hover:bg-red-700">
                Continue to Options
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
