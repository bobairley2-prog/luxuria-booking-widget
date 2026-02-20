'use client';

import { useState, useRef, useEffect } from 'react';

interface GuestSelectorProps {
  adults: number;
  children: number;
  onChange: (guests: { adults: number; children: number }) => void;
}

export function GuestSelector({ adults, children, onChange }: GuestSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const updateGuests = (type: 'adults' | 'children', delta: number) => {
    const newValue = type === 'adults' ? adults + delta : children + delta;
    
    // Validation
    if (type === 'adults' && (newValue < 1 || newValue > 8)) return;
    if (type === 'children' && (newValue < 0 || newValue > 6)) return;

    onChange({
      adults: type === 'adults' ? newValue : adults,
      children: type === 'children' ? newValue : children,
    });
  };

  const totalGuests = adults + children;
  const guestText =
    totalGuests === 1
      ? '1 guest'
      : children === 0
      ? `${adults} adults`
      : `${adults} adults, ${children} ${children === 1 ? 'child' : 'children'}`;

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-3 px-4 py-3 border-2 rounded-xl transition-all duration-200 bg-white ${
          isOpen
            ? 'border-luxury-accent shadow-md'
            : 'border-luxury-cream-300 hover:border-luxury-cream-400'
        }`}
      >
        <div className="flex items-center gap-3">
          {/* User Icon */}
          <svg
            className={`w-5 h-5 flex-shrink-0 transition-colors ${
              isOpen ? 'text-luxury-accent' : 'text-luxury-gray-400'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="text-luxury-gray-900">{guestText}</span>
        </div>

        {/* Chevron */}
        <svg
          className={`w-5 h-5 text-luxury-gray-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 top-full left-0 right-0 mt-2 p-4 bg-white rounded-xl shadow-xl border border-luxury-cream-200">
          {/* Adults */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-medium text-luxury-gray-900">Adults</div>
              <div className="text-sm text-luxury-gray-500">Ages 13+</div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => updateGuests('adults', -1)}
                disabled={adults <= 1}
                className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-luxury-cream-300 hover:border-luxury-accent hover:text-luxury-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="w-8 text-center font-medium text-luxury-gray-900">{adults}</span>
              <button
                type="button"
                onClick={() => updateGuests('adults', 1)}
                disabled={adults >= 8}
                className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-luxury-cream-300 hover:border-luxury-accent hover:text-luxury-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Children */}
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-luxury-gray-900">Children</div>
              <div className="text-sm text-luxury-gray-500">Ages 0-12</div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => updateGuests('children', -1)}
                disabled={children <= 0}
                className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-luxury-cream-300 hover:border-luxury-accent hover:text-luxury-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="w-8 text-center font-medium text-luxury-gray-900">{children}</span>
              <button
                type="button"
                onClick={() => updateGuests('children', 1)}
                disabled={children >= 6}
                className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-luxury-cream-300 hover:border-luxury-accent hover:text-luxury-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
