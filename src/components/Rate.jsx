import React, { useState } from 'react'

export default function Rate({ options }) {
  const defaultOptions = options || [
    {
      id: 'nonref',
      title: 'Non-refundable',
      price: '$55.77 total',
      description: null,
    },
    {
      id: 'ref',
      title: 'Refundable',
      price: '$60.75 total',
      description:
        'Free cancellation before Nov 9. Cancel before check-in on Nov 14 for a partial refund.',
    },
  ]

  const [selected, setSelected] = useState(defaultOptions[0].id)

  return (
    <div className="max-w-md">
      <h3 className="text-xs font-semibold  mb-2">RATES</h3>

      <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
        {defaultOptions.map((opt, idx) => (
          <label
            key={opt.id}
            className={`flex items-start gap-4 p-4 cursor-pointer hover:bg-gray-50 ${
              idx < defaultOptions.length - 1 ? 'border-b' : ''
            }`}
            htmlFor={opt.id}
          >
            {/* left: custom radio */}
            <div className="flex-shrink-0 mt-1">
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selected === opt.id ? 'border-black' : 'border-gray-300'
                }`}
                aria-hidden
              >
                {selected === opt.id && (
                  <div className="w-3 h-3 rounded-full bg-black" />
                )}
              </div>
            </div>

            {/* main content */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium text-gray-900">{opt.title}</div>
                <div className="text-sm text-gray-700">{opt.price}</div>
              </div>

              {opt.description && (
                <p className="mt-2 text-xs text-gray-500">{opt.description}</p>
              )}
            </div>

            {/* invisible native input for accessibility */}
            <input
              id={opt.id}
              name="rate"
              type="radio"
              className="sr-only"
              checked={selected === opt.id}
              onChange={() => setSelected(opt.id)}
            />
          </label>
        ))}
      </div>
    </div>
  )
}
