import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const AiDev = () => {
  return (
    <section className="bg-white font-sans  mt-4  py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800">
            AI Solutions That Power Your Brand and Simplify Your Workflow
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Integrating AI into your operations isn't just about futuristic tech; it's about making your business smarter, faster, and more cost-effective. Here’s how our AI services can transform your efficiency:
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            We automate repetitive, manual tasks like data entry, report generation, and workflow approvals, freeing up your valuable employees to focus on high-impact strategic work.
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Lets Collaborate & make good things together
          </p>
        </div>

        {/* Features Grid Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Fair Prices */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-slate-800 text-white rounded-full p-2 mb-5">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Intelligent Process Automation</h3>
            <p className="text-sm text-gray-600">We automate repetitive, manual tasks like data entry, report generation, and workflow approvals, freeing up your valuable employees to focus on high-impact strategic work.</p>
          </div>

          {/* Card 2: No Registration */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-slate-800 text-white rounded-full p-2 mb-5">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Supply Chain & Route Optimization</h3>
            <p className="text-sm text-gray-600">AI analyzes traffic, weather, and demand in real-time to calculate the most efficient delivery routes and streamline your entire supply chain, significantly reducing fuel costs and delivery times.</p>
          </div>

          {/* Card 3: Targeted Forwarding */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-slate-800 text-white rounded-full p-2 mb-5">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Inventory Management</h3>
            <p className="text-sm text-gray-600">Our systems forecast future demand with high accuracy, ensuring you always have the right amount of stock at the right time. This prevents costly overstocking and eliminates sales lost due to stockouts.</p>
          </div>
          
          {/* Card 4: Fast Contact */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-slate-800 text-white rounded-full p-2 mb-5">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Automated Billing & Financial Analysis</h3>
            <p className="text-sm text-gray-600">Streamline your finances by automating invoice processing, expense tracking, and fraud detection. This ensures faster payment cycles, reduces human error, and provides deeper insights into your financial health.</p>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-slate-800 text-white rounded-full p-2 mb-5">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Automated Customer Support</h3>
            <p className="text-sm text-gray-600">Deploy intelligent chatbots that handle common customer queries instantly, any time of day. This reduces support ticket volume and allows your human agents to dedicate their time to resolving complex issues.</p>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-slate-800 text-white rounded-full p-2 mb-5">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Streamlined HR & Recruitment</h3>
            <p className="text-sm text-gray-600">Accelerate your hiring process by using AI to screen resumes, shortlist candidates, and schedule interviews. This helps you find the right talent faster and reduces the administrative burden on your HR team.</p>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-slate-800 text-white rounded-full p-2 mb-5">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Maintenance</h3>
            <p className="text-sm text-gray-600">Our AI monitors your equipment and machinery, predicting potential failures before they happen. This allows you to schedule maintenance proactively, avoiding costly unplanned downtime and extending equipment life.</p>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
            <div className="bg-slate-800 text-white rounded-full p-2 mb-5">
              <FiCheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimized Resource Allocation</h3>
            <p className="text-sm text-gray-600">AI tools analyze project requirements, team performance, and operational data to help you allocate staff, budget, and resources more effectively, ensuring every asset is used to its maximum potential.</p>
          </div>

          {/* Card 5: How it works (Spans 2 columns on large screens) */}
          <div className="bg-slate-100 rounded-lg shadow-sm p-8 border border-gray-200 lg:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">How it works:</h3>
            <ol className="list-decimal list-inside space-y-2 text-left text-gray-700">
              <li>Understanding Your Needs</li>
              <li>Prototyping & Development</li>
              <li>Deployment & Support</li>
    
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiDev;