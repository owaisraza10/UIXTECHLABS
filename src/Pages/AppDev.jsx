import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const AppDev = () => {
  return (
    <section className="bg-white font-sans  mt-4  py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800">
            Building Apps That Stand Out
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Since 2020, we’ve been crafting exceptional mobile apps that deliver impact. No challenge is too big—we’ve tackled them all. Partner with us to create engaging, seamless mobile experiences that captivate your users.

          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            We offer comprehensive mobile app development services, guiding your project from concept to completion and beyond. Our expert team ensures your mobile app is designed, developed, and maintained with precision and care at every stage.
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            We don't just deliver your app and leave. Our team provides continuous post-launch support, including efficient release management, robust security protocols, and seamless updates, ensuring your app remains secure, up-to-date, and performs flawlessly.
          </p>
        </div>

        {/* Features Grid Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Fair Prices */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-slate-800 text-white rounded-full p-2 mb-5">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Native</h3>
            <p className="text-sm text-gray-600">Boost your business with custom Android app development. We build secure, scalable, and user-friendly Android apps designed to improve performance and enhance user engagement.</p>
          </div>

          {/* Card 2: No Registration */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-slate-800 text-white rounded-full p-2 mb-5">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cross-platform</h3>
            <p className="text-sm text-gray-600">Maximize your reach with cross-platform app development services. We build high-performance apps that work seamlessly across Android and iOS, reducing costs and ensuring wider audience engagement.</p>
          </div>

          {/* Card 3: Targeted Forwarding */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-slate-800 text-white rounded-full p-2 mb-5">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Based Architecture</h3>
            <p className="text-sm text-gray-600">Beyond traditional code-based backend development, we are specialized in building scalable and efficient backends using cloud-managed services like AWS Amplify, Lambda and Azure equivalents. Leverage the power of the cloud for faster, more reliable, and cost-effective solutions.</p>
          </div>
          
          {/* Card 4: Fast Contact */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-slate-800 text-white rounded-full p-2 mb-5">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous App Care</h3>
            <p className="text-sm text-gray-600">We don't just deliver your app and leave. Our team provides continuous post-launch support, including efficient release management, robust security protocols, and seamless updates, ensuring your app remains secure, up-to-date, and performs flawlessly.</p>
          </div>

          {/* Card 5: How it works (Spans 2 columns on large screens) */}
          <div className="bg-slate-100 rounded-lg shadow-sm p-8 border border-gray-200 lg:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">How it works:</h3>
            <ol className="list-decimal list-inside space-y-2 text-left text-gray-700">
              <li>Discovery & R&D</li>
              <li>UX/UI Design</li>
              <li>Development</li>
              <li>Quality Assurance (QA)</li>
              <li>Launch/App Deployment</li>
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppDev;