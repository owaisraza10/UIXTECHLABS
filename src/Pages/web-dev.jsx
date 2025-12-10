// File: Features.jsx
import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FiInfo } from 'react-icons/fi';

const WebDev = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen mt-16 p-4 sm:p-6 lg:p-8 bg-white font-sans text-gray-800">
      
      {/* ===============================
          Main Content Wrapper
      =============================== */}
      <div className="w-full max-w-4xl mx-auto text-center">

        {/* ===============================
            Intro Section
        =============================== */}
        <div className="mb-12 md:mb-16">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ color: '#01133b' }}>
            Our Impact on Web Development
          </h1>

          <p className="max-w-3xl mx-auto mb-6 text-base text-gray-600 sm:text-lg">
            With nearly a decade of experience, our passionate team is dedicated to bringing your vision to life. We’ve tackled diverse challenges across various industries and delivered innovative solutions. Whether you're in retail, healthcare, or any other domain, bring us your business, and we’ll automate processes and craft engaging web experiences that connect with your audience, using our expertise in web application development.
          </p>

        </div>

        {/* ===============================
            Datenschutzerklärung Section
        =============================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  {/* Card 1 */}
  <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm sm:p-8 h-[450px] flex flex-col">
    <h2 className="mb-4 text-xl font-bold sm:text-2xl" style={{ color: '#01133b' }}>
      Complex Web Apps
    </h2>
    <p className="text-sm text-gray-700 sm:text-base">
      We specialize in building complex web applications that streamline intricate business operations. From managing large-scale data to automating workflows, we create tailored solutions that ensure seamless performance and functionality, no matter how complex.
    </p>
  </div>

  {/* Card 2 */}
  <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm sm:p-8 h-[450px] flex flex-col">
    <h2 className="mb-4 text-xl font-bold sm:text-2xl" style={{ color: '#01133b' }}>
      Scalable & secure solutions
    </h2>
    <p className="text-sm text-gray-700 sm:text-base">
      We deliver scalable and secure solutions leveraging cloud technologies to handle high traffic and ensure optimal performance. Our cloud-based approach enables real-time monitoring, automatic scaling, and robust security measures, keeping your data safe and your systems reliable.
    </p>
  </div>

  {/* Card 3 */}
  <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm sm:p-8 h-[450px] flex flex-col">
    <h2 className="mb-4 text-xl font-bold sm:text-2xl" style={{ color: '#01133b' }}>
      Truly unique websites
    </h2>
    <p className="text-sm text-gray-700 sm:text-base">
      We create truly unique, responsive websites that offer exceptional user experiences. Our expert UI/UX team designs intuitive, visually engaging interfaces, ensuring your site stands out. Leveraging modern UI frameworks like Tailwind, Bootstrap, and others, we build fast, scalable websites that adapt seamlessly across all devices.
    </p>
  </div>

</div>

      </div>

      {/* ===============================
          Info Icon (Bottom Left)
      =============================== */}
      <div
        className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6"
        title="More information"
      >
        <FiInfo className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>
    </div>
  );
};

export default WebDev;
