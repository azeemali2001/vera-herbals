import { Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppFloat } from './components/WhatsappFloat';
import { SiteLayout } from './components/layout/SiteLayout';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Products from './pages/Products';
import Recipes from './pages/Recipes';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <WhatsAppFloat />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
}
