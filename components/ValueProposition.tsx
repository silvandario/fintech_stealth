import React from 'react';
import Ripple from './ui/ripple';
import { Button } from './ui/button';
import Link from 'next/link';

const ValueProposition = () => {
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

      {/* Key Features Section */}
      <div className="z-10 mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <img src="/icons/open-banking.svg" alt="Open Banking" className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold text-blue-600">Open Banking Integration</h3>
          <p className="mt-2 text-gray-500">
            Powered by <b>bLink</b> and other APIs, your financial data is always synced.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="/icons/crypto.svg" alt="Cryptocurrency" className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold text-blue-600">Cryptocurrency Management</h3>
          <p className="mt-2 text-gray-500">
            Connect to Coinbase and other providers to track and manage your crypto portfolio.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="/icons/tax.svg" alt="Tax Report" className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold text-blue-600">One-Click Tax Reports</h3>
          <p className="mt-2 text-gray-500">
            Generate tax reports with a single click, saving you time and effort.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="/icons/insurance.svg" alt="Insurance" className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold text-blue-600">Insurance Simplified</h3>
          <p className="mt-2 text-gray-500">
            Manage and compare your insurance policies in one place.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="/icons/dashboard.svg" alt="Dashboard" className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold text-blue-600">Unified Dashboard</h3>
          <p className="mt-2 text-gray-500">
            A comprehensive view of your entire financial ecosystem.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="/icons/security.svg" alt="Security" className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold text-blue-600">Bank-Grade Security</h3>
          <p className="mt-2 text-gray-500">
            Your data is secure with our state-of-the-art encryption standards.
          </p>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="z-10 mt-12">
        <Button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
          <Link href="/get-started">
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