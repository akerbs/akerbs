import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import "./css/App.css";
import "./css/media.css";

const HomePage = React.lazy(() => import('./pages/HomePage'))
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))


function App() {
  return (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
          <Footer/>
      </Suspense>
      </div>
  );
}

export default App;
