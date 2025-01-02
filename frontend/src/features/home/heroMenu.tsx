"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Tag, Info } from "lucide-react";
import TrainIcon from "@mui/icons-material/Train";

export default function Search() {
  return (
    <div className=" flex-auto w-full max-w-6x2 mx-auto p-4 z-50 ">
      <Card className="border-none shadow-lg  ">
        <CardContent className="p-6">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap border-separate mb-8 ">
            <Button
              variant="ghost"
              className="border-b-2 border-red-600 text-red-600 rounded-none px-6"
            >
              <TrainIcon className="mr-2 h-4 w-4" />
              Search TrainRide
            </Button>
            <Button
              variant="ghost"
              className="border-b-2 border-red-600 text-red-600 rounded-none px-6"
            >
              <Tag className="mr-2 h-4 w-4" />
              <a onClick={ManageBooking}>Manage booking</a>
            </Button>
            <Button
              variant="ghost"
              className="border-b-2  border-red-600 text-red-600 rounded-none px-6 space-x-1"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
        </CardContent>
      </Card>
    </div>
  );
}
