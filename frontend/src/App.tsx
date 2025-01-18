import { Routes, Route } from "react-router";

import Home from "./features/home/home";
import About from "./screen/about";
import RequireAuth from "./features/auth/login/require-auth";
import MainLayout from "./layout/main-layout";
import Footer from "./components/footer";
import SearchTrainAvalability from "./features/searchResult/trainavalability"; // Adjust the path as necessary
import TrainDetails from "./features/home/whatontrain"; // Adjust the path as necessary
import DownloadTicket from "./screen/download"; // Adjust the path as necessary
import BookingHistory from "./screen/viewhistory"; // Adjust the path as necessary
import SearchApiSlice from "./features/searchResult/searchResult";
//import PassengerDetails from "./features/payment/Passengers";
import ConfirmationPage from "./features/payment/paynow";
import Options from "./features/payment/options";
import PaymentReview from "./features/payment/Paymentggetway";
import Payment from "./features/payment/payment"; // Adjust the path as necessary
import SeatSelection from "./features/payment/seatselection"; // Adjust the path as necessary

// Adjust the path as necessary
//import AppProvider from "./context/AppProvider";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route index element={<Footer />} />
        <Route element={<RequireAuth />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/BookingHistory" element={<BookingHistory />} />
      </Route>
      <Route path="/test-test" element={<SearchApiSlice />} />
      <Route path="/trainavalability" element={<SearchTrainAvalability />} />
      <Route path="/TrainDetails" element={<TrainDetails />} />
      <Route path="/DownloadTicket" element={<DownloadTicket />} />
      <Route path="/PaymentReview/:id" element={<PaymentReview />} />
    </Routes>
  );
};

export default App;
