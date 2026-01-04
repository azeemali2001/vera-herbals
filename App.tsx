import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Recipes from './pages/Recipes';
import ContactUs from './pages/ContactUs';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}
