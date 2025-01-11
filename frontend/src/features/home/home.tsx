import { heroImage  } from "@/asset";
import HroMenu from "./heroMenu";
// import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Destination {
  city: string;
  country: string;
  image: string;
  tagline: string;
}

const destinations: Destination[] = [
  {
    city: "Dubai",
    country: "UNITED ARAB EMIRATES",
    image: "heroImage",
    tagline: "Discover for yourself",
  },
  {
    city: "London",
    country: "UNITED KINGDOM",
    image: "train1",
    tagline: "Discover for yourself",
  },
  {
    city: "Malé",
    country: "MALDIVES",
    image: "/placeholder.svg?height=400&width=800",
    tagline: "Discover for yourself",
  },
  {
    city: "Karachi",
    country: "PAKISTAN",
    image: "/placeholder.svg?height=400&width=800",
    tagline: "Discover for yourself",
  },
];

interface CircleItem {
  title: string;
  image: string;
  href: string;
}

const defaultItems: CircleItem[] = [
  {
    title: "Our business",
    image: "train1.jpg",
    href: "/business",
  },
  {
    title: "Our planet",
    image: "train2.jpg",
    href: "/planet",
  },
  {
    title: "Our people",
    image: "/train3.jpg",
    href: "/people",
  },
  {
    title: "Our communities",
    image: "/train4.jpg",
    href: "/communities",
  },
];

const Home = () => {
  return (
    <section>
      <div>
        <div>
          {/* Hero Image */} 

          <div className="relative border border-red-900">
            <img
              src={heroImage}
              alt="train image"
              className="p-0 rounded-md shadow-lg  w-full max-h-96  object-fill transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            />
            {/* Caption Section */}
            <div className="px-4 text-lg text-white bottom-6 absolute top-1/2 left-[5%]">
              <p>
                Do you want to get notified when a new component is added to
                Flowbite?
              </p>
            </div>

            <div className="absolute  left-1/2 transform -translate-x-1/2 -bottom-1/2 z-50">
              <HroMenu />
            </div>
          </div>
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold text-center mb-8">
              Featured destinations from{" "}
              <span className="font-bold">Ethiopia</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-6">
              {destinations.map((destination, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={heroImage}
                        alt={`${destination.city}, ${destination.country}`}
                        width={800}
                        height={400}
                        className="w-full h-[300px] object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-2">
                      <p className="text-sm tracking-wider text-gray-600">
                        {destination.country}
                      </p>
                      <h2 className="text-2xl font-semibold">
                        {destination.city}
                      </h2>
                      <p className="text-gray-600">{destination.tagline}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative h-screen">
                  <img
                    src="/train1.jpg?height=1080&width=1920"
                    alt="Couple looking at ocean view"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                    <span className="tracking-wider text-sm md:text-base uppercase mb-4">
                      Double Miles Offer
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl mb-6">
                      Earn double Miles with Emirates and flydubai
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl">
                      Choose from hundreds of destinations worldwide. Book by 24
                      January 2025 to earn more Miles on flights.
                    </p>
                    <Button size="lg" variant="secondary" className="text-lg">
                      Register and book
                    </Button>
                  </div>
                </section>

                {/* Experience Section */}
                <section className="py-20 px-4">
                  <div className="container mx-auto text-center max-w-4xl">
                    <span className="text-sm tracking-wider uppercase text-muted-foreground mb-4 block">
                      Flying with Emirates
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                      Make it an incredible journey
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Explore the Emirates experience and plan an unforgettable
                      trip beyond your flight.
                    </p>
                  </div>
                </section>
              </main>
            </div>
          </div>
          <div className="container mx-auto p-4 space-y-8">
            {/* Large Feature Card */}
            <div className="relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow">
              <img
                src="https://www.example.com/images/dubai.jpg"
                alt="Dubai skyline with beach"
                width={1200}
                height={600}
                className="object-cover w-full h-[600px]"
              />
              <div className="absolute top-8 left-8">
                <p className="text-sm tracking-wider mb-2 text-gray-800">
                  DUBAI AND THE UAE
                </p>
                <h1 className="text-5xl font-bold mb-4 text-gray-900">
                  Discover Dubai
                </h1>
                <a
                  href="#"
                  className="inline-block text-gray-700 hover:text-gray-900"
                >
                  Learn more
                </a>
                <div className="h-0.5 w-12 bg-red-500 mt-1" />
              </div>
            </div>

            {/* Cabin Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "First Class",
                  category: "CABIN FEATURES",
                  image: "/placeholder.svg?height=400&width=600",
                  alt: "First Class dining experience",
                },
                {
                  title: "Business Class",
                  category: "CABIN FEATURES",
                  image: "/placeholder.svg?height=400&width=600",
                  alt: "Business Class meal service",
                },
                {
                  title: "Premium Economy",
                  category: "CABIN FEATURES",
                  image: "/placeholder.svg?height=400&width=600",
                  alt: "Premium Economy dining options",
                },
                {
                  title: "Economy Class",
                  category: "CABIN FEATURES",
                  image: "train.jpg",
                  alt: "Economy Class meal service",
                },
              ].map((cabin) => (
                <div
                  key={cabin.title}
                  className="relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow"
                >
                  <img
                    src={cabin.image}
                    alt={cabin.alt}
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px]"
                  />
                  <div className="absolute top-8 left-8">
                    <p className="text-sm tracking-wider mb-2 text-gray-800">
                      {cabin.category}
                    </p>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">
                      {cabin.title}
                    </h2>
                    <a
                      href="#"
                      className="inline-block text-gray-700 hover:text-gray-900"
                    >
                      Learn more
                    </a>
                    <div className="h-0.5 w-12 bg-red-500 mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-2">About us</h2>
              <p className="text-muted-foreground mb-12">
                Learn more about our history, our business and sustainability
                initiatives
              </p>

              <div className="flex flex-nowrap gap-8 overflow-x-auto pb-4 px-4 snap-x snap-mandatory">
                {defaultItems.map((item, index) => (
                  <div
                    key={index}
                    className="text-center flex-none snap-center"
                    style={{ width: "min(192px, 80vw)" }}
                  >
                    <a href={item.href} className="inline-block">
                      <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-medium hover:underline">
                        {item.title}
                      </h3>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Home;
