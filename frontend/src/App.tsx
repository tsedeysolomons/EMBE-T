import { Routes, Route } from "react-router";

import Home from "./features/home/home";
import About from "./screen/about";
import RequireAuth from "./features/auth/login/require-auth";
import MainLayout from "./layout/main-layout";
import Footer from "./components/footer";
// Adjust the path as necessary
//import AppProvider from "./context/AppProvider";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route index element={<Footer />} />
        <Route element={<RequireAuth />}>
          <Route path="about" element={<About />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
