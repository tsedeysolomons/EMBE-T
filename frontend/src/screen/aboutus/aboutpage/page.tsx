import dynamic from "next/dynamic";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import video from "../../../asset/image/trainvideo.mp4";
// Dynamically import MapComponent to avoid SSR issues
const MapComponent = dynamic(() => import("./map-component"), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] w-full flex items-center justify-center bg-gray-100 rounded-lg">
      Loading map...
    </div>
  ),
});

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Video Background */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-96 w-full object-cover"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-6xl font-bold text-white md:text-8xl"></h1>
        </div>
      </div>

      {/* Secondary Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <img
              src="/placeholder.svg?height=60&width=120"
              alt="Emirates Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
            <div className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Our destinations
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Our travel partners
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Explore
              </a>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Search flights
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img
          src="/placeholder.svg?height=600&width=1200"
          alt="Coastal cityscape with beach"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-6xl font-bold mb-4 text-center">
              Emirates and Qantas
            </h1>
            <p className="text-2xl text-center">
              Travel beyond the Emirates network
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Explore further with Emirates and Qantas
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Make the most of our partnership with Qantas to explore more of
            Australasia, Europe or the Americas, with easy connections and
            shared travel benefits.
          </p>
        </div>
      </div>

      {/* Railway Map Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Ethiopia-Djibouti Railway Route
            </CardTitle>
          </CardHeader>
          <CardContent>
            <MapComponent />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
