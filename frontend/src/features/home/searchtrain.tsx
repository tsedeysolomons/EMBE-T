import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TrainAvalability from "@/features/searchResult/trainavalability"; // Adjust the import path as necessary
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
//import { useState } from "react";

//type TabsType = "trainValidation";

const SearchTrain = () => {
  // const [tabs, setTabs] = useState<TabsType | null>(null);

  const [departure, setDeparture] = useState("Adiss Ababa");
  const [arrival, setArrival] = useState("Dredawa");

  const [departureDate, setDepartureDate] = useState<string>("");

  const [classType, setClassType] = useState("");

  const navigate = useNavigate();

  const searchResult = () => {
    navigate(
      `/TrainAvalability?departure=${departure}&arrival=${arrival}&departureDate=${departureDate}&classType=${classType}`
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 w-full">
      {/* Departure Airport */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Departure TrainRide</label>
        <Select defaultValue={departure} onValueChange={(e) => setDeparture(e)}>
          <SelectTrigger>
            <SelectValue placeholder="Addis Ababa" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Addis">Addis Ababa</SelectItem>
            <SelectItem value="Adama">Adama </SelectItem>
            <SelectItem value="Modjo">Modjo</SelectItem>
            <SelectItem value="Awash">Awash</SelectItem>
            <SelectItem value="Dredawa">Dire Dawa</SelectItem>
            <SelectItem value="Dewele">Dewele</SelectItem>
            <SelectItem value="Nagad">Nagad </SelectItem>
            <SelectItem value="Djibouti">Djibouti </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Arrival Airport */}
      <div className="space-y-2">
        <label className="text-sm font-medium ">Arrival TrainRide</label>
        <Select defaultValue={arrival} onValueChange={(e) => setArrival(e)}>
          <SelectTrigger>
            <SelectValue placeholder="Djibouti" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Addis Ababa">Addis Ababa</SelectItem>
            <SelectItem value="Adama">Adama </SelectItem>
            <SelectItem value="Modjo">Modjo</SelectItem>
            <SelectItem value="Awash">Awash</SelectItem>
            <SelectItem value="Dredawa">Dire Dawa</SelectItem>
            <SelectItem value="Dewele">Dewele</SelectItem>
            <SelectItem value="Nagad">Nagad </SelectItem>
            <SelectItem value="Djibouti">Djibouti </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Date Selection */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Travel dates and times</label>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <Input
              type="date"
              placeholder="Departing Date"
              className="w-full"
              onChange={(e) => setDepartureDate(e.target.value)}
              value={departureDate}
            />
            <div className="flex flex-col md:flex-row gap-2 w-full">
              <Input
                type="date"
                placeholder="Returning Date"
                className="w-full"
              />
            </div>
          </div>
          {/* 
            <Input
              type="time"
              placeholder="Returning Time"
              className="w-full"
            />
           */}
        </div>
      </div>

      {/* Passengers */}
      <div className="  space-y-2">
        <label className="text-sm font-medium">Passengers</label>
        <Select defaultValue="1">
          <SelectTrigger>
            <SelectValue placeholder="Select passengers" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Passenger</SelectItem>
            <SelectItem value="2">2 Passengers</SelectItem>
            <SelectItem value="3">3 Passengers</SelectItem>
            <SelectItem value="4">4 Passengers</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Class */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Class</label>
        <Select defaultValue={classType} onValueChange={(v) => setClassType(v)}>
          <SelectTrigger>
            <SelectValue placeholder="Select class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="economy">Economy Class</SelectItem>
            <SelectItem value="first">First Class</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Search Button */}
      <Button
        className="w-full bg-red-600 hover:bg-red-700 text-white"
        onClick={searchResult}
      >
        Search flights
      </Button>
    </div>
  );
};

export default SearchTrain;
