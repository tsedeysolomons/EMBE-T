import { useState } from "react";
//import HardSleep from "@/features/searchResult/haedsleep"; // Adjusted path
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { useGetTrainsQuery } from "./searchApiSlice";
import TrainCard, { TrainCardProps } from "@/features/searchResult/train-card"; // Adjusted path
import { useSearchParams } from "react-router-dom";
import { setClassType } from "./searchSlice";
import { useDispatch } from "react-redux";

type TabsType = "HardSeat" | "HardSleep";

function SearchTrainAvalability() {
  const [tabs, setTabs] = useState<TabsType>("HardSeat");

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  const { data: trains, error } = useGetTrainsQuery({
    departure: searchParams.get("departure") ?? "",
    arrival: searchParams.get("arrival") ?? "",
    travelTimeAndDate: searchParams.get("departureDate") ?? "",
    classType: searchParams.get("classType") ?? "",
  });

  if (error) return <div>Error: {error?.message}</div>;

  if (!trains) return <div>Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-4">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">Addis Ababa (ADD)</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-lg">Djibouti (DJB)</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>One way</span>
          <span>•</span>
          <span>1 passenger</span>
          <Button variant="link" className="text-sm p-0 h-auto">
            Change search
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            Choose your outbound Train Ride
          </h1>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">
              Lowest total price for 1 passenger ETB
            </div>
            <div className="text-2xl font-semibold text-green-700">128</div>
            <div className="text-sm text-muted-foreground">
              Inclusive of trainfare, breakfast and launch,
            </div>
          </div>
        </div>

        {/* Notice Card */}
        <Card className="bg-muted/50">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">
                  You have been taken to our Ethiopia site
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  You have now been directed to the Ethiopia website to finalize
                  this booking. Your booking will be subject to the terms and
                  conditions of the Ethiopia website, including those relating
                  to consumer protections. Please note that your booking will be
                  charged in Ethiopian birr (ETB)
                </p>
              </div>
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Date Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-lg">Thursday, 16 January 2025</h2>
            <span className="text-sm text-muted-foreground">(1 option)</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Previous day
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              Next day
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Class Selection */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-2">
              <span className="text-sm">Show prices for:</span>
              <Button
                variant={tabs === "HardSeat" ? "default" : "outline"}
                onClick={() => {
                  setTabs("HardSeat");
                  dispatch(setClassType({ classType: "HardSeat" }));
                }}
              >
                HardSeat
              </Button>
              <Button
                variant={tabs === "HardSleep" ? "default" : "outline"}
                onClick={() => {
                  setTabs("HardSleep");
                  dispatch(setClassType({ classType: "HardSleep" }));
                }}
              >
                HardSleep
              </Button>
            </div>
            {trains.ids.map((idx) => (
              <TrainCard
                {...(trains.entities[idx] as TrainCardProps)}
                tabs={tabs}
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchTrainAvalability;
