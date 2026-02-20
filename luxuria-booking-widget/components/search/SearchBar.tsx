'use client';

import { useState, useEffect, useRef } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative">
      <div
        className={`flex items-center gap-3 px-4 py-3 border-2 rounded-xl transition-all duration-200 bg-white ${
          isFocused
            ? 'border-luxury-accent shadow-md'
            : 'border-luxury-cream-300 hover:border-luxury-cream-400'
        }`}
      >
        {/* Search Icon */}
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-colors ${
            isFocused ? 'text-luxury-accent' : 'text-luxury-gray-400'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 outline-none text-luxury-gray-900 placeholder-luxury-gray-400 bg-transparent"
        />

        {/* Clear Button */}
        {value && (
          <button
            onClick={() => onChange('')}
            className="p-1 hover:bg-luxury-cream-100 rounded-full transition-colors"
            aria-label="Clear search"
          >
            <svg
              className="w-4 h-4 text-luxury-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Search Type Hint */}
      {value && (
        <div className="absolute left-0 right-0 mt-2 p-3 bg-white rounded-lg shadow-lg border border-luxury-cream-200 text-sm text-luxury-gray-600">
          {value.match(/^\d+$/) ? (
            <span>🏨 Searching by property ID</span>
          ) : value.length > 2 ? (
            <span>📍 Searching hotels and destinations</span>
          ) : (
            <span>💡 Type at least 3 characters</span>
          )}
        </div>
      )}
    </div>
  );
}
