'use client';

import { useState } from 'react';

interface DatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  minDate?: Date;
  placeholderText?: string;
}

export function DatePicker({
  selected,
  onChange,
  minDate,
  placeholderText = 'Select date',
}: DatePickerProps) {
  const [isFocused, setIsFocused] = useState(false);

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;
    if (dateValue) {
      onChange(new Date(dateValue));
    } else {
      onChange(null);
    }
  };

  const minDateString = minDate
    ? minDate.toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  return (
    <div
      className={`relative flex items-center gap-3 px-4 py-3 border-2 rounded-xl transition-all duration-200 bg-white ${
        isFocused
          ? 'border-luxury-accent shadow-md'
          : 'border-luxury-cream-300 hover:border-luxury-cream-400'
      }`}
    >
      {/* Calendar Icon */}
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
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>

      {/* Native Date Input (styled) */}
      <input
        type="date"
        value={selected ? selected.toISOString().split('T')[0] : ''}
        onChange={handleDateChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        min={minDateString}
        className="flex-1 outline-none text-luxury-gray-900 bg-transparent cursor-pointer appearance-none"
        style={{
          colorScheme: 'light',
        }}
      />

      {/* Display Text (for styling) */}
      <div className="absolute left-14 pointer-events-none text-luxury-gray-900">
        {selected ? formatDate(selected) : <span className="text-luxury-gray-400">{placeholderText}</span>}
      </div>
    </div>
  );
}
