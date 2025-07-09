import HroMenu from "./heroMenu";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
// import { Image } from "react-feather";

interface Destination {
  city: string;
  country: string;
  image: string; // Store the image path
  tagline: string;
}

const destinations: Destination[] = [
  {
    city: "DJIBUOTI",
    country: "UNITED ARAB EMIRATES",
    image: "/asset/image/train6.jpg",
    tagline: "Discover for yourself",
  },
  {
    city: "ADISS ABABA",
    country: "UNITED KINGDOM",
    image: "/asset/image/train2.png",
    tagline: "Discover for yourself",
  },
  {
    city: "DREDAWA",
    country: "MALDIVES",
    image: "/asset/image/train2.png",
    tagline: "Discover for yourself",
  },
  {
    city: "NAGAD",
    country: "PAKISTAN",
    image: "/asset/image/train3.jpg",
    tagline: "Discover for yourself",
  },
];

interface CircleItem {
  title: string;
  image: string; // Store the image path
  href: string;
}

const defaultItems: CircleItem[] = [
  {
    title: "Our business",
    image: "train2.png",
    href: "/business",
  },
  {
    title: "Our planet",
    image: "/asset/image/train1.png",
    href: "/planet",
  },
  {
    title: "Our people",
    image: "/asset/image/train3.jpg",
    href: "/people",
  },
  {
    title: "Our communities",
    image: "/asset/image/train4.jpg",
    href: "/communities",
  },
];

const Home = () => {
  return (
    <section>
      <div>
        <div>
          {/* Hero Image */}
          <div className="relative mx-auto">
            <img
              src="https://ethiopianmonitor.com/wp-content/uploads/2020/09/91533788_hi035499568-800x445.jpg"
              alt="Description of the imagess"
              className="object-cover w-full h-[400px]"
            />
            {/* Overlay Text (Visible and Centered) */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20 text-center">
              <p
                className="text-white px-6 py-3 rounded-lg shadow-md"
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  lineHeight: 1.1,
                  letterSpacing: "0.05em",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                Do you want to get notified when a new component is added to
                Flowbite?
              </p>
            </div>
            {/* Menu Section */}

            <div className=" mr-4 ml-96 w-full max-w-none p-6 pb-2 z-10 relative top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <div className="flex gap-2 text-sm font-semibold text-gray-700 ">
                <HroMenu />
              </div>
            </div>
          </div>

          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold text-center mb-12 mt-0">
              Featured destinations from{" "}
              <span className="font-bold">Ethiopia</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-6">
              {destinations.map((destination, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={destination.image}
                        alt="Description of the image"
                        className="object-cover w-full h-[400px]"
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
                {/* Main Hero Section */}
                <section className="relative h-screen">
                  <img
                    src="/asset/image/train2.png"
                    alt="Description of the image"
                    className="object-cover w-full h-[400px]"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                    <span className="tracking-wider text-sm md:text-base uppercase mb-4">
                      Djibuti Miles Offer
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl mb-6">
                      Earn double Miles with Ethiopian Midr Babur
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl">
                      Choose from hundreds of destinations national. Book by
                      deference people to earn more Miles on Train.
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
                      Travel With Ethiiopian Midr Babur corporation
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                      Make it an incredible journey
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Explore the Ethiiopian Midr Babur corporation experience
                      and plan an unforgettable trip beyond your Train Ride.
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
                alt="Description of the image"
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute top-8 left-8">
                <p className="text-sm tracking-wider mb-2 text-gray-800">
                  DJIBUOTI AND ADISS ABABA RAILWAY
                </p>
                <h1 className="text-5xl font-bold mb-4 text-gray-900">
                  Discover DJIBUOTI
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
                  image: "/asset/image/train2.png",
                },
                {
                  title: "Business Class",
                  category: "CABIN FEATURES",
                  image: "/asset/image/train2.png",
                },
                {
                  title: "Premium Economy",
                  category: "CABIN FEATURES",
                  image: "/asset/image/train2.png",
                },
                {
                  title: "Economy Class",
                  category: "CABIN FEATURES",
                  image: "/asset/image/train3.jpg",
                },
              ].map((cabin) => (
                <div
                  key={cabin.title}
                  className="relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow"
                >
                  <img
                    src={cabin.image}
                    alt="Description of the image"
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
                          alt="Description of the image"
                          className="object-cover w-full h-[400px]"
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
