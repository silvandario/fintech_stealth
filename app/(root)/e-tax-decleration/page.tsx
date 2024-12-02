"use client";
import React, { useState } from "react";

const Page = () => {
  // State for assets and income
  const [assets, setAssets] = useState<{ name: string; value: string }[]>([]);
  const [incomeSources, setIncomeSources] = useState<{ source: string; amount: string }[]>([]);
  const [assetInput, setAssetInput] = useState({ name: "", value: "" });
  const [incomeInput, setIncomeInput] = useState({ source: "", amount: "" });

  // Handle asset input
  const handleAssetInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAssetInput({ ...assetInput, [e.target.name]: e.target.value });
  };

  // Add asset
  const addAsset = () => {
    if (assetInput.name && assetInput.value) {
      setAssets([...assets, assetInput]);
      setAssetInput({ name: "", value: "" });
    }
  };

  // Delete asset
  const deleteAsset = (index: number) => {
    setAssets(assets.filter((_, i) => i !== index));
  };

  // Handle income input
  const handleIncomeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncomeInput({ ...incomeInput, [e.target.name]: e.target.value });
  };

  // Add income
  const addIncome = () => {
    if (incomeInput.source && incomeInput.amount) {
      setIncomeSources([...incomeSources, incomeInput]);
      setIncomeInput({ source: "", amount: "" });
    }
  };

  // Delete income
  const deleteIncome = (index: number) => {
    setIncomeSources(incomeSources.filter((_, i) => i !== index));
  };

  // Download tax sample
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "icons/sampletax.png"; // Replace with actual file path
    link.download = "taxsample.png";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        E-Tax Declaration
      </h1>
      <p className="text-gray-700 text-center max-w-lg mb-8">
        Simplify your tax declaration process with our smart e-tax service.
      </p>

      {/* Form Section */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-2xl p-6">
        <form className="flex flex-col gap-6">
          {/* Assets Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Add Assets</h2>
            <div className="flex gap-4">
              <input
                type="text"
                name="name"
                placeholder="Asset Name (e.g., Rolex Submariner)"
                className="flex-1 p-2 border rounded-lg"
                value={assetInput.name}
                onChange={handleAssetInput}
              />
              <input
                type="number"
                name="value"
                placeholder="Estimated Value"
                className="flex-1 p-2 border rounded-lg"
                value={assetInput.value}
                onChange={handleAssetInput}
              />
            </div>
            <button
              type="button"
              className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
              onClick={addAsset}
            >
              Add Asset
            </button>
          </div>

          {/* List of Assets */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Assets</h3>
            {assets.length > 0 ? (
              <ul className="list-disc pl-5 space-y-2">
                {assets.map((asset, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>
                      {asset.name} - ${asset.value}
                    </span>
                    <button
                      type="button"
                      onClick={() => deleteAsset(index)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-600">No assets added yet.</p>
            )}
          </div>

          {/* Income Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Add Income</h2>
            <div className="flex gap-4">
              <input
                type="text"
                name="source"
                placeholder="Income Source (e.g., Salary)"
                className="flex-1 p-2 border rounded-lg"
                value={incomeInput.source}
                onChange={handleIncomeInput}
              />
              <input
                type="number"
                name="amount"
                placeholder="Amount (in USD)"
                className="flex-1 p-2 border rounded-lg"
                value={incomeInput.amount}
                onChange={handleIncomeInput}
              />
            </div>
            <button
              type="button"
              className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
              onClick={addIncome}
            >
              Add Income
            </button>
          </div>

          {/* List of Income Sources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Income Sources</h3>
            {incomeSources.length > 0 ? (
              <ul className="list-disc pl-5 space-y-2">
                {incomeSources.map((income, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>
                      {income.source} - ${income.amount}
                    </span>
                    <button
                      type="button"
                      onClick={() => deleteIncome(index)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-600">No income sources added yet.</p>
            )}
          </div>

          {/* Download Button */}
          <button
            type="button"
            onClick={handleDownload}
            className="mt-8 w-full bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-800"
          >
            Download Tax Sample
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;