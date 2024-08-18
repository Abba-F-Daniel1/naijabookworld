import React from 'react'

const Select = ({ options, value, onChange, className }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-african-gold dark:bg-gray-700 dark:text-white dark:border-gray-600 ${className}`}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
