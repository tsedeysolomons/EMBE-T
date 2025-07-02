// Import components and hooks
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../../components/ui/tooltip";
import { Info } from "lucide-react";

const SearchTrain = () => {
  // State management for form fields
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState<string>("");
  const [classType] = useState("");
  const navigate = useNavigate();

  // Handle search button click
  const searchResult = () => {
    navigate(
      `/TrainAvalability?departure=${departure}&arrival=${arrival}&departureDate=${departureDate}&classType=${classType}`
    );
  };

  return (
    // Main container with wider width and padding
    <div className="pl-6 w-full max-w-none  mx-auto bg-white  ml-2 mr-4">
      {/* Form layout using horizontal flex with spacing */}
      <div className="flex flex-wrap gap-6 items-end justify-between">
        {/* Departure */}
        <div className="flex items-center space-x-2 w-[18%]">
          <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Departure
          </label>
          <Select value={departure} onValueChange={(e) => setDeparture(e)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Addis Ababa">Addis Ababa</SelectItem>
              <SelectItem value="Modjo">Modjo</SelectItem>
              <SelectItem value="Adama">Adama</SelectItem>
              <SelectItem value="Awash">Awash</SelectItem>
              <SelectItem value="Dire Dawa">Dire Dawa</SelectItem>
              <SelectItem value="Dewele">Dewele</SelectItem>
              <SelectItem value="Ali Sabieh">Ali Sabieh</SelectItem>
              <SelectItem value="Djibouti">Djibouti (Nagad)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Arrival */}
        <div className="flex items-center space-x-5 w-[18%]">
          <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Arrival
          </label>
          <Select value={arrival} onValueChange={(e) => setArrival(e)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Addis Ababa">Addis Ababa</SelectItem>
              <SelectItem value="Modjo">Modjo</SelectItem>
              <SelectItem value="Adama">Adama</SelectItem>
              <SelectItem value="Awash">Awash</SelectItem>
              <SelectItem value="Dire Dawa">Dire Dawa</SelectItem>
              <SelectItem value="Dewele">Dewele</SelectItem>
              <SelectItem value="Ali Sabieh">Ali Sabieh</SelectItem>
              <SelectItem value="Djibouti">Djibouti (Nagad)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Travel Dates */}
        <div className="flex items-center space-x-2 w-[18%]">
          <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Travel Date
          </label>
          <Input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Return Date (Optional) */}
        <div className="flex items-center space-x-2 w-[18%]">
          <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Return
          </label>
          <Input type="date" className="w-full" />
        </div>

        {/* Passengers with Tooltip */}
        <div className="flex items-center space-x-2 w-[18%]">
          <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Passengers
          </label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-100 h-6 w-6">
                  <Info className="h-4 w-4" />
                  <span className="sr-only">Passenger Info</span>
                </button>
              </TooltipTrigger>
              <TooltipContent className="w-[300px] p-4" side="bottom">
                <p className="text-sm">
                  - Max one passenger per booking. Each adult may bring one
                  infant. Contact support for unaccompanied minors.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Select defaultValue="1">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Passenger</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button aligned to bottom */}
        <div className="w-full md:w-auto mt-4">
          <Button
            className="w-56 bg-red-600 hover:bg-red-700 text-white h-11 text-base"
            onClick={searchResult}
          >
            Search Train
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchTrain;
