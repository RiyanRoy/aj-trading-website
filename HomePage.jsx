
import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 text-gray-800">
      <header className="bg-green-700 text-white py-4 shadow-md">
        <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">AJ Trading</h1>
          <ul className="flex space-x-6 text-sm md:text-base">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Strategies</li>
            <li className="hover:underline cursor-pointer">Charts</li>
            <li className="hover:underline cursor-pointer">Download</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </nav>
      </header>

      <section className="text-center py-16 px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-green-700 mb-4">
          Price Action Mastery v1.0
        </h2>
        <p className="text-xl md:text-2xl text-green-900 font-semibold">
          Green Money Venture | Motto: "Discipline Creates Wealth"
        </p>
        <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full shadow hover:bg-green-700 transition">
          Download Free PDF
        </button>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-green-800 mb-6">
          Featured Strategies
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-700">1. Golden Cross & Death Cross</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>20 EMA crosses 200 EMA (Golden = Bullish, Death = Bearish)</li>
              <li>Entry: On confirmation candle close</li>
              <li>SL: Swing high/low | Target: 1.5x – 2x</li>
              <li>Best on: 1H, 4H, Daily</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-700">2. EMA Scalping</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Indicators: 9D High/Low/Close + 20 EMA + 200 EMA</li>
              <li>Buy near 20 EMA (pullback) or 200 EMA support</li>
              <li>SL: 1-bar low | Target: 1–1.5x</li>
              <li>Avoid sideways market</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-700">3. Breakout with Build-up</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Consolidation near resistance</li>
              <li>Entry on breakout candle + volume spike</li>
              <li>SL: Below breakout base or 20 EMA</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-700">4. Pre-Breakout Entry</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Use HTF (1H/4H) to spot consolidation near resistance</li>
              <li>Drop to LTF (5m/15m) for micro breakout pattern</li>
              <li>Entry: Early entry above LTF breakout structure</li>
              <li>SL: Below LTF structure | Target: HTF breakout target</li>
              <li>Advantage: Early entry with tight stop-loss</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-700">5. Re-entry After Breakout</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Wait for pullback to old resistance (now support)</li>
              <li>Look for bullish candle near 20 EMA or support</li>
              <li>SL: Below re-test low | Target: Prior high or next resistance</li>
              <li>Works well on 15m, 1H, and Daily charts</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-sm text-green-700">
        © 2025 AJ Trading. All rights reserved. | Educational Use Only
      </footer>
    </main>
  );
}
