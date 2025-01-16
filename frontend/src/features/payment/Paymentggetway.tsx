import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Briefcase, Calendar, DollarSign } from "lucide-react";

type StepItem = {
  step: number;
  label: string;
  completed?: boolean;
  current?: boolean;
};

export default function PaymentReview() {
  const [activeStep, setActiveStep] = useState<number>(4);

  const handleStepClick = (step: number) => {
    if (step <= activeStep) {
      setActiveStep(step);
      console.log(`Navigating to step ${step}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[
          { step: 1, label: "Passengers", completed: true },
          { step: 2, label: "Options", completed: true },
          { step: 3, label: "Payment", current: true },
          { step: 4, label: "Confirm", completed: false },
        ].map((item, index) => (
          <div
            key={item.step}
            className="flex flex-1 items-center"
            onClick={() => handleStepClick(item.step)}
          >
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center 
                  transition-all duration-200 ease-in-out cursor-pointer
                  hover:scale-110 hover:shadow-md active:scale-95
                  ${
                    item.current
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : item.completed
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
              >
                {item.step}
              </div>
              <span
                className={`mt-2 text-sm transition-colors duration-200
                ${
                  item.current
                    ? "text-red-600"
                    : item.completed
                    ? "text-gray-900"
                    : "text-gray-600"
                }
                hover:font-medium`}
              >
                {item.label}
              </span>
            </div>
            {index < 4 && (
              <div
                className={`h-1 flex-1 transition-all duration-200
                  ${item.completed ? "bg-gray-900" : "bg-gray-200"}`}
              />
            )}
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-semibold text-center mb-8">
        Review your selection
      </h1>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl">Flights</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              For 1 passenger (Including airfare, taxes, fees and
              carrier-imposed charges)
            </span>
            <span className="font-semibold">Total: ETB 54,948</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Flight Details */}
            <div className="flex items-center gap-8">
              <div>
                <div className="text-lg font-semibold">14:50</div>
                <div className="text-sm text-gray-600">Sun 19 Jan 25</div>
                <div className="text-sm">Addis Ababa (ADD)</div>
              </div>

              <div className="flex-1 flex flex-col items-center">
                <Plane className="rotate-90 mb-2" />
                <div className="text-sm text-gray-600">4h 10m</div>
                <div className="text-xs">Non-stop</div>
              </div>

              <div>
                <div className="text-lg font-semibold">20:00</div>
                <div className="text-sm text-gray-600">Sun 19 Jan 25</div>
                <div className="text-sm">Dubai (DXB)</div>
              </div>

              <div>
                <div className="font-semibold">Class / Fare:</div>
                <div className="text-sm">Economy / Flex</div>
              </div>
            </div>

            {/* Fare Rules */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                <span className="text-sm">Checked baggage: 3 x 23kg</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="text-sm">Change fee: USD 50.00</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                <span className="text-sm">Refund fee: USD 150.00</span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="flex justify-between items-center text-sm">
              <div>No-show penalty USD 300.00</div>
              <Button variant="link">View detailed fare conditions</Button>
            </div>

            {/* Bottom Navigation */}
            <div className="flex justify-between items-center pt-4 mt-4 border-t">
              <div className="text-lg font-semibold">Total to be paid:</div>
              <div className="text-2xl font-bold">ETB 54,948</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
