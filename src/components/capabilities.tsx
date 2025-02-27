
import { Brain, MessageCircle, Code, Shield } from 'lucide-react';

const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "Autonomous Learning",
      description:
        "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "Multi-Modal Intelligence",
      description:
        "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding",
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Cognitive Integration",
      description:
        "Seamless integration with existing systems through advanced cognitive APIs and neural bridges",
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Ethical AI Framework",
      description:
        "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment",
    },
  ];

  return (
    <section id="features" className="bg-black text-white py-16">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-40">
        
        <h2 className="text-purple-500 text-3xl md:text-5xl font-bold mb-4 md:text-transparent md:bg-gradient-to-l md:from-purple-500 md:to-blue-500 md:bg-clip-text">
          Neural Capabilities
        </h2>
        <p className="text-gray-400 mb-12">
          Powered by next-generation artificial intelligence
        </p>

        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#1b1a1ab1] to-black bg-opacity-50 p-4 sm:p-6 rounded-lg hover:border-[1px] border-purple-500 border-opacity-20 hover:scale-105 transition-all duration-1000 hover:shadow-[0_0_13px_0px_theme(colors.purple.600)]"
            >
        
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 ">
                {capability.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{capability.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;