import { Route, Routes } from "react-router-dom";
import BookingDetail from "./components/BookingDetail";
import SearchAirline from "./components/SearchAirline";

import Home from "./Home";
import Membership from "./payment/Membership";
import Register from "./payment/Register";
import PaymentScreen from "./payment/PaymentScreen";
import Reservation from "./components/Reservation";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/xflight" exact element={<SearchAirline />} />
        <Route path="/booking-detail/:id" exact element={<BookingDetail />} />
        <Route path="/create-account" exact element={<Membership />} />
        <Route path="/login" exact element={<Membership />} />
        <Route path="/seat-selection" exact element={<Register />} />
        <Route path="/payment" exact element={<PaymentScreen />} />

        <Route path="/reservation/:id" exact element={<Reservation />} />
      </Routes>
    </div>
  );
}

export default App;
