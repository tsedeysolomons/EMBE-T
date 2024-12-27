import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/about"}>about</Link>
    </div>
  );
};

export default Home;
