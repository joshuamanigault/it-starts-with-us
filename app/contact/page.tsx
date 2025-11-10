"use client";

import { useState } from "react";
import { Send, ArrowRight, Mail, User, MessageCircle } from "lucide-react";
import { supabaseClient } from "@/lib/supabaseClient";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");


    // Reset status after 5 seconds
    setTimeout(() => setStatus("idle"), 5000);
  };

  const interestOptions = [
    "Volunteer Opportunities",
    "Community Partnership",
    "Event Collaboration",  
    "Other"
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-neutral-50 to-neutral-100">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm border border-zinc-200/50">
            <Mail className="h-4 w-4 text-[#003E65]" />
            Let's Connect
          </div>
          
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
            Love to hear from you,
            <br />
            <span className="bg-linear-to-r from-[#003E65] to-[#1A1A1A] bg-clip-text text-transparent">
              Get in touch
            </span>
            <span className="inline-block ml-2 text-4xl">👋</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 leading-relaxed">
            Ready to make a difference in your community? We'd love to hear about your ideas, 
            partnership opportunities, or how you'd like to get involved with It Starts With Us.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl bg-white/90 backdrop-blur-md p-8 sm:p-12 shadow-2xl shadow-zinc-900/10 border border-zinc-200/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Your name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl bg-zinc-50 border border-zinc-200 pl-10 pr-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#003E65] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Your email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    required
                    className="w-full rounded-xl bg-zinc-50 border border-zinc-200 pl-10 pr-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#003E65] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Interest Field */}
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                  What you are interested in
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 z-10" />
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl bg-zinc-50 border border-zinc-200 pl-10 pr-10 py-3.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#003E65] focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select your interest</option>
                    {interestOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <ArrowRight className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-zinc-400 pointer-events-none" />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message"
                  rows={6}
                  required
                  className="w-full rounded-xl bg-zinc-50 border border-zinc-200 px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#003E65] focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Status Message */}
              {message && (
                <div className={`p-4 rounded-xl text-sm ${
                  status === "success" 
                    ? "bg-green-50 text-green-700 border border-green-200" 
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}>
                  {message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A1A1A] px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {status === "loading" ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send
                    <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 rounded-2xl bg-white/80 backdrop-blur-sm px-6 py-4 shadow-lg border border-zinc-200/50">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#003E65]" />
              <a 
                href="mailto:info@itstartswithus.org" 
                className="text-sm font-medium text-zinc-700 hover:text-[#003E65] transition-colors"
              >
                info@itstartswithus.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}