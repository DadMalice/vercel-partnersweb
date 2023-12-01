import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Header/NavBar';
import Home from './pages/1.Home/Home';
import About from './pages/2.About/About';
import Services from './pages/3.Services/Services';
import FAQs from './pages/4.FAQs/Faqs';
import Testimonials from './pages/5.Testimonials/Testimonials';
import Contact from './pages/6.Contact/Contact';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer/Footer';
import TopHeader from './components/Header/TopHeader';

const NotFound = () => {
  return (
    <PageNotFound />
  );
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <TopHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
