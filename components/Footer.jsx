'use client'
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-20  ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-28">
        {/* Left: Logo and tagline */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            {/* Logo Placeholder */}
            <Image
              src="/img/logo.png"
              alt="Logo"
              width={300}
              height={300}
              className=" h-5 w-auto md:h-7 logo-primary-filter"
            />
          </div>
          <div className="text-text-muted text-sm max-w-xs">Industry-leading security keeps sensitive information safe.</div>
        </div>
        {/* Center: Company Info */}
        <div className="flex-1 flex flex-row justify-center gap-16 min-w-[320px]">
          <div className="flex flex-col gap-2 text-text-muted text-sm">
            <span className="font-semibold text-white mb-2">Company Info</span>
            <Link href="/about" className="hover:underline hover:text-white transition-colors">About Us</Link>
            <Link href="/solution" className="hover:underline hover:text-white transition-colors">Solution</Link>
            <Link href="/contact" className="hover:underline hover:text-white transition-colors">Contact us</Link>
            <Link href="/pricing" className="hover:underline hover:text-white transition-colors">Pricing</Link>
            <Link href="/contact" className="hover:underline hover:text-white transition-colors">Contact us</Link>
          </div>
          <div className="flex flex-col gap-2 text-text-muted text-sm">
            <span className="font-semibold text-white mb-2">Legal</span>
            <Link href="/privacy" className="hover:underline hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:underline hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="/security" className="hover:underline hover:text-white transition-colors">Security</Link>
          </div>
        </div>
        {/* Right: Contact Info */}
        <div className="flex-1 min-w-[280px] flex flex-col gap-3 text-text-muted text-sm">
          <span className="font-semibold text-white mb-2">Get In Touch</span>
          <div className="flex items-center gap-2">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z" stroke="#B6D0C6" strokeWidth="2" /></svg>
            (480) 555-0103
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            4517 Washington Ave.
          </div>
          <div className="flex items-center gap-2">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm8 8l8-5v10l-8-5zm0 0L4 7v10l8-5z" stroke="#B6D0C6" strokeWidth="2" /></svg>
            debra.holt@example.com
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-secondary-footer-border my-6 w-full max-w-7xl mx-auto" />
      {/* Bottom row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-text-muted text-xs px-2">
        <div>Replysystem @2025, All rights reserved.</div>
        <div className="flex gap-4">
          <Link href="#" aria-label="LinkedIn" className="hover:opacity-80"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" fill="#B6D0C6" /><path d="M7 10v4M7 7v.01M12 10v4M12 10c0-1.1.9-2 2-2s2 .9 2 2v4" stroke="#0B4740" strokeWidth="1.5" strokeLinecap="round" /></svg></Link>
          <Link href="#" aria-label="Facebook" className="hover:opacity-80"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" fill="#B6D0C6" /><path d="M15 8h-2a1 1 0 0 0-1 1v2h3l-.5 3h-2.5v6" stroke="#0B4740" strokeWidth="1.5" strokeLinecap="round" /></svg></Link>
        </div>
      </div>
    </footer>
  );
} 