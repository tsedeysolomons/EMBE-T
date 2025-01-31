// import * as React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { HelpCircle, RotateCcw, Ticket, X } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";

// // Define TypeScript interfaces for our data structures
// interface QuickAction {
//   icon: React.ElementType;
//   label: string;
//   description?: string;
//   href: string;
//   variant?: "default" | "outline";
// }

// interface MainAction extends QuickAction {
//   description: string;
// }

// // Define our action data
// const mainActions: MainAction[] = [
//   {
//     icon: X,
//     label: "Cancel Ticket",
//     description: "Ethiopian Railways",
//     href: "/cancel",
//     variant: "outline",
//   },
//   {
//     icon: RotateCcw,
//     label: "Change Ticket",
//     description: "Modify your booking",
//     href: "/change",
//     variant: "outline",
//   },
// ];

// const quickActions: QuickAction[] = [
//   {
//     icon: Ticket,
//     label: "FAQs",
//     href: "/faqs",
//   },
//   {
//     icon: RotateCcw,
//     label: "Change Booking",
//     href: "/change-booking",
//   },
//   {
//     icon: X,
//     label: "Refunds",
//     href: "/refunds",
//   },
// ];

// const ManageBookingPage: React.FC = () => {
//   const [isLoading, setIsLoading] = React.useState<boolean>(false);

//   const handleActionClick = async (href: string) => {
//     try {
//       setIsLoading(true);
//       // Add your navigation or action logic here
//       console.log(`Navigating to: ${href}`);
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 md:p-8">
//       <Card className="mx-auto max-w-4xl rounded-3xl border-none bg-white/80 shadow-2xl backdrop-blur">
//         <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-6">
//           <div className="relative h-16 w-16 overflow-hidden rounded-full bg-red-600">
//             <Image
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-01-31%2017.39.01%20-%20A%20modern%20UI%20design%20for%20a%20'Manage%20Booking'%20system%20for%20Ethiopian%20Midr%20Babur%20E-Ticket.%20The%20interface%20includes%20a%20sidebar%20with%20options%20like%20'Cancel%20Ticket,-ZDQLPKTnu7znmwZAXh2lGbLycUcziX.webp"
//               alt="Midr Babur Logo"
//               width={64}
//               height={64}
//               className="object-cover"
//               priority
//             />
//           </div>
//           <div className="flex flex-col">
//             <h1 className="text-2xl font-bold">Manage Booking</h1>
//             <p className="text-sm text-muted-foreground">
//               Ethiopian Midr E-Ticket
//             </p>
//           </div>
//           <Button
//             variant="ghost"
//             size="icon"
//             className="ml-auto rounded-full"
//             onClick={() => handleActionClick("/faqs")}
//           >
//             <HelpCircle className="h-6 w-6" />
//             <span className="sr-only">FAQs</span>
//           </Button>
//         </CardHeader>
//         <CardContent className="grid gap-6 p-6">
//           <div className="grid gap-4 md:grid-cols-2">
//             {mainActions.map((action, index) => (
//               <Button
//                 key={index}
//                 variant={action.variant}
//                 size="lg"
//                 className="flex items-center justify-start gap-3 rounded-xl border-2 p-6 shadow-sm hover:bg-red-50"
//                 onClick={() => handleActionClick(action.href)}
//                 disabled={isLoading}
//               >
//                 <action.icon className="h-5 w-5 text-red-600" />
//                 <div className="flex flex-col items-start">
//                   <span className="font-semibold">{action.label}</span>
//                   <span className="text-xs text-muted-foreground">
//                     {action.description}
//                   </span>
//                 </div>
//               </Button>
//             ))}
//           </div>

//           <Separator />

//           <div className="space-y-4">
//             <h2 className="text-lg font-semibold">Quick Actions</h2>
//             <div className="grid gap-3">
//               {quickActions.map((action, index) => (
//                 <Button
//                   key={index}
//                   variant="outline"
//                   className="justify-start rounded-xl border-none bg-red-50 px-4 py-6 text-red-600 shadow-sm hover:bg-red-100"
//                   onClick={() => handleActionClick(action.href)}
//                   disabled={isLoading}
//                 >
//                   <action.icon className="mr-2 h-4 w-4" />
//                   {action.label}
//                 </Button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-6 flex justify-center">
//             <Link
//               href="/support"
//               className="text-sm text-muted-foreground hover:text-red-600"
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleActionClick("/support");
//               }}
//             >
//               Need help? Contact support
//             </Link>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default ManageBookingPage;
