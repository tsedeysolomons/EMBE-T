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
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState<string>("");
  const [classType] = useState("");
  const navigate = useNavigate();

  const searchResult = () => {
    navigate(
      `/TrainAvalability?departure=${departure}&arrival=${arrival}&departureDate=${departureDate}&classType=${classType}`
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Departure Station */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Departure TrainRide</label>
          <Select
            defaultValue={departure}
            onValueChange={(e) => setDeparture(e)}
          >
            <SelectTrigger>
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Addis Ababa">Addis Ababa</SelectItem>
              <SelectItem value="Modjo">Modjo</SelectItem>
              <SelectItem value="Adama">Adama</SelectItem>
              <SelectItem value="Awash">Awash</SelectItem>
              <SelectItem value="Dire Dawa">Dire Dawa</SelectItem>
              <SelectItem value="Dewele">Dewele</SelectItem>
              <SelectItem value="Ali Sabieh">Ali Sabieh</SelectItem>
              <SelectItem value="Djibouti">Djibouti(Nagad)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Arrival Station */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Arrival TrainRide</label>
          <Select defaultValue={arrival} onValueChange={(e) => setArrival(e)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Addis Ababa">Addiss Ababa</SelectItem>
              <SelectItem value="Modjo">Modjo</SelectItem>
              <SelectItem value="Adama">Adama</SelectItem>
              <SelectItem value="Awash">Awash</SelectItem>
              <SelectItem value="Dire Dawa">Dire Dawa</SelectItem>
              <SelectItem value="Dewele">Dewele</SelectItem>
              <SelectItem value="Ali Sabieh">Ali Sabieh</SelectItem>
              <SelectItem value="Djibouti">Djibouti(Nagad)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Date Selection */}
        <div className="space-y-2 md:col-span-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">
              Travel dates and times
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="date"
              placeholder="Departing Date"
              onChange={(e) => setDepartureDate(e.target.value)}
              value={departureDate}
            />
            <Input type="date" placeholder="Returning Date" />
          </div>
        </div>

        {/* Passengers section with tooltip */}
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <label className="text-sm font-medium">Passengers</label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="inline-flex items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground h-6 w-6">
                    <Info className="h-4 w-4" />
                    <span className="sr-only">Passenger Information</span>
                  </button>
                </TooltipTrigger>
                <TooltipContent className="w-[350px] p-4" side="bottom">
                  <div className="space-y-4 text-sm">
                    <p>
                      - You can book a maximum of one passenger per reservation.
                    </p>
                    <p>
                      This applies to all adults, children, and infants.{""}
                      Each adult passenger may bring one infant. Children
                      traveling alone, or in a different cabin class than their
                      parents, are considered Unaccompanied Minors and are
                      subject to the full adult fare. Please contact us to
                      arrange this service.
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Select defaultValue="1">
            <SelectTrigger>
              <SelectValue placeholder="Select passengers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Passenger</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button - Full width on mobile, half width on desktop */}
        <div className="md:col-span-2">
          <Button
            className="w-full bg-red-600 hover:bg-red-700 text-white h-11 text-base"
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
