import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Plane, PlaneLanding, Tag } from "lucide-react";

const HroMenu = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 z-50">
      <Tabs defaultValue="manage" className="relative -mt-6 bg-white shadow-lg">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="search" className="gap-2">
            <Plane className="h-4 w-4" />
            Search flights
          </TabsTrigger>
          <TabsTrigger value="manage" className="gap-2">
            <Tag className="h-4 w-4" />
            Manage booking / Check in
          </TabsTrigger>
          <TabsTrigger value="flight" className="gap-2">
            <PlaneLanding className="h-4 w-4" />
            What&apos;s on your flight
          </TabsTrigger>
          <TabsTrigger value="status" className="gap-2">
            <Clock className="h-4 w-4" />
            Flight status
          </TabsTrigger>
        </TabsList>

        {/* Booking Management Form */}
        <div className="p-6 hidden sm:block">
          <a href="#" className="mb-6 block text-red-600 hover:underline">
            Log in to view your trips
          </a>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <Input
                type="text"
                placeholder="Last name"
                className="h-12 text-lg"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Booking reference"
                className="h-12 text-lg"
              />
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Button
              variant="destructive"
              size="lg"
              className="h-12 text-lg font-semibold"
            >
              Manage booking
            </Button>
            <Button
              variant="destructive"
              size="lg"
              className="h-12 text-lg font-semibold"
            >
              Check in
            </Button>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default HroMenu;
