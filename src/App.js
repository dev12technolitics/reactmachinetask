import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login/LoginForm";
import RegistrationForm from "./pages/login/RegistrationForm";
import Product from "./pages/product";
import ProductOneData from "./pages/product/productonedata";

const drawerWidth = 240;

function App(props) {
  return (
    <Box>
      <Box className="bg-[#fbfcfc] pt-2 w-full ">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/signup" element={<RegistrationForm />} />
            <Route exact path="/product" element={<Product />} />
            <Route exact path="/product/:id" element={<ProductOneData />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
}

App.propTypes = {
  window: PropTypes.func,
};

export default App;
