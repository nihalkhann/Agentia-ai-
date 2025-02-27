// components/FeaturesSection.tsx
import { Brain, Cpu, CodeXml, Earth } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "NEURAL NETWORKS",
      description: "Advanced neural architectures for complex decision making",
    },
    {
      icon: <Cpu className="w-8 h-8 text-white" />,
      title: "DEEP LEARNING",
      description: "Sophisticated deep learning models for pattern recognition",
    },
    {
      icon: <CodeXml className="w-8 h-8 text-white" />,
      title: "ADVANCED ML",
      description: "Cutting-edge machine learning algorithms",
    },
    {
      icon: <Earth className="w-8 h-8 text-white" />,
      title: "GLOBAL SCALE",
      description: "Distributed AI processing across global networks",
    },
  ];

  return (
    <section id="technology" className="bg-gradient-to-t from-[#010002fc] to-[#0F0517] text-white py-16">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-40">
        {/* Heading */}
        <h2 className="text-[27px] md:text-5xl font-bold mb-4">
          <span className="text-[#000000] md:text-transparent   bg-gradient-to-r from-[#8E37EA] via-[#4578F4] to-[#8E37EA]  bg-clip-text rounded-md ">Powered by Advanced AI</span>
        </h2>
        <p className="text-gray-400 mb-12">
          Built on cutting-edge neural architectures
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-[#1b1a1ab1] p-4 sm:p-6 rounded-lg hover:border-[1px] border-purple-500 border-opacity-20 hover:scale-105 transition-all duration-700 hover:shadow-[0_0_13px_0px_theme(colors.purple.600)]"
            >
              {/* Icon with Gradient Background */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 group-hover:rotate-12 transition-transform duration-300 group-hover:scale-105">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;