import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        E-Tax Declaration
      </h1>
      
      {/* Description */}
      <p className="text-gray-700 text-center max-w-lg mb-8">
        Simplify your tax declaration process with our smart e-tax service. 
        Connect your financial accounts, list your assets (including luxury items like watches and cars), 
        and get a comprehensive tax report with just a few clicks. This sercice is enabled by our one stop for all solution that bundles all APIs for any asset class.
      </p>
      
      {/* Form Mockup */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-2xl p-6">
        <form className="flex flex-col gap-6">
          {/* Section: Connect Accounts */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Connect Accounts</h2>
            <p className="text-sm text-gray-600 mb-4">
              Link your financial accounts to automatically import your income and transactions.
            </p>
            <button
              type="button"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Connect Financial Accounts
            </button>
          </div>

          {/* Section: Add Assets */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Add Assets</h2>
            <p className="text-sm text-gray-600 mb-4">
              Include any valuable assets such as luxury watches, cars, or property.
            </p>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Asset Name (e.g., Rolex Submariner)"
                className="flex-1 p-2 border rounded-lg"
              />
              <input
                type="number"
                placeholder="Estimated Value"
                className="flex-1 p-2 border rounded-lg"
              />
            </div>
            <button
              type="button"
              className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
            >
              Add Asset
            </button>
          </div>

          {/* Section: Income */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Add Income</h2>
            <p className="text-sm text-gray-600 mb-4">
              Provide details of your annual income to calculate taxes accurately.
            </p>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Income Source (e.g., Salary)"
                className="flex-1 p-2 border rounded-lg"
              />
              <input
                type="number"
                placeholder="Amount (in USD)"
                className="flex-1 p-2 border rounded-lg"
              />
            </div>
            <button
              type="button"
              className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
            >
              Add Income
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
          >
            Generate Tax Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;