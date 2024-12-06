"use client";
import React, { useState, useEffect } from 'react';
import Ripple from './ui/ripple';
import { Button } from './ui/button';
import Link from 'next/link';

const ValueProposition = () => {
  const [showFeatures, setShowFeatures] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Toggle sections every 5 seconds with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setShowFeatures((prev) => !prev);
        setIsTransitioning(false);
      }, 500); // 500ms fade-out, then switch content
    }, 5000); // 5000ms = 5 seconds interval
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full p-8 bg-gray-50 overflow-hidden rounded-lg">
      {/* Headline */}
      <h1 className="z-10 text-center text-5xl font-bold tracking-tight text-blue-700">
        Simplify Your Finances with Lumi
      </h1>

      {/* Subheadline */}
      <p className="z-10 mt-4 text-center text-lg text-gray-600 max-w-3xl">
        Bringing your financial life together. Lumi integrates your bank accounts, insurances, and cryptocurrencies into one platform. Automatic updates, seamless tax reports, and smarter financial management.
      </p>

      {/* Conditional Rendering for Key Features and Standing on the Shoulders of Giants */}
      <div
        className={`z-10 mt-8 w-full max-w-5xl transition-opacity duration-500 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {showFeatures ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-4xl mx-auto">
            {/* Lumi's Key Features */}
            <div className="flex flex-col items-center text-center">
              <img src="/icons/open-banking.png" alt="Open Banking" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-blue-600">Open Banking Integration</h3>
              <p className="mt-2 text-gray-500">
                Powered by <b>bLink</b> and other APIs, your financial data is always synced.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/icons/crypto.png" alt="Cryptocurrency" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-blue-600">Cryptocurrency Management</h3>
              <p className="mt-2 text-gray-500">
                Connect to Coinbase and other providers to track and manage your crypto portfolio.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/icons/tax.png" alt="Tax Report" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-blue-600">One-Click Tax Reports</h3>
              <p className="mt-2 text-gray-500">
                Generate tax reports with a single click, saving you time and effort.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/icons/openai.png" alt="GenAI" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-blue-600">GenAI Insights</h3>
              <p className="mt-2 text-gray-500">
                Leverage OpenAI for tailored insights in natural language and smarter financial queries.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/icons/insurance.png" alt="Insurance" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-blue-600">Insurance Simplified</h3>
              <p className="mt-2 text-gray-500">
                Manage and compare your insurance policies in one place.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/icons/security.jpg" alt="Security" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold text-blue-600">Bank-Grade Security</h3>
              <p className="mt-2 text-gray-500">
                Your data is secure with our state-of-the-art encryption standards.
              </p>
            </div>
          </div>
        ) : (
          <div>
            {/* Standing on the Shoulders of Giants */}
            <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
              Standing on the Shoulders of Finance and Tech Giants
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
              <div className="flex flex-col items-center text-center">
                <img src="/icons/plaid.png" alt="Plaid" className="h-16 w-16 mb-4" />
                <h3 className="text-lg font-semibold text-gray-700">Plaid</h3>
                <p className="text-sm text-gray-500">API solution to connect all your bank accounts.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/icons/dwolla.png" alt="Dwolla" className="h-16 w-16 mb-4" />
                <h3 className="text-lg font-semibold text-gray-700">Dwolla</h3>
                <p className="text-sm text-gray-500">Seamless money transfers for businesses.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/icons/sentry.webp" alt="Sentry" className="h-16 w-16 mb-4" />
                <h3 className="text-lg font-semibold text-gray-700">Sentry</h3>
                <p className="text-sm text-gray-500">
                  Session replay and feedback for security and debugging.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/icons/appwrite.png" alt="Appwrite" className="h-16 w-16 mb-4" />
                <h3 className="text-lg font-semibold text-gray-700">Appwrite</h3>
                <p className="text-sm text-gray-500">Backend solution for auth and data storage.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/icons/openai.png" alt="OpenAI" className="h-16 w-16 mb-4" />
                <h3 className="text-lg font-semibold text-gray-700">OpenAI</h3>
                <p className="text-sm text-gray-500">GenAI for tailored insights and optimized queries.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/icons/nextjs.png" alt="Next.js" className="h-16 w-16 mb-4" />
                <h3 className="text-lg font-semibold text-gray-700">Next.js</h3>
                <p className="text-sm text-gray-500">Responsive, state-of-the-art web applications.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Call-to-Action */}
      <div className="z-10 mt-12">
        <Button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
          <Link href="#child">
            <span>Get Started Now</span>
          </Link>
        </Button>
      </div>

      {/* Ripple Background */}
      <Ripple />
    </div>
  );
};

export default ValueProposition;