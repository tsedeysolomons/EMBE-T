import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { getTimeDifference } from "@/lib/utils";
import { Link } from "react-router-dom";

export type TrainCardProps = {
  HardSeatPrice: number;
  HardSleepPrice: number;
  adminId: number;
  arrivalDate: string; // ISO 8601 date-time string
  capacity: number;
  departureDate: string; // ISO 8601 date-time string
  endStation: string;
  id: number;
  name: string;
  startStation: string;
  status: string;
  stops: string[];
  trainNo: number;
  type: string;
  tabs: "HardSeat" | "HardSleep";
};

const TrainCard = ({
  HardSeatPrice,
  HardSleepPrice,
  arrivalDate,
  departureDate,
  endStation,
  startStation,
  stops,
  tabs,
  id,
}: TrainCardProps) => {
  const [selectedTab, setSelectedTab] = useState<"HardSeat" | "HardSleep">(
    tabs
  );

  return (
    <Link to={""}>
      <section className="mb-6 shadow-lg hover:scale-105">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-12">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">
                    {/* Assuming departureDate is in ISO 8601 format */}
                    {new Date(departureDate).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}{" "}
                    {new Date(departureDate).getDate()}{" "}
                    {new Date(departureDate).toLocaleString("en-US", {
                      month: "short",
                    })}
                  </div>
                  <div className="text-2xl font-semibold">
                    {new Date(departureDate).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                  <div className="text-sm font-medium">
                    {startStation
                      .split(" ")
                      .map((v) => v[0])
                      .join("")
                      .toUpperCase()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {startStation}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">
                    {/* Calculate travel time (assuming arrivalDate and departureDate are in ISO 8601 format) */}
                    {getTimeDifference(departureDate, arrivalDate)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Connects in {stops[1]}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">
                    {new Date(arrivalDate).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}{" "}
                    {new Date(arrivalDate).getDate()}{" "}
                    {new Date(arrivalDate).toLocaleString("en-US", {
                      month: "short",
                    })}
                  </div>
                  <div className="text-2xl font-semibold">
                    {new Date(arrivalDate).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                  <div className="text-sm font-medium">
                    {endStation
                      .split(" ")
                      .map((v) => v[0])
                      .join("")
                      .toUpperCase()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {endStation}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg">HardSleep Class</div>
                <div className="text-sm text-muted-foreground">from ETB</div>
                <div className="text-2xl font-semibold text-green-700">
                  {tabs === "HardSeat"
                    ? HardSeatPrice.toFixed(2)
                    : HardSleepPrice.toFixed(2)}
                </div>
                <Link to={`/PaymentReview/${id}`}>
                  <button
                    className="border border-green-700 px-4 py-1 rounded hover:bg-green-700 hover:text-white transition-colors duration-300"
                    onClick={() => setSelectedTab("HardSeat")}
                  >
                    Select
                  </button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </Link>
  );
};

export default TrainCard;
