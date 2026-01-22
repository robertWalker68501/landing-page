import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Pricing from './components/Pricing.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className='min-h-screen overflow-hidden bg-slate-950 text-white'>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
