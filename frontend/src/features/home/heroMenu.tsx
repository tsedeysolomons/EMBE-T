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
import { Plane, Tag, Clock, Info } from "lucide-react";
//import Link from "next/link";

export default function Search() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 z-50">
      {/* Navigation Tabs */}
      <div className="flex border-b mb-8">
        <Button
          variant="ghost"
          className="border-b-2 border-red-600 text-red-600 rounded-none px-6"
        >
          <Plane className="mr-2 h-4 w-4" />
          Search flights
        </Button>
        <Button variant="ghost" className="text-white rounded-none px-6">
          <Tag className="mr-2 h-4 w-4" />
          Manage booking / Check in
        </Button>
        <Button variant="ghost" className="text-white rounded-none px-6">
          <Info className="mr-2 h-4 w-4" />
          What&apos;s on your flight
        </Button>
        <Button variant="ghost" className="text-white rounded-none px-6">
          <Clock className="mr-2 h-4 w-4" />
          Flight status
        </Button>
      </div>

      <Card className="border-none shadow-lg">
        <CardContent className="p-6">
          <div className="mb-4">
            <div
              href="#"
              className="text-red-600 hover:text-red-700 text-sm flex justify-end items-center"
            >
              Advanced search: multi-city, promo codes, partner airlines →
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Departure Airport */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Departure airport</label>
              <Input
                type="text"
                placeholder="Departure airport"
                value="Addis Ababa (ADD)"
                className="w-full"
              />
            </div>

            {/* Arrival Airport */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Arrival airport</label>
              <Input
                type="text"
                placeholder="Arrival airport"
                className="w-full"
              />
            </div>

            {/* Date Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Travel dates</label>
              <div className="flex gap-2">
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
                  <SelectItem value="business">Business Class</SelectItem>
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
