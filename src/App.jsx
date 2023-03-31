import { Route, Routes } from "react-router-dom";
import BookingDetail from "./components/BookingDetail";
import SearchAirline from "./components/SearchAirline";

import Home from "./Home";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/xflight" exact element={<SearchAirline />} />
        <Route path="/booking-detail/:id" exact element={<BookingDetail />} />
      </Routes>
    </div>
  );
}

export default App;
