import React from 'react';
import { Camera, Box, Search, ExternalLink, Shield, Clock, DollarSign, FileCheck, Home, TrendingUp, Package, Users, Truck, FileText, Zap, Check } from 'lucide-react';

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
              <a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Benefits</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">How It Works</a>
              <a href="#use-cases" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Use Cases</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Pricing</a>
              <a href="https://docs.movingbox.ai" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" target="_blank" rel="noopener noreferrer">Guide</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="max-w-3xl mb-10">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
                Your Home Has <span className="text-green-600 dark:text-green-400">$100K+</span> in Stuff. Can You Prove It?
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
                Insurance companies deny claims without proof.
              </p>
              <p className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                MovingBox creates that proof in seconds. Just take photos.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://apps.apple.com/us/app/movingbox-ai/id6742755218"
                  className="inline-flex items-center px-8 py-4 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors text-lg font-semibold"
                >
                  Download on the App Store
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="relative">
              <picture>
                <source srcSet="/images/hero-light.webp" type="image/webp" media="(prefers-color-scheme: light)" />
                <source srcSet="/images/hero-light.png" type="image/png" media="(prefers-color-scheme: light)" />
                <source srcSet="/images/hero-dark.webp" type="image/webp" media="(prefers-color-scheme: dark)" />
                <source srcSet="/images/hero-dark.png" type="image/png" media="(prefers-color-scheme: dark)" />
                <img
                  src="/images/hero-light.png"
                  alt="iPhone with MovingBox app"
                  className="max-w-full h-auto"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need a Home Inventory Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Why You Need a Home Inventory
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            Don't wait for disaster to strike. Be prepared with complete documentation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Save Time */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <div className="bg-orange-100 dark:bg-orange-900 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                <Clock className="h-7 w-7 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Save Hours of Time
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Document your entire home in minutes, not hours. MovingBox identifies items instantly (no typing required).
              </p>
            </div>

            {/* Insurance Claims */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <div className="bg-red-100 dark:bg-red-900 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                <Shield className="h-7 w-7 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Get Insurance Claims Approved Faster
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professional documentation means fewer denials and faster payouts when you need them most.
              </p>
            </div>

            {/* Stay Organized */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <div className="bg-blue-100 dark:bg-blue-900 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                <Box className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Never Lose Track During Moves
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Everything organized by room and category. Know exactly what's in every box during moves and storage.
              </p>
            </div>

            {/* Home Value */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <div className="bg-green-100 dark:bg-green-900 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                <DollarSign className="h-7 w-7 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Know Your Home's True Value
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ensure you have adequate insurance coverage based on actual replacement costs.
              </p>
            </div>

            {/* Warranty Management */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <div className="bg-purple-100 dark:bg-purple-900 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                <FileCheck className="h-7 w-7 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Keep Warranty Info Accessible
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Store warranties and receipts in one searchable place. Never miss a claim deadline.
              </p>
            </div>

            {/* Proof of Ownership */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <div className="bg-orange-100 dark:bg-orange-900 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                <FileText className="h-7 w-7 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Prove Ownership for Deposits & Estates
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Essential for security deposits, estate planning, disputes, or any time you need documented proof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Get Started in 30 Seconds
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            No complicated setup. No learning curve. Just results.
          </p>

          <div className="max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex gap-6 mb-12">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Snap a Photo</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Take a picture of any item in your home.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 mb-12">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">MovingBox Identifies It</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  MovingBox instantly recognizes the item and extracts all the details you need.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 mb-12">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Automatic Organization</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Items are organized by room and category without any manual effort.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 mb-12">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Instant Value Estimate</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Get automatic replacement value estimates for insurance purposes.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold">
                  5
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Export When You Need It</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Generate spreadsheets with photos and item details for moving and insurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Why MovingBox is Different
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            Unlike spreadsheets or manual apps, MovingBox does the work for you
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <Zap className="h-8 w-8 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    Zero Typing Required
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    MovingBox identifies items instantly from photos. No manual data entry, no tedious forms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <Camera className="h-8 w-8 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    Extracts Details from Photos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Automatically captures brand, model, serial numbers from photos.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    Automatic Value Estimates
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get replacement value estimates instantly—no research required.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <Package className="h-8 w-8 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    Smart Organization
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Everything organized by room and category automatically as you go.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm md:col-span-2">
              <div className="flex items-start gap-4">
                <FileCheck className="h-8 w-8 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    Insurance-Ready Reports in Seconds
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Export professional ZIP archives with photos and values. Ready for insurance claims or moving companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Perfect For
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            Whatever your situation, MovingBox has you covered
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <Home className="h-10 w-10 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Homeowners</h3>
              <p className="text-gray-600 dark:text-gray-300">Protecting valuable investments</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <Users className="h-10 w-10 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Renters</h3>
              <p className="text-gray-600 dark:text-gray-300">Documenting for security deposits</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <Truck className="h-10 w-10 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Moving</h3>
              <p className="text-gray-600 dark:text-gray-300">Tracking everything in transition</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <Shield className="h-10 w-10 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Insurance Prep</h3>
              <p className="text-gray-600 dark:text-gray-300">Ready for when disaster strikes</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <FileText className="h-10 w-10 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Estate Planning</h3>
              <p className="text-gray-600 dark:text-gray-300">Clear records for beneficiaries</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <Package className="h-10 w-10 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Small Business</h3>
              <p className="text-gray-600 dark:text-gray-300">Asset tracking made simple</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Choose Your Plan
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            Start free, upgrade when you need more
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border-2 border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">MovingBox Free</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Perfect for getting started</p>

              <div className="mb-8">
                <div className="text-4xl font-bold text-gray-900 dark:text-white">$0</div>
                <div className="text-gray-600 dark:text-gray-300">Forever</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">AI analysis for up to 50 items</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">One photo per item</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Full export capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">All core features</span>
                </li>
              </ul>

              <a
                href="https://apps.apple.com/us/app/movingbox-ai/id6742755218"
                className="block text-center px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold"
              >
                Download Free
              </a>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-2xl shadow-lg border-2 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-2 text-white">MovingBox Pro</h3>
              <p className="text-green-100 mb-6">Complete your home inventory</p>

              <div className="mb-8">
                <div className="text-4xl font-bold text-white">From $3.18</div>
                <div className="text-green-100">per month (save 40% annually)</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Unlimited AI scanning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">High detail image analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Up to 5 photos per item</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Most advanced AI models</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Priority new features</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white">Lifetime access option available</span>
                </li>
              </ul>

              <a
                href="https://apps.apple.com/us/app/movingbox-ai/id6742755218"
                className="block text-center px-6 py-3 rounded-lg bg-white text-green-700 hover:bg-gray-100 transition-colors font-semibold"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="download" className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Started in 30 Seconds
          </h2>
          <p className="text-xl mb-8 text-green-50 max-w-2xl mx-auto">
            Download MovingBox now and protect what matters. Your future self will thank you.
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://apps.apple.com/us/app/movingbox-ai/id6742755218"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-green-700 hover:bg-gray-100 transition-colors text-lg font-semibold shadow-lg"
            >
              Download on the App Store
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>

          <p className="mt-8 text-green-100">
            Need help? <a href="mailto:contact@movingbox.ai" className="text-white hover:underline font-semibold">Contact us</a>
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
                <li><a href="#features" className="hover:text-white">Benefits</a></li>
                <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
                <li><a href="#use-cases" className="hover:text-white">Use Cases</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#download" className="hover:text-white">Download</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="https://mothersound.dev" className="hover:text-white" target="_blank" rel="noopener noreferrer">About</a></li>
                <li><a href="https://docs.movingbox.ai/04-legal/privacy-policy" className="hover:text-white" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                <li><a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className="hover:text-white" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
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
