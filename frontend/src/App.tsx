import { Routes, Route } from "react-router";
import Home from "./features/home/home";
import About from "./screen/about";
import RequireAuth from "./features/auth/login/require-auth";
import MainLayout from "./layout/main-layout";
import Footer from "./components/footer";
import SearchTrainAvalability from "./features/searchResult/trainavalability"; // Adjust the path as necessary
import TrainDetails from "./features/home/whatontrain"; // Adjust the path as necessary
import BookingHistory from "./screen/viewhistory"; // Adjust the path as necessary
import SearchApiSlice from "./features/searchResult/searchResult";
//import PassengerDetails from "./features/payment/Passengers";
//import ConfirmationPage from "./features/payment/paynow";
//import Options from "./features/payment/options";
import PaymentReview from "./features/payment/Paymentggetway";
//import Payment from "./features/payment/payment"; // Adjust the path as necessary
//import SeatSelection from "./features/payment/seatselection"; // Adjust the path as necessary
import ETicket from "./screen/eticket";
import PersistLogin from "./features/auth/login/PersistLogin";
//import ManageBookingPage from "./screen/managebooking";

// Adjust the path as necessary
//import AppProvider from "./context/AppProvider";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route index element={<Footer />} />
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}></Route>
        </Route>

        <Route path="/trainavalability" element={<SearchTrainAvalability />} />
        <Route path="/BookingHistory" element={<BookingHistory />} />
        <Route path="/about" element={<About />} />
      </Route>
      {/* <Route path="/ManageBookingPage" element={<ManageBookingPage />} /> */}
      <Route path="/PaymentReview/:trainId" element={<PaymentReview />} />
      <Route path="/TrainDetails" element={<TrainDetails />} />
      <Route path="/SearchApiSlice" element={<SearchApiSlice />} />

      <Route
        path="/ETicket"
        element={
          <ETicket
            ticketNo={0}
            passengerId={0}
            trainId={0}
            setNo={0}
            class={""}
            journeyDate={new Date()}
            departureStatus={""}
            ticketPrice={0}
            passenger={{
              name: "",
            }}
          />
        }
      />
    </Routes>
  );
};

export default App;
