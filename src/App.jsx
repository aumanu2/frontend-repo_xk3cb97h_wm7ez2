import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <footer id="about" className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-sm text-gray-600">
          <div className="sm:col-span-2">
            <h3 className="text-base font-semibold text-gray-900">FitFlow CRM</h3>
            <p className="mt-2 max-w-md">A modern client management platform built for coaches, trainers, and studios. Spend less time on admin, more time coaching.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Product</h4>
            <ul className="mt-2 space-y-1">
              <li><a href="#features" className="hover:text-gray-900">Features</a></li>
              <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-900">Updates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Company</h4>
            <ul className="mt-2 space-y-1">
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} FitFlow CRM. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
