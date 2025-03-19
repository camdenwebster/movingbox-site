import React from 'react';
import { Camera, Box, Search, Cloud, Star, ChevronDown, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header/Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img 
                src="https://raw.githubusercontent.com/camdenwebster/MovingBox/refs/heads/main/icon_shadow.png"
                alt="MovingBox Logo" 
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-semibold dark:text-white">MovingBox</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Testimonials</a>
              <a href="#download" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Download</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Changed from grid to flex with column direction */}
          <div className="flex flex-col items-center text-center">
            {/* Image now comes first */}
            <div className="relative mb-10">
              <img 
                src="/images/hero.png"
                alt="iPhone with MovingBox app"
                className="max-w-full h-auto"
              />
            </div>
            
            {/* Text content below the image */}
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
                Turn Photos into Peace of Mind
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Let AI transform your home inventory management into a quick, effortless experience. Just snap photos, and we'll do the rest.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="mailto:beta@movingbox.ai"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors"
                >
                  Join the MovingBox Beta
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <div className="bg-green-100 dark:bg-green-900 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
                <Camera className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">AI-Powered Recognition</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Simply take a photo and let our AI identify and document your items automatically.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
                <Box className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Detailed Cataloging</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Capture descriptions, quantities, and identifying information with zero manual input.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
                <Search className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Smart Search</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Find any item in your inventory instantly with our powerful search functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Loved by Users</h2>
            {/* <div className="flex justify-center items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div> */}
            {/* <p className="text-gray-600 dark:text-gray-300 mt-2">Average 4.8 rating on the App Store</p> */}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "MovingBox has completely transformed how I manage my home inventory. The AI recognition is incredibly accurate!"
              </p>
              <p className="font-semibold dark:text-white">Sarah M.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "Filing an insurance claim was so much easier with MovingBox's detailed inventory reports."
              </p>
              <p className="font-semibold dark:text-white">James R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-black text-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
          <div className="flex justify-center space-x-4">
            <a 
              href="mailto:beta@movingbox.ai"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-black dark:bg-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Join the MovingBox Beta
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
          <p className="mt-8 text-gray-400">
            Need help? <a href="mailto:contact@movingbox.ai" className="text-gray-300 hover:text-white underline">Contact us</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center text-white mb-4">
                <img 
                  src="https://raw.githubusercontent.com/camdenwebster/MovingBox/refs/heads/main/icon_shadow.png"
                  alt="MovingBox Logo" 
                  className="h-8 w-8"
                />
                <span className="ml-2 text-xl font-semibold">MovingBox</span>
              </div>
              <p>Turn photos into peace of mind.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
                <li><a href="#download" className="hover:text-white">Download</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="https://mothersound.dev" className="hover:text-white" target="_blank" rel="noopener noreferrer">About</a></li>
                <li><a href="https://github.com/camdenwebster/MovingBox/blob/main/PRIVACY_POLICY.md" className="hover:text-white" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                <li><a href="https://github.com/camdenwebster/MovingBox/blob/main/EULA.md" className="hover:text-white" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="mailto:contact@movingbox.ai" className="hover:text-white">contact@movingbox.ai</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} MovingBox. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;