"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function ManageBooking() {
  return (
    <div className="w-full max-w-2x1 mx-auto p-4">
      <Card className="mt-6">
        <CardContent className="pt-6">
          <a href="#" className="text-red-600 hover:underline block mb-6">
            Log in to view your trips
          </a>

          <div className="grid gap-6 max-w-xl">
            <div>
              <Input type="text" placeholder="Last name" className="h-4" />
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <Input
                      type="text"
                      placeholder="Booking reference"
                      className="h-12"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>
                    You&apos;ll find your booking reference on your ticket.
                    It&apos;s the six-character code made up of letters and
                    numbers that appears under your name.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button
              size="lg"
              className="w-full bg-red-600 hover:bg-red-700 text-white"
            >
              Manage booking
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default ManageBooking;
