import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-body-sm font-medium text-luxury-gray-700 mb-2">
            {label}
            {props.required && <span className="text-error ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={`input-luxury ${error ? 'border-error focus:ring-error' : ''} ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-2 text-body-sm text-error">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
