// "use client";
// import React, { useEffect, useState } from 'react';

// const roles = [
//   "Hello! I'm your AI agent. How can I enhance your business today?",
//   "Would you like to explore our AI integration?",
//   "I can help optimize your workflows with neural networks.",
//   "Let me assist you with advanced data analytics.",
//   "I can help optimize your workflows with neural networks.",
//   "Would you like to explore our AI integra",
  
// ];

// const AnimatedText = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [displayText, setDisplayText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentText = roles[currentIndex];
//     const updateText = () => {
//       if (!isDeleting) {
//         if (displayText.length < currentText.length) {
//           setDisplayText(currentText.slice(0, displayText.length + 1));
//         } else {
//           setTimeout(() => setIsDeleting(true),100);
//         }
//       } else {
//         if (displayText.length === 0) {
//           setIsDeleting(false);
//           setCurrentIndex((prev) => (prev + 1) % roles.length);
//         } else {
//           setDisplayText(displayText.slice(0, -1));
//         }
//       }
//     };

//     const timeout = setTimeout(updateText, isDeleting ? 100 : 200);
//     return () => clearTimeout(timeout);
//   }, [displayText, currentIndex, isDeleting]);

//   return (
//     <h2 className="text-2xl  text-gray-300 mb-8">
//       {' '}
//       <span className="text-[16px]  text-blue-500  font-semibold ld inline-block min-w-[200px]">
//         {displayText}
//         <span className="animate-pulse">|</span>
//       </span>
//     </h2>
//   );
// };

// export default AnimatedText;






"use client";
import React, { useEffect, useState } from 'react';

const roles = [
  "Hello! I'm your AI agent. How can I enhance your business today?",
  "Would you like to explore our AI integration?",
  "I can help optimize your workflows with neural networks.", 
  "Let me assist you with advanced data analytics.",
  "I can help optimize your workflows with neural networks.",
  "Would you like to explore our AI integra",
];

const AnimatedText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentIndex];
    const updateText = () => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 100);
        }
      } else {
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        } else {
          setDisplayText(displayText.slice(0, -1));
        }
      }
    };

    const timeout = setTimeout(updateText, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  return (
    <div className="text-left w-full ">
      <h2 className="text-2xl text-gray-300 text-left">
        <span className="text-[16px] text-white  ">
          {displayText}
          <span className="animate-pulse text-purple-500">|</span>
        </span>
      </h2>
    </div>
  );
};  

export default AnimatedText;