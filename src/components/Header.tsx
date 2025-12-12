'use client'

import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { BUSINESS } from '../constants'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          {BUSINESS.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
          <Link href="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-2 px-6 py-2.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            <Phone size={18} />
            Call Now
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 border-t">
          <Link href="/" className="block py-2 text-gray-700">Home</Link>
          <Link href="/contact" className="block py-2 text-gray-700">Contact</Link>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="block py-3 bg-accent text-white text-center rounded-lg font-semibold"
          >
            Call {BUSINESS.phone}
          </a>
        </div>
      )}
    </header>
  )
}
