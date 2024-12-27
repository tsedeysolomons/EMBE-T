import { heroImage } from "@/asset";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="w-full h-screen">
      <div className="flex h-full w-full">
        <img
          src={heroImage}
          alt="train image"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Home;
