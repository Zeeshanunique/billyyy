"use client"
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  email: string;
  title: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) throw new Error(data.error);
      
      setSuccess(true);
      setFormData({ name: '', email: '', title: '', message: '' });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-gray-600">We'd love to hear from you</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-medium">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full transition duration-150 ease-in-out"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-medium">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full transition duration-150 ease-in-out"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title" className="font-medium">
              Subject <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              required
              placeholder="What is this about?"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full transition duration-150 ease-in-out"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-medium">
              Message <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              required
              placeholder="Your message here..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full h-32 transition duration-150 ease-in-out"
            />
          </div>

          <div className="pt-4">
            <Button 
              disabled={loading} 
              type="submit" 
              className="w-full py-6 text-lg font-semibold transition-colors duration-150"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="animate-spin mr-2" />
                  Sending...
                </div>
              ) : 'Send Message'}
            </Button>
          </div>
        </form>

        {error && (
          <Alert variant="destructive" className="mt-6">
            <AlertDescription className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {error}
            </AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="mt-6 bg-green-50 border-green-200">
            <AlertDescription className="flex items-center text-green-800">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Message sent successfully!
            </AlertDescription>
          </Alert>
        )}
      </Card>
    </div>
  );
}