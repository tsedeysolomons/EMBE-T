import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchTrain = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 w-full">
      {/* Departure Airport */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Departure TrainRide</label>
        <Select defaultValue="Addis Ababa">
          <SelectTrigger>
            <SelectValue placeholder="Addis Ababa" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Addis Ababa">Addis Ababa</SelectItem>
            <SelectItem value="Adama">Adama </SelectItem>
            <SelectItem value="Modjo">Modjo</SelectItem>
            <SelectItem value="Awash">Awash</SelectItem>
            <SelectItem value="Dire Dawa">Dire Dawa</SelectItem>
            <SelectItem value="Dewele">Dewele</SelectItem>
            <SelectItem value="Nagad">Nagad </SelectItem>
            <SelectItem value="Djibouti">Djibouti </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Arrival Airport */}
      <div className="space-y-2">
        <label className="text-sm font-medium ">Arrival TrainRide</label>
        <Select defaultValue="Djibouti">
          <SelectTrigger>
            <SelectValue placeholder="Djibouti" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Addis Ababa">Addis Ababa</SelectItem>
            <SelectItem value="Adama">Adama </SelectItem>
            <SelectItem value="Modjo">Modjo</SelectItem>
            <SelectItem value="Awash">Awash</SelectItem>
            <SelectItem value="Dire Dawa">Dire Dawa</SelectItem>
            <SelectItem value="Dewele">Dewele</SelectItem>
            <SelectItem value="Nagad">Nagad </SelectItem>
            <SelectItem value="Djibouti">Djibouti </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Date Selection */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Travel dates</label>
        <div className="flex flex-col md:flex-row gap-2">
          <Input type="date" placeholder="Departing" className="w-full" />
          <Input type="date" placeholder="Returning" className="w-full" />
        </div>
      </div>

      {/* Passengers */}
      <div className="space-y-2">
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
        <Select defaultValue="economy">
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
      <div className="flex items-end">
        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
          Search flights
        </Button>
      </div>
    </div>
  );
};

export default SearchTrain;
