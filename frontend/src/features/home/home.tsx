import { heroImage } from "@/asset";
import HroMenu from "./heroMenu";
// import { Link } from "react-router-dom";

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
        </div>
      </div>
    </section>
  );
};

export default Home;
