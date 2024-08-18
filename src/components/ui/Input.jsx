import React from 'react';

const Input = ({ type, placeholder, value, onChange, className, error, ...props }) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 text-gray-700 bg-white dark:bg-gray-800 dark:text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-african-gold ${
          error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
