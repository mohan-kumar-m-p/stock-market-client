import React from "react";
import StockMarketRoot from "./stockmarket/index.jsx";
import { AuthProvider } from "./stockmarket/hooks/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.StrictMode>
       <AuthProvider>
      <StockMarketRoot />
      <ToastContainer autoClose={5000} />
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
