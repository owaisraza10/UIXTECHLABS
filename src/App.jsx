import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Footer from './Components/Footer';

import WebDev from './Pages/web-dev';
import AiDev from './Pages/Ai-Dev';
import AppDev from './Pages/AppDev';
import ContactPage from './Pages/Contact';

import Imprint from './Pages/Imprint';
import DataProtection from './Pages/DataProtection';
// import CategoriesSection from './Pages/CategoriesSection'; // If needed

const Home = () => (
  <>
    <Hero />
    <Features />
  </>
);

const App = () => {
  return (
    <div className="bg-white antialiased font-sans text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-dev" element={<WebDev />} />
        <Route path="/Ai-Dev" element={<AiDev />} />
        <Route path="/AppDev" element={<AppDev />} />
        {/* <Route path="/categories" element={<CategoriesSection />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/data-protection" element={<DataProtection />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
