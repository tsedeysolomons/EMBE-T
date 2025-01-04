import {} from "@/asset";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Main Navigation */}
      <header className="bg-[#333333] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuLink className="hover:text-gray-300">
                    BOOK
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="hover:text-gray-300">
                    MANAGE
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="hover:text-gray-300">
                    EXPERIENCE
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="hover:text-gray-300">
                    WHERE WE FLY
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="hover:text-gray-300">
                    LOYALTY
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="hover:text-gray-300">
                    HELP
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white">
                GLOBAL
              </Button>
              <Button variant="ghost" className="text-white">
                LOG IN
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Secondary Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <img
              src="/placeholder.svg"
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
          src="/placeholder.svg"
          alt="Coastal cityscape with beach"
          className="object-cover"
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
    </div>
  );
}
