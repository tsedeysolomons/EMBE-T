import React from "react";
import { X, RotateCcw } from "react-feather"; // Ensure these icons are correctly imported
import { Link } from "react-router-dom"; // Ensure you are using the correct Link component from react-router-dom
import { Card, CardContent } from "../components/ui/card"; // Adjust the path as necessary
import { Separator } from "../components/ui/separator"; // Adjust the path as necessary

interface QuickAction {
  icon: React.ElementType;
  label: string;
  description?: string;
  href: string;
  variant?: "default" | "outline";
}

interface MainAction extends QuickAction {
  description: string;
}

const mainActions: MainAction[] = [
  {
    icon: X,
    label: "Cancel Ticket",
    description: "Ethiopian Railways",
    href: "/cancel",
    variant: "outline",
  },
  {
    icon: RotateCcw,
    label: "Change Ticket",
    description: "Modify your booking",
    href: "/change",
    variant: "outline",
  },
];

const ManageBooking: React.FC = () => {
  const handleActionClick = (href: string) => {
    // Handle the action click, e.g., navigate to the href
    console.log(`Navigating to ${href}`);
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-4xl mx-auto bg-white">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-2">Manage Booking</h1>
            <Separator />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mainActions.map((action, index) => (
              <div
                key={index}
                className={`action ${action.variant} p-4 border rounded-lg`}
              >
                <action.icon className="mb-2" />
                <h3 className="text-xl font-semibold">{action.label}</h3>
                <p className="text-gray-600">{action.description}</p>
                <Link
                  to={action.href}
                  className="text-blue-500 hover:underline"
                >
                  Go to {action.label}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/support"
              className="text-sm text-muted-foreground hover:text-red-600"
              onClick={(e) => {
                e.preventDefault();
                handleActionClick("/support");
              }}
            >
              Need help? Contact support
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageBooking;
