import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/pages/frontend/Welcome";
import Order from "./components/pages/frontend/Order";
import Advertisement from "./components/pages/backend/advertisement/Advertisement";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/order" element={<Order />} />
        <Route path="/admin/advertisement" element={<Advertisement />} />
      </Routes>
    </Router>
  );
};

export default App;
