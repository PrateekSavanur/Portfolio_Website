"use client";

const Experience = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 text-center mb-12">
          My Experience
        </h1>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-gray-700 top-0 bottom-0 left-2"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {/* Item 1 */}
            <div className="relative flex flex-col md:flex-row md:items-center gap-4">
              {/* Left Section */}
              <div className="md:w-1/2 md:pr-8 md:text-right ml-9 md:ml-0">
                <h2 className="text-2xl font-semibold text-white">
                  Chapter Lead (Volunteer)
                </h2>
                <p className="text-gray-400">
                  TPG-Karnataka (January 2024 - Present)
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  <li>Organizing blockchain events and workshops</li>
                  <li>
                    Engaging with professionals to promote blockchain
                    technologies across Karnataka
                  </li>
                </ul>
              </div>

              {/* Circle */}
              <div className="absolute md:left-1/2 md:transform md:-translate-x-1/2 left-0 h-6 w-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full shadow-lg z-10"></div>
            </div>

            {/* Item 2 */}
            <div className="relative flex flex-col md:flex-row-reverse md:items-center gap-4">
              {/* Right Section */}
              <div className="md:w-1/2 md:pl-8 text-left ml-9 md:ml-0">
                <h2 className="text-2xl font-semibold text-white">
                  Frontend Developer
                </h2>
                <p className="text-gray-400">
                  H2SO4-Labs (July 2024 - September 2024)
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  <li>Built responsive UI components using React.js</li>
                  <li>
                    Collaborated on API integration for a dynamic web
                    application
                  </li>
                </ul>
              </div>

              {/* Circle */}
              <div className="absolute md:left-1/2 md:transform md:-translate-x-1/2 left-0 h-6 w-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full shadow-lg z-10"></div>
            </div>

            {/* Item 3 */}
            <div className="relative flex flex-col md:flex-row md:items-center gap-4">
              {/* Left Section */}
              <div className="md:w-1/2 md:pr-8 md:text-right ml-9 md:ml-0">
                <h2 className="text-2xl font-semibold text-white">
                  Blockchain Developer
                </h2>
                <p className="text-gray-400">
                  2x Solutions (September 2023 - December 2023)
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  <li>Developed and optimized smart contracts on Ethereum</li>
                  <li>Integrated Chainlink oracles for offchain data</li>
                </ul>
              </div>

              {/* Circle */}
              <div className="absolute md:left-1/2 md:transform md:-translate-x-1/2 left-0 h-6 w-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full shadow-lg z-10"></div>
            </div>

            {/* Item 4 */}
            <div className="relative flex flex-col md:flex-row-reverse md:items-center gap-4">
              {/* Right Section */}
              <div className="md:w-1/2 md:pl-8 text-left ml-9 md:ml-0">
                <h2 className="text-2xl font-semibold text-white">
                  Technical Consultant
                </h2>
                <p className="text-gray-400">
                  Knit Finance (May 2023 - August 2023)
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  <li>
                    Created educational content on blockchain technologies
                  </li>
                  <li>
                    Explored emerging technologies in the blockchain space
                  </li>
                </ul>
              </div>

              {/* Circle */}
              <div className="absolute md:left-1/2 md:transform md:-translate-x-1/2 left-0 h-6 w-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full shadow-lg z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
