import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlaneIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

export default function Payment() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Flight Route Header */}
        <div className="flex flex-col space-y-1.5">
          <div className="flex items-center space-x-2 text-lg font-medium">
            <span>Addis Ababa (ADD)</span>
            <PlaneIcon className="h-4 w-4" />
            <span>Auckland (AKL)</span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Return</span>
            <span>•</span>
            <span>1 passenger</span>
            <Button variant="link" className="p-0 h-auto">
              Change search
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Choose your outbound Train</CardTitle>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">
                Lowest total price for 1 passenger
              </div>
              <div className="flex items-baseline space-x-1">
                <span className="text-sm">ETB</span>
                <span className="text-2xl font-bold">644</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Date Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-lg font-medium">
                  Thursday, 16 January 2025
                </h3>
                <span className="text-sm text-muted-foreground">
                  (1 option)
                </span>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <ChevronLeftIcon className="h-4 w-4 mr-1" />
                  Previous day
                </Button>
                <Button variant="outline" size="sm">
                  Next day
                  <ChevronRightIcon className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>

            {/* Cabin Class Tabs */}
            <Tabs defaultValue="economy">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="economy">Economy</TabsTrigger>
                <TabsTrigger value="premium">Premium Economy</TabsTrigger>
                <TabsTrigger value="business">Business</TabsTrigger>
                <TabsTrigger value="first">First</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Flight Option */}
            <Card className="cursor-pointer hover:bg-gray-50">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-xl font-bold">14:50</div>
                    <div className="text-sm text-muted-foreground">ADD</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-sm text-muted-foreground">
                      34 hrs 25 mins
                    </div>
                    <div className="relative w-32 h-px bg-gray-300 my-2">
                      <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-gray-300" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Connects in Dubai
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold">11:15</div>
                    <div className="text-sm text-muted-foreground">AKL</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">Economy Class</div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-sm">from ETB</span>
                    <span className="text-xl font-bold">454,064</span>
                  </div>
                  <div className="text-sm text-green-600">
                    <Button>Select</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
