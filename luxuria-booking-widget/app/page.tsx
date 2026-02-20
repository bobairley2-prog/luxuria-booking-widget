'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SearchPage() {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const handleSearch = () => {
    console.log('Search:', { destination, checkIn, checkOut, guests });
    // TODO: Navigate to results
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Hero Image - Full Bleed */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=90"
          alt="Luxury infinity pool overlooking the ocean"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Top Navigation */}
        <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
          <h1 className="text-2xl font-bold tracking-tight text-white">
            LUXURIA
          </h1>
          <div className="flex items-center gap-6 text-sm font-medium text-white">
            <button className="hover:opacity-80 transition-opacity">Search</button>
            <button className="hover:opacity-80 transition-opacity">Sign In</button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-1 flex-col justify-center px-6 pb-20 pt-12 md:px-12 lg:px-20">
          {/* Hero Headline */}
          <div className="mb-12 max-w-2xl animate-fade-in">
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              The world's finest hotels,
              <br />
              at your fingertips
            </h2>
          </div>

          {/* Search Card */}
          <div 
            className="mx-auto w-full max-w-4xl animate-slide-up rounded-2xl bg-white p-8 shadow-2xl md:p-12"
            style={{
              animationDelay: '0.2s',
              animationFillMode: 'both'
            }}
          >
            {/* Search Input */}
            <div className="mb-6">
              <label 
                htmlFor="destination" 
                className="mb-2 block text-sm font-medium text-gray-600"
              >
                Where to?
              </label>
              <input
                id="destination"
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Hotel name or destination"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-base text-black placeholder-gray-400 transition-colors focus:border-black focus:outline-none focus:ring-0"
              />
            </div>

            {/* Date and Guest Inputs */}
            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* Check-in */}
              <div>
                <label 
                  htmlFor="checkin" 
                  className="mb-2 block text-sm font-medium text-gray-600"
                >
                  Check-in
                </label>
                <input
                  id="checkin"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={today}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-base text-black transition-colors focus:border-black focus:outline-none focus:ring-0"
                />
              </div>

              {/* Check-out */}
              <div>
                <label 
                  htmlFor="checkout" 
                  className="mb-2 block text-sm font-medium text-gray-600"
                >
                  Check-out
                </label>
                <input
                  id="checkout"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || today}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-base text-black transition-colors focus:border-black focus:outline-none focus:ring-0"
                />
              </div>

              {/* Guests */}
              <div>
                <label 
                  htmlFor="guests" 
                  className="mb-2 block text-sm font-medium text-gray-600"
                >
                  Guests
                </label>
                <select
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-base text-black transition-colors focus:border-black focus:outline-none focus:ring-0"
                >
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                  <option value="5">5 guests</option>
                  <option value="6">6 guests</option>
                  <option value="7">7 guests</option>
                  <option value="8">8+ guests</option>
                </select>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSearch}
                disabled={!destination || !checkIn || !checkOut}
                className="rounded-lg bg-black px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Search Hotels →
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div 
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80 animate-fade-in md:gap-6"
            style={{
              animationDelay: '0.4s',
              animationFillMode: 'both'
            }}
          >
            <span>50+ five-star properties</span>
            <span className="hidden md:inline">•</span>
            <span>Secure booking</span>
            <span className="hidden md:inline">•</span>
            <span>24/7 support</span>
          </div>
        </div>
      </div>
    </main>
  );
}
