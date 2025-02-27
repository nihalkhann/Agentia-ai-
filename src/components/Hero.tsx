
// import Link from 'next/link';
// import AnimatedText from './AnimatedText';
// import { Bot } from 'lucide-react';

// const Hero: React.FC = () => {
//   return (
//     <section className="bg-gradient-to-b from-black via-black to-gray-900 text-white min-h-screen flex items-center justify-center">
//       <div className="text-center px-4">
//         {/* Powered By Text */}
//         <p className="text-purple-500 text-sm mb-2 py-2 ">• POWERED BY PANAVERSITY</p>

//         {/* Main Heading */}
//         <h1 className="text-5xl font-bold mb-4">
//           <span className="text-purple-400">Enterprise AI Agents</span>
//           <br />
//           for the Future
//         </h1>

              
//  <div className="max-w-md mx-auto relative">
//       {/* Dark background wrapper with rounded corners */}
//       <div className="bg-[#100E11]  rounded-lg p-7 border border-[#311D43]">
//         {/* Chat Bubble */}
//         <div className="flex items-center space-x-3">
//           {/* Bot Icon */}
//           <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
//             <span className="text-white">
//               <Bot size={18} />
//             </span>
//           </div>
          
//           {/* Chat Text with background */}
//           <div className="flex-1">
//             <div className="bg-[#1E1A1F]  rounded-md px-4 py-1 text-white text-sm">
//               <AnimatedText />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//         {/* Buttons */}
//         <div className="flex justify-center space-x-4">
//           <Link
//             href="/deploy"
//             className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition duration-300"
//           >
//             Deploy Your AI Agent →
//           </Link>
//           <Link
//             href="/demo"
//             className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition duration-300"
//           >
//             Watch Demo
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




import React from 'react';
import Link from 'next/link';
import { Bot,ChevronRight } from 'lucide-react';
import AnimatedText from './AnimatedText';


const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#010002fc] to-[#0F0517] text-white min-h-screen flex flex-col items-center justify-center py-16">
      <div className="text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block bg-[#0D0D0D]  rounded-full px-4 py-2 mt-2 md:mb-8 ">
          <p className="text-[#C084FC] text-sm flex items-center">
            <span className="mr-2 text-[#C084FC]">•</span> 
            POWERED BY PANAVERSITY
          </p>
        </div>

        <h1 className="text-[32px] md:text-6xl font-bold mb-12">
          <span className="text-purple-500 md:text-transparent md:bg-gradient-to-l md:from-purple-500 md:to-blue-500 md:bg-clip-text">Enterprise AI Agents</span>
          <br />
          <span className="text-white">for the Future</span>
        </h1>

        <div className="max-w-md mx-auto mb-16 relative">
          <div className="bg-[#100E12] rounded-lg p-4 border border-[#8155ad54]">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
                <span className="text-white">
                  <Bot size={18} />
                </span>
              </div>
              
              <div className="flex-1">
                <div className="bg-[#1E1A1F] rounded-md px-4 py-3 text-white text-sm">
                  <AnimatedText/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/#"
            className="bg-gradient-to-r from-[#8E37EA]  to-[#235def] text-white px-8 py-3 rounded-lg flex items-center transition duration-300 hover:shadow-[0_0_35px_0px_rgba(168,85,247,0.5)]"
          >
            Deploy Your AI Agent <span className="ml-2"><ChevronRight/></span>
          </Link>
         <Link
  href="/#"
  className="bg-transparent border border-gray-700 text-white px-8 py-3 rounded-lg transition duration-300 hover:border-[#A855F7] hover:shadow-[0_0_25px_0px_rgba(168,85,247,0.5)]"
>
  Watch Demo
</Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;