"use client";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen font-sans">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row justify-center">
        {/* Intro Section */}
        <div className="lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center lg:items-start space-y-6 lg:ml-20">
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Prateek Prasanna Savanur
          </h1>
          <p className="text-xl sm:text-2xl font-light text-gray-300">
            Blockchain Developer | Full-Stack Developer | Tech Enthusiast
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start space-x-4">
            <Link
              href="/projects"
              className="inline-block bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 rounded-full text-lg text-white shadow-lg transform transition-transform hover:scale-105"
            >
              View My Projects
            </Link>
            <Link
              href="https://github.com/PrateekSavanur"
              className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 px-6 py-3 rounded-full text-lg text-white shadow-lg transform transition-transform hover:scale-105"
            >
              GitHub
            </Link>
          </div>
        </div>

        <div className=" flex justify-center items-center">
          <div className="relative mt-12 lg:mt-0 w-72 h-72 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-xl overflow-hidden">
            <Image
              src="./profile-placeholder.jpg"
              alt="Prateek's Profile"
              layout="fill"
              objectFit="cover"
              priority={true}
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-6">
            Technical Skills
          </h2>
          <div className="w-24 mx-auto border-b-4 border-pink-500 mb-12"></div>

          {/* Skill Cards Grid */}
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-[80%]">
              {/* Card 1 - Web Development Skills */}
              <div className="p-8 bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
                <div className="flex items-center mb-6">
                  <span className="text-indigo-400 text-4xl mr-4">
                    <i className="fas fa-code"></i>
                  </span>
                  <h3 className="text-2xl font-semibold text-white">
                    Web Development Skills
                  </h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>Node.js, Express.js</li>
                  <li>MongoDB, GraphQL</li>
                </ul>
              </div>

              {/* Card 2 - Blockchain Skills */}
              <div className="p-8 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
                <div className="flex items-center mb-6">
                  <span className="text-purple-400 text-4xl mr-4">
                    <i className="fas fa-shield-alt"></i>
                  </span>
                  <h3 className="text-2xl font-semibold text-white">
                    Blockchain Skills
                  </h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>Solidity</li>
                  <li>Hardhat, Ethers.js</li>
                  <li>Chainlink</li>
                  <li>Rust, Anchor</li>
                </ul>
              </div>

              {/* Card 3 - Programming Languages */}
              <div className="p-8 bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
                <div className="flex items-center mb-6">
                  <span className="text-teal-400 text-4xl mr-4">
                    <i className="fas fa-code-branch"></i>
                  </span>
                  <h3 className="text-2xl font-semibold text-white">
                    Programming Languages
                  </h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>C++</li>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>Solidity</li>
                </ul>
              </div>

              {/* Card 4 - Additional Skills */}
              <div className="p-8 bg-gradient-to-r from-yellow-600 via-yellow-700 to-yellow-800 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
                <div className="flex items-center mb-6">
                  <span className="text-yellow-400 text-4xl mr-4">
                    <i className="fas fa-tools"></i>
                  </span>
                  <h3 className="text-2xl font-semibold text-white">
                    Additional Skills
                  </h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>Version Control: Git, GitHub</li>
                  <li>Smart Contract Security Auditing</li>
                  <li>Chainlink Oracles Integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
