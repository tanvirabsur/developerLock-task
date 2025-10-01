import React from 'react'
import { Trophy, Waves, DoorOpen } from 'lucide-react'

export default function HighlightsSection() {
  const highlights = [
    {
      id: 1,
      icon: <Trophy className="w-6 h-6 text-yellow-500" />, 
      title: 'Top 10% of homes',
      description: 'This home is highly ranked based on ratings, reviews, and reliability.',
    },
    {
      id: 2,
      icon: <Waves className="w-6 h-6 text-gray-700" />, 
      title: 'Dive right in',
      description: 'This is one of the few places in the area with a pool.',
    },
    {
      id: 3,
      icon: <DoorOpen className="w-6 h-6 text-gray-700" />, 
      title: 'Self check-in',
      description: 'Check yourself in with the lockbox.',
    },
  ]

  return (
    <div className="max-w-2xl mx-auto py-6 space-y-6">
      {highlights.map(item => (
        <div key={item.id} className="flex items-start gap-4">
          <div>{item.icon}</div>
          <div>
            <h4 className="font-semibold text-gray-900">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
