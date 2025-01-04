import { heroImage } from "@/asset";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TrainIcon from "@mui/icons-material/Train";
import { ScrollArea } from "@/components/ui/scroll-area";
export default function FlightDetails() {
  return (
    <ScrollArea className="h-screen">
      <div className="container mx-auto p-4 space-y-6  overflow-scroll">
        {/* Flight Route Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 border-b pb-4">
          <div className="flex items-center gap-4">
            <img
              src={heroImage}
              alt="Emirates Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <div>
              <h2 className="text-xl font-semibold">Addis Ababa - Djibouti</h2>
              <p className="text-muted-foreground">Via Djibouti (1 flight)</p>
            </div>
          </div>
          <div className="flex gap-8 text-sm">
            <div>
              <p className="text-muted-foreground"> Several Departure time</p>
              <p className="font-semibold"> From 12:00am - 12:00pm</p>
            </div>
            <div>
              <p className="text-muted-foreground"> Several Arrival time</p>
              <p className="font-semibold">24h</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-semibold">B777-300ER</p>
              <TrainIcon className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Class Selection Tabs */}
        <Tabs defaultValue="first" className="min-w-2">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="first" className="flex-1">
              First Class
            </TabsTrigger>
            <TabsTrigger value="economy" className="flex-1">
              Economy Class
            </TabsTrigger>
          </TabsList>
          <TabsContent value="first" className="space-y-6">
            {/* Amenities Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Chauffeur-drive</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative h-20 w-full">
                    <img
                      src={heroImage}
                      alt="Chauffeur service"
                      className="object-cover rounded-md"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We'll collect you from your door and when you land, we'll be
                    there to take you to your final destination.
                  </p>
                  <Button variant="outline" className="w-full">
                    Check availability
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Lounges</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative h-20 w-full">
                    <img
                      src={heroImage}
                      alt="Airport lounge"
                      className="object-cover rounded-md"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Catch up on work or relax away from the crowds - our lounges
                    are your personal haven.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn more
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Seating</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative h-20 w-full">
                    <img
                      src={heroImage}
                      alt="First class suite"
                      className="object-cover rounded-md"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Slide the doors closed in your own First Class Private
                    Suite.
                  </p>
                  <Button variant="outline" className="w-full">
                    View the seat map
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Lounges</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative h-20 w-full">
                    <img
                      src={heroImage}
                      alt="Airport lounge"
                      className="object-cover rounded-md"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Catch up on work or relax away from the crowds - our lounges
                    are your personal haven.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn more
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="space-y-4"></CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
