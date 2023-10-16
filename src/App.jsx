import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Header/NavBar';
import Home from './pages/1.Home/Home';
import About from './pages/2.About/About';
import Services from './pages/3.Services/Services';
import FAQs from './pages/4.FAQs/Faqs';
import Testimonials from './pages/5.Testimonials/Testimonials';
import Contact from './pages/6.Contact/Contact';
import Terms from './components/Terms';
import Footer from './components/Footer/Footer'
import TopHeader from './components/Header/TopHeader';

function App() {
  return (
    <div>
      <Router>
        <TopHeader />
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/faqs' element={<FAQs />} />
          <Route exact path='/testimonials' element={<Testimonials />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App
