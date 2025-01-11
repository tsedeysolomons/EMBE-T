import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function ManageBooking() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* Secondary Navigation */}
      <div className="border-b">
        <Tabs
          defaultValue="manage"
          className="w-full"
          onValueChange={(value) => {
            if (value === "manage") {
              setIsOpen(!isOpen);
            } else {
              setIsOpen(false);
            }
          }}
        >
          <TabsList className="w-full justify-start h-auto p-0 bg-transparent border-b-0">
            <TabsTrigger
              value="manage"
              className="px-6 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary flex items-center"
            >
              Manage
              <ChevronDown
                className="ml-2 h-4 w-4 transition-transform duration-200"
                style={{ transform: isOpen ? "rotate(180deg)" : "" }}
              />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Main Content */}
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleContent className="border-t">
          <div className="container py-8">
            <h1 className="text-3xl font-semibold mb-8">Manage your booking</h1>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-0 shadow-none">
                <CardHeader className="p-0">
                  <Link href="/retrieve">
                    <Button
                      variant="link"
                      className="h-auto p-0 text-xl font-semibold text-left hover:no-underline"
                    >
                      Retrieve your booking
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardHeader>
              </Card>
              <Card className="border-0 shadow-none">
                <CardHeader className="p-0">
                  <Link href="/cancel">
                    <Button
                      variant="link"
                      className="h-auto p-0 text-xl font-semibold text-left hover:no-underline"
                    >
                      Cancel your booking
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardHeader>
              </Card>
              <Card className="border-0 shadow-none">
                <CardHeader className="p-0">
                  <Link href="/change">
                    <Button
                      variant="link"
                      className="h-auto p-0 text-xl font-semibold text-left hover:no-underline"
                    >
                      Change your booking
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardHeader>
              </Card>
              <Card className="border-0 shadow-none">
                <CardHeader className="p-0">
                  <Link href="/seat">
                    <Button
                      variant="link"
                      className="h-auto p-0 text-xl font-semibold text-left hover:no-underline"
                    >
                      Choose your seat
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardHeader>
              </Card>
              <Card className="border-0 shadow-none">
                <CardHeader className="p-0">
                  <Link href="/upgrade">
                    <Button
                      variant="link"
                      className="h-auto p-0 text-xl font-semibold text-left hover:no-underline"
                    >
                      Upgrade your flight
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardHeader>
              </Card>
              <Card className="border-0 shadow-none">
                <CardHeader className="p-0">
                  <Link href="/chauffeur">
                    <Button
                      variant="link"
                      className="h-auto p-0 text-xl font-semibold text-left hover:no-underline"
                    >
                      Manage chauffeur-drive
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardHeader>
              </Card>
              <Card className="border-0 shadow-none">
                <CardHeader className="p-0">
                  <Link href="/accessible">
                    <Button
                      variant="link"
                      className="h-auto p-0 text-xl font-semibold text-left hover:no-underline"
                    >
                      Book accessible travel
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardHeader>
              </Card>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
