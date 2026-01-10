import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 font-sans pb-12 md:pb-12">
      {/* 👆 Added pb-24 for mobile (to avoid overlap with bottom navbar), 
          and md:pb-12 for normal desktop spacing */}

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Über BOB (spans 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">About UIX Tech Labs</h3>
            <p className="text-sm leading-relaxed">
              At UIX TECH LABS PRIVATE LIMITED, we transform ideas into powerful digital experiences. As a modern software development and design studio, we specialize in building scalable applications, intuitive user interfaces, and innovative tech solutions tailored to your business goals.

Our team blends creativity with engineering excellence to deliver products that are fast, reliable, and visually impactful. From startups to enterprises, we help brands innovate, grow, and stay ahead in a rapidly evolving digital world.

With a commitment to quality, transparency, and user-centric innovation, we turn your vision into reality—one line of code at a time.
            </p>
          </div>
          
          {/* Column 3: Kontakt */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="text-sm space-y-3">
             
              <div className="flex items-start gap-3">
              
              </div>
              <a href="mailto:schrauberparksgermany@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <FiMail className="text-lg" />
                <span>support@uixtechlabs.org</span>
              </a>
            </div>
          </div>

          {/* Column 3: Kontakt */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Address</h3>
            <div className="text-sm space-y-3">
             
              <div className="flex items-start gap-3">
              
              </div>
          
                <span>House No. 12,
Portion Back Floor, 3rd DR Lohia Road, Adrash Nagar, North
West Delhi, Delhi, Delhi, India, 110033</span>
              
            </div>
          </div>
          
          
        </div>

        {/* Bottom copyright section */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © 2025 UIX Tech Labs – All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
