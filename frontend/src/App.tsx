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


import { ShippingPolicy } from './pages/ShippingPolicy';
import { CancellationRefund } from './pages/CancellationRefund';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsCondition';

function PolicyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}

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
          <Route
            path="/shipping-policy"
            element={
              <PolicyPageLayout>
                <ShippingPolicy />
              </PolicyPageLayout>
            }
          />
          <Route
            path="/cancellation-refund"
            element={
              <PolicyPageLayout>
                <CancellationRefund />
              </PolicyPageLayout>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <PolicyPageLayout>
                <PrivacyPolicy />
              </PolicyPageLayout>
            }
          />
          <Route
            path="/terms-conditions"
            element={
              <PolicyPageLayout>
                <TermsConditions />
              </PolicyPageLayout>
            }
          />
        </Route>
      </Routes>
    </>
  );
}
