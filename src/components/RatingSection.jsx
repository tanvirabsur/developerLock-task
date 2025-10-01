import React from 'react'
import { CheckCircle, MessageSquare, Map, Tag } from 'lucide-react'

export default function RatingSection() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      {/* Top summary */}
      <div className="text-center mb-10">
        <div className="text-6xl font-bold">4.87</div>
        <h2 className="text-xl font-semibold mt-4">Guest favorite</h2>
        <p className="text-gray-600 mt-2">
          This home is in the <span className="font-semibold">top 10%</span> of eligible listings
          based on ratings, reviews, and reliability.
        </p>
      </div>

      {/* Ratings breakdown */}
      <div className="grid grid-cols-7 gap-6 border-t border-b py-6">
        {/* Overall rating */}
        <div className="col-span-2">
          <h3 className="text-sm font-medium mb-3">Overall rating</h3>
          <div className="space-y-1 text-xs">
            {[5, 4, 3, 2, 1].map((star, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-3 text-right">{star}</span>
                <div className="flex-1 h-1.5 bg-gray-200 rounded">
                  {star === 5 && (
                    <div className="h-1.5 bg-black rounded" style={{ width: '80%' }} />
                  )}
                  {star === 4 && (
                    <div className="h-1.5 bg-black rounded" style={{ width: '10%' }} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="col-span-5 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-lg font-semibold">4.9</div>
            <div className="text-sm text-gray-600">Cleanliness</div>
            <div className="mt-1">🧹</div>
          </div>
          <div>
            <div className="text-lg font-semibold">4.9</div>
            <div className="text-sm text-gray-600">Accuracy</div>
            <CheckCircle className="mx-auto mt-1 w-5 h-5" />
          </div>
          <div>
            <div className="text-lg font-semibold">4.9</div>
            <div className="text-sm text-gray-600">Check-in</div>
            <div className="mx-auto mt-1 w-5 h-5 border rounded-full flex items-center justify-center">⏱️</div>
          </div>
          <div>
            <div className="text-lg font-semibold">5.0</div>
            <div className="text-sm text-gray-600">Communication</div>
            <MessageSquare className="mx-auto mt-1 w-5 h-5" />
          </div>
          <div>
            <div className="text-lg font-semibold">4.9</div>
            <div className="text-sm text-gray-600">Location</div>
            <Map className="mx-auto mt-1 w-5 h-5" />
          </div>
          <div>
            <div className="text-lg font-semibold">4.9</div>
            <div className="text-sm text-gray-600">Value</div>
            <Tag className="mx-auto mt-1 w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  )
}
