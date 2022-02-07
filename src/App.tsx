import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./Context/appContext";
import Home from "./Pages/Home";

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
