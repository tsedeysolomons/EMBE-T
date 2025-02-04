import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  Twitch,
  DiscIcon as Discord,
} from "lucide-react";
//import { Button } from "components/ui/button"; // Updated import path
//import { Input } from "components/ui/input"; // Updated import path
import { AlertCircle } from "lucide-react";
import MapComponent from "../aboutus/aboutpage/map-component"; // Static import
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Links */}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6 text-blue-600" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6 text-blue-400" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6 text-pink-600" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 text-blue-700" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="w-6 h-6 text-red-600" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 text-gray-800" />
          </a>
          <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer">
            <Twitch className="w-6 h-6 text-purple-600" />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Discord className="w-6 h-6 text-indigo-600" />
          </a>
        </div>
      </div>
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), placeholder.svg?height=800&width=1600)`,
        }}
      >
        <div className="text-center text-white z-10 px-4">
          <p className="text-sm uppercase tracking-wider mb-4">CONNECT</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Social Media</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Stay connected with us through our various social media channels.
          </p>
        </div>
      </div>

      {/* Social Media Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Social media buttons */}
        </div>
        <div className="grid gap-6 md:grid-cols-2 p-6">
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-3xl font-medium relative pb-4 mb-4">
                Live chat
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-500" />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <AlertCircle className="w-16 h-16 text-gray-800" />
              <p className="text-xl text-gray-800">Chat in progress.</p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-3xl font-medium relative pb-4 mb-4">
                General queries:
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-500" />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <p className="text-3xl text-gray-800">+97160055555</p>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Map Section */}
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Our Location</h2>
        <MapComponent />
      </div>
    </div>
  );
}
