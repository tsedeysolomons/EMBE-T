import { Plane, Luggage, CreditCard, Building2, Check } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
//import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import TrainIcon from "@mui/icons-material/Train";

export default function Payment({
  handleNext,
}: {
  handleNext: (stepe: number) => void;
}) {
  return (
    <div className="container mx-auto p-4 max-w-4xl bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Review your selection
      </h1>

      <Card className="mb-8 border-t-4 border-t-blue-500 shadow-md hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between border-b">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold">Trains</h2>
            <Button variant="link" className="text-primary">
              All Train details
            </Button>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">
              For 1 passenger (Including dinner and lunch, carrier-imposed
              charges)
            </div>
            <div className="text-xl text-green-500 font-semibold">
              Total: ETB 948
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Sun 19 Jan 25</div>
              <div className="text-2xl font-bold">14:50</div>
              <div className="text-lg">Addis Ababa (ADD)</div>
            </div>

            <div className="flex flex-col items-center my-4 md:my-0">
              <div className="text-sm text-muted-foreground mb-2">4h 10m</div>
              <div className="relative w-48 flex items-center">
                <div className="h-[2px] bg-border flex-1" />
                <TrainIcon className="w-4 h-4 absolute right-0 -translate-y-1/2 top-1/2" />
              </div>
              <div className="text-sm text-muted-foreground mt-2">Non-stop</div>
            </div>

            <div className="space-y-1 text-right">
              <div className="text-sm text-muted-foreground">Sun 19 Jan 25</div>
              <div className="text-2xl font-bold">20:00</div>
              <div className="text-lg">Djibuti(DBT)</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 text-sm text-muted-foreground border-t pt-6">
            <div className="flex items-center gap-2">
              <Luggage className="w-4 h-4" />
              <span>You must have to Checked baggage: 3 x 23kg</span>
            </div>
            <div>
              <p>Change fee: ETB 50.00</p>
              <p>No-show penalty ETB 100.00</p>
            </div>
            <div>
              <p>Refund fee: ETB 150.00</p>
              <p>No-show penalty ETB 300.00</p>
            </div>
            <h4 className="text-primary ml-auto">
              View detailed fare conditions
            </h4>
          </div>
        </CardContent>
      </Card>

      <Tabs
        defaultValue="breakdown"
        className="w-full bg-gradient-to-r from-slate-50 to-blue-50 p-4 rounded-lg"
      >
        <TabsList>
          <TabsTrigger value="breakdown">Fare Breakdown</TabsTrigger>
        </TabsList>
        <TabsContent value="breakdown">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Base fare</span>
                  <span>ETB 450</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & fees</span>
                  <span>ETB 48.21</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-4">
                  <span>Total to be paid:</span>
                  <span>ETB 948</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Payment options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* <div className="border-2 rounded-lg p-6 relative bg-gradient-to-br from-blue-50 to-slate-50 border-blue-200 shadow-md">
              <div className="absolute top-4 right-4 text-green-600">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 border-b border-primary pb-2">
                In full
              </h3>
              <p className="text-muted-foreground">
                Pay in full, using your preferred payment method
              </p>
            </div> */}
            <div className="border-2 rounded-lg p-6 bg-gradient-to-br from-purple-50 to-slate-50 border-purple-200 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2 border-b border-primary pb-2">
                Select-Chapa
              </h3>
              <p className="text-muted-foreground">
                Use chapa Miles to pay the total price
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Payment details</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-medium mb-4">Choose payment method</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border-2 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors border-blue-200">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                      {/* <Plus className="h-4 w-4" /> */}
                    </div>
                    <span>
                      Select-Chapa for payment purpose but Credit/Debit is not
                      support
                    </span>
                  </div>
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between p-4 border-2 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors border-blue-200">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                      {/* <Plus className="h-4 w-4" /> */}
                    </div>
                    <span>Use Ethiopian Mider Babur office</span>
                  </div>
                  <Building2 className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-medium">Total to be paid:</span>
                  <span className="text-xl font-bold">ETB 948</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t pt-6 bg-gradient-to-b from-white to-slate-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Terms & conditions</h2>
          <div className="space-y-4">
            <div className="flex gap-4 flex-wrap text-sm">
              <Button variant="link" className="text-primary p-0">
                Fare Conditions
              </Button>
              <Button variant="link" className="text-primary p-0">
                Conditions Carriage
              </Button>
              <Button variant="link" className="text-primary p-0">
                Online booking terms and conditions
              </Button>
              <Button variant="link" className="text-primary p-0">
                Privacy Policy
              </Button>
              <Button variant="link" className="text-primary p-0">
                Ethiopian Midr Babur Foundation
              </Button>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm">
                Please tick this box to indicate that you have read and agree to
                the terms and conditions.
              </Label>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Button
            variant="outline"
            className="border-2 hover:bg-slate-50"
            onClick={() => handleNext(3)}
          >
            Back to previous page
          </Button>
          <Button
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-md"
            onClick={() => handleNext(4)}
          >
            Purchase now
          </Button>
        </div>
      </div>
    </div>
  );
}
