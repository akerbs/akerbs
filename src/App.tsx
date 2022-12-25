import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./css/App.css";
import "./css/media.css";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const PortfolioPage = React.lazy(() => import("./pages/PortfolioPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));

const App: React.FC = () => {
  return (
    <div className="App">
      <React.Suspense
        fallback={
          <img src={process.env.PUBLIC_URL + "/img/smile.png"} alt=":)" />
        }
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </React.Suspense>
    </div>
  );
};

export default App;
