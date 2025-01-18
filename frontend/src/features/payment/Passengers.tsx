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
import Options from "./options";
import { useNavigate } from "react-router-dom";

type TabsType = "ContinueToOptions";

function PassengerDetails({
  handleNext,
}: {
  handleNext: (step: number) => void;
}) {
  const [tabs, setTabs] = useState<TabsType>(null);
  const [isFrequentTrainOpen, setIsFrequentFlyerOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Passenger Details</CardTitle>
          <CardDescription>
            Names must exactly match passport details or National ID details and
            should be entered using English characters only. They can&apos;t be
            changed after your booking is complete.
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
              open={isFrequentTrainOpen}
              onOpenChange={setIsFrequentFlyerOpen}
              className="border rounded-md px-4"
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full py-4">
                <span>Add frequent Train membership details (optional)</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isFrequentTrainOpen ? "transform rotate-180" : ""
                  }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="pb-4 space-y-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Trainline program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ethiopian">
                      Ethiopian Midr Babur
                    </SelectItem>
                    <SelectItem value="Djibuti">Djibuti Rainway</SelectItem>
                  </SelectContent>
                </Select>
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
                  <SelectItem value="number">Passenger 1</SelectItem>
                  <SelectItem value="number">Passenger 2</SelectItem>
                  <SelectItem value="number">Passenger 3</SelectItem>
                  <SelectItem value="number">Passenger 4</SelectItem>
                  <SelectItem value="number">Passenger 5</SelectItem>
                  <SelectItem value="number">Passenger 6</SelectItem>
                  <SelectItem value="number">Passenger 7</SelectItem>
                  <SelectItem value="number">Passenger 8</SelectItem>
                  <SelectItem value="number">Passenger 9</SelectItem>
                  <SelectItem value="number">Passenger 10</SelectItem>
                </SelectContent>
              </Select>
              <div className="grid gap-6 md:grid-cols-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Country/territory" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="et">Ethiopia</SelectItem>
                    <SelectItem value="ae">Djibuti</SelectItem>
                    <SelectItem value="us">Eritrea</SelectItem>
                    <SelectItem value="us">Soamlia</SelectItem>
                    <SelectItem value="us">Kenya</SelectItem>
                    <SelectItem value="us">Sudan</SelectItem>
                    <SelectItem value="us">South-Sudan</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Mobile number" type="tel" />
              </div>
              <Input placeholder="Email address" type="email" />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={() => navigate("/TrainAvalability")}
              >
                Return to Trains
              </Button>
              <Button
                className="bg-red-600 hover:bg-red-800"
                onClick={() => handleNext(2)}
              >
                Continue to Options
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      {/* {tabs === "ContinueToOptions" && <Options />} */}
    </div>
  );
}
export default PassengerDetails;
