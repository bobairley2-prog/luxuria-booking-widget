'use client';

import { useState } from 'react';
import { SearchBar } from '@/components/search/SearchBar';
import { DatePicker } from '@/components/search/DatePicker';
import { GuestSelector } from '@/components/search/GuestSelector';
import { Button } from '@/components/ui/Button';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState({ adults: 2, children: 0 });

  const handleSearch = () => {
    // TODO: Navigate to results page with search params
    console.log('Search:', { searchQuery, checkIn, checkOut, guests });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-luxury-cream-50">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          {/* Serene pool water ripples - Pexels Video ID: 11470677 */}
          <source
            src="https://player.vimeo.com/external/516481302.hd.mp4?s=6b5555a6f2c5c0e0d9b3d7c6e8c8d9c1e6c2c2c2&profile_id=175"
            type="video/mp4"
          />
          {/* Fallback: Spa water */}
          <source
            src="https://cdn.pixabay.com/video/2023/05/28/164738-829831045_large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-cream-50/85 via-luxury-cream-100/70 to-luxury-cream-50/85" />
      </div>

      {/* Search Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-luxury-gray-900 mb-4 tracking-tight">
              Find Your Sanctuary
            </h1>
            <p className="text-lg md:text-xl text-luxury-gray-600 font-light max-w-2xl mx-auto">
              Discover luxury hotels and resorts that redefine exceptional
            </p>
          </div>

          {/* Search Card */}
          <div className="bg-luxury-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-10 lg:p-12 border border-luxury-cream-300/50">
            {/* Search Bar */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-luxury-gray-700 mb-2">
                Hotel or Destination
              </label>
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search by hotel name or destination (e.g. Cancun, Times Square)"
              />
            </div>

            {/* Date Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-luxury-gray-700 mb-2">
                  Check-in
                </label>
                <DatePicker
                  selected={checkIn}
                  onChange={setCheckIn}
                  minDate={new Date()}
                  placeholderText="Select date"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-luxury-gray-700 mb-2">
                  Check-out
                </label>
                <DatePicker
                  selected={checkOut}
                  onChange={setCheckOut}
                  minDate={checkIn || new Date()}
                  placeholderText="Select date"
                />
              </div>
            </div>

            {/* Guest Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-luxury-gray-700 mb-2">
                Guests
              </label>
              <GuestSelector
                adults={guests.adults}
                children={guests.children}
                onChange={setGuests}
              />
            </div>

            {/* Search Button */}
            <Button
              onClick={handleSearch}
              disabled={!searchQuery || !checkIn || !checkOut}
              className="w-full py-4 text-lg font-medium bg-luxury-accent hover:bg-luxury-accent-dark text-luxury-white rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              Search Availability
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 text-center">
            <p className="text-sm text-luxury-gray-500 mb-3">
              Trusted by discerning travelers worldwide
            </p>
            <div className="flex items-center justify-center gap-8 text-luxury-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm">50+ Five-Star Properties</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Secure Booking</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
