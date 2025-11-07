"use client";

import { useState } from "react";
import { Instagram } from "lucide-react";
import { supabaseClient } from "@/lib/supabaseClient";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      console.log("Submitting email:", email);
      
      const { data, error } = await supabaseClient.from("waitlist").insert([{ email }]);

      if (error) {
        console.error("Supabase error:", error);
        setStatus("error");
        
        // More specific error messages
        if (error.code === '23505') {
          setMessage("This email is already on the waitlist.");
        } else if (error.message.includes('Invalid input')) {
          setMessage("Please enter a valid email address.");
        } else {
          setMessage(`Error: ${error.message}`);
        }
      } else {
        console.log("Success! Data:", data);
        setStatus("success");
        setMessage("Thank you for joining the waitlist!");
        setEmail("");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setStatus("error");
      setMessage("An unexpected error occurred. Please try again.");
    }
    
    
  };

  return (
    <section id="waitlist" className="relative flex min-h-screen w-full items-center justify-center bg-neutral-100 overflow-hidden">
      <div className="container mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm border border-zinc-200/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#003E65] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#003E65]"></span>
            </span>
            Volunteer Portal is launching soon
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
            It Starts With Us
            <br />
            <span className="bg-linear-to-r from-[#003E65] to-[#1A1A1A] bg-clip-text text-transparent">
              Volunteer Portal
            </span>
            <br />
            Coming Soon
          </h1>

          {/* Subtext */}
          <p className="mb-12 max-w-xl text-lg text-zinc-600 leading-relaxed">
            Get early access to our upcoming volunteer portal and be among the first to make a difference in your community.
          </p>

          {/* Waitlist Card */}
          <div className="w-full max-w-xl rounded-3xl bg-white/90 backdrop-blur-md p-8 sm:p-12 shadow-2xl shadow-zinc-900/10 border border-zinc-200/50">
            <h2 className="mb-3 text-2xl font-bold text-[#1A1A1A]">
              Join the waitlist
            </h2>
            <p className="mb-8 text-sm text-zinc-600">
              Sign up to be one of the first to use the Volunteer Portal.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                required
                className="flex-1 rounded-xl bg-zinc-50 border border-zinc-200 px-5 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#003E65] focus:border-transparent transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A1A1A] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === "loading" ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Submitting...
                  </>
                ) : status === "success" ? (
                  <>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Submitted!
                  </>
                ) : (
                  <>
                    Get Notified
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* Status Message */}
            {message && (
              <div className={`mt-4 p-3 rounded-lg text-sm ${
                status === "success" 
                  ? "bg-green-50 text-green-700 border border-green-200" 
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}>
                {message}
              </div>
            )}
          </div>

          {/* Social Footer */}
          <div className="mt-12 flex items-center gap-4">
            <span className="text-sm font-medium text-zinc-600">Follow us</span>
            <a
              href="https://www.instagram.com/_itstartswithusorg/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200/50 text-zinc-700 hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
