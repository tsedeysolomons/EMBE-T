import { useState } from "react";
import PassengerDetails from "./Passengers";
import Options from "./options";
import Payment from "./payment";
import SetSelection from "./seatselection";
import ConfirmationPage from "./paynow";

type TabsType =
  | "PassengerDetails"
  | "Options"
  | "Payment"
  | "ConfirmationPage"
  | "SetSelection";

export default function PaymentReview() {
  const [tabs, setTabs] = useState<TabsType>("PassengerDetails");
  const [activeStep, setActiveStep] = useState<number>(1);

  const handleStepClick = (step: number) => {
    setActiveStep(step);
    switch (step) {
      case 1:
        setTabs("PassengerDetails");
        break;
      case 2:
        setTabs("Options");
        break;
      case 3:
        setTabs("Payment");
        break;
      case 4:
        setTabs("SetSelection");
        break;
      case 5:
        setTabs("ConfirmationPage");
        break;
      default:
        setTabs("PassengerDetails");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[
          { step: 1, label: "Passengers" },
          { step: 2, label: "Options" },
          { step: 3, label: "Payment" },
          { step: 4, label: "SetSelection" },
          { step: 5, label: "Confirm" },
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
                    item.step === activeStep
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : item.step < activeStep
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
              >
                {item.step}
              </div>
              <span
                className={`mt-2 text-sm transition-colors duration-200
                ${
                  item.step === activeStep
                    ? "text-red-600"
                    : item.step < activeStep
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
                  ${item.step < activeStep ? "bg-gray-900" : "bg-gray-200"}`}
              />
            )}
          </div>
        ))}
      </div>
      {tabs === "PassengerDetails" && (
        <PassengerDetails handleNext={handleStepClick} />
      )}
      {tabs === "Options" && <Options handleNext={handleStepClick} />}
      {tabs === "Payment" && <Payment handleNext={handleStepClick} />}
      {tabs === "SetSelection" && <SetSelection handleNext={handleStepClick} />}
      {tabs === "ConfirmationPage" && (
        <ConfirmationPage handleNext={handleStepClick} />
      )}
    </div>
  );
}
