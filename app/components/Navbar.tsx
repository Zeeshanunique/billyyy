// Navbar.tsx
"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Shield, MessageCircle, HelpCircle, Info,ChartPie  } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: <Shield className="w-4 h-4" /> },
    { href: "/community", label: "Community", icon: <MessageCircle className="w-4 h-4" /> },
    { href: "/analytics", label: "Analytics", icon: <ChartPie className="w-4 h-4" /> },
    { href: "/faq", label: "FAQ", icon: <HelpCircle className="w-4 h-4" /> },
    { href: "/about", label: "About", icon: <Info className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <Shield className="w-8 h-8" />
            <span className="font-bold text-xl">Billy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors py-2 px-3 rounded-md hover:bg-blue-700"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors py-2 px-3 rounded-md hover:bg-blue-700 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}