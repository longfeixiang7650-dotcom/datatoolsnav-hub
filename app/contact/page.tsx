"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [fd, setFd] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 5000); };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">Contact</h1>
        <p className="text-slate-400 max-w-xl mx-auto">Have a suggestion for a tool we should add? Questions about a listing? Get in touch.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="glass-card p-5 flex items-center gap-3">
            <Mail className="w-4 h-4 text-blue-400" />
            <div><p className="text-sm font-medium text-slate-200">Email</p><p className="text-xs text-slate-500">info@datatoolsnav.net</p></div>
          </div>
          <div className="glass-card p-5 flex items-center gap-3">
            <MapPin className="w-4 h-4 text-blue-400" />
            <div><p className="text-sm font-medium text-slate-200">Location</p><p className="text-xs text-slate-500">Espoo, Finland</p></div>
          </div>
          <div className="glass-card p-5 flex items-center gap-3">
            <Clock className="w-4 h-4 text-blue-400" />
            <div><p className="text-sm font-medium text-slate-200">Response</p><p className="text-xs text-slate-500">Within 48 hours</p></div>
          </div>
          <p className="text-xs text-slate-600">A project by Juniper Interactive. Contact Sean Moretti at sean@datatoolsnav.net.</p>
        </div>
        <div className="lg:col-span-2">
          {submitted ? (
            <div className="bg-green-900/30 border border-green-700/50 rounded-xl p-8 text-center">
              <Send className="w-6 h-6 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-green-300 mb-1">Sent!</h3>
              <p className="text-sm text-green-400/80">We&apos;ll respond within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Name</label>
                  <input type="text" required value={fd.name} onChange={e => setFd({...fd, name: e.target.value})}
                    className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Email</label>
                  <input type="email" required value={fd.email} onChange={e => setFd({...fd, email: e.target.value})}
                    className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Subject</label>
                <input type="text" required value={fd.subject} onChange={e => setFd({...fd, subject: e.target.value})}
                  className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Message</label>
                <textarea required rows={5} value={fd.message} onChange={e => setFd({...fd, message: e.target.value})}
                  className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm resize-none" placeholder="Tell us more..." />
              </div>
              <button type="submit" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
