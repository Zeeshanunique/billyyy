import React from 'react';
import { Shield, Heart, BookOpen, TrendingUp, Users, Clock } from 'lucide-react';

export default function About() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto p-8">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Billy is an AI-powered platform designed to create safer online spaces for everyone. 
              We combine advanced technology with empathy to detect, prevent, and address cyberbullying.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-blue-700 mb-6">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Real-time Protection</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Heart className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Support System</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Learning Resources</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-blue-700 mb-6">Our Impact</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">90% Safety Rate</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">100K+ Users Protected</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">24/7 Monitoring</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="text-center bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Join Us</h2>
            <p className="text-gray-700 mb-6">
              Be part of the movement to make the internet a safer place for everyone.
            </p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </section>
        </div>
      </main>
    </>
  );
}