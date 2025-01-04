import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Tag, Info } from "lucide-react";
import TrainIcon from "@mui/icons-material/Train";
import ManageBooking from "./managebook";
import FlightDetails from "./whatontrain";
import SearchTrain from "./searchtrain";
import { useState } from "react";

type TabsType = "search" | "manage" | "whats";

export default function Search() {
  const [tabs, setTabs] = useState<TabsType>("search");

  return (
    <div className="flex-auto flex  mx-auto  z-50 overflow-auto top-0 sticky">
      <Card className="border-none shadow-lg">
        <CardContent className="p-6 border-2 border-red-">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap border-separate mb-8  ">
            <Button
              variant="ghost"
              className="border-b-2 border-red-600 text-red-600 rounded-none px-6"
              onClick={() => setTabs("search")}
            >
              <TrainIcon className="mr-2 h-4 w-4" />
              Search TrainRide
            </Button>
            <Button
              variant="ghost"
              className="border-b-2 border-red-600 text-red-600 rounded-none px-6"
              onClick={() => setTabs("manage")}
            >
              <Tag className="mr-2 h-4 w-4" />
              <a>Manage booking</a>
            </Button>
            <Button
              variant="ghost"
              className="border-b-2  border-red-600 text-red-600 rounded-none px-6 space-x-1"
              onClick={() => setTabs("whats")}
            >
              <Info className="mr-2 h-4 w-4" />
              What&apos;s on your flight
            </Button>
          </div>
          <div className="mb-4">
            <a
              href="#"
              className="text-red-600 hover:text-red-950 text-sm flex justify-end items-center underline underline-offset-4"
            >
              Advanced search: multi-city, promo codes, partner TrainRide →
            </a>
          </div>

          {tabs === "search" && <SearchTrain />}
          {tabs === "manage" && <ManageBooking />}
          {tabs === "whats" && <FlightDetails />}
        </CardContent>
      </Card>
    </div>
  );
}
