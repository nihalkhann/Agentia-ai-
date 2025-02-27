import { Building2, Layers, Lock } from 'lucide-react';

const Solution: React.FC = () => {
  const solutions = [
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "Enterprise AI",
      description:
        "Custom AI agents designed for enterprise-scale operations and decision-making",
    },
    {
      icon: <Layers className="w-8 h-8 text-white" />,
      title: "Neural Operations",
      description:
        "Automated workflow optimization through distributed neural networks",
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: "Secure Intelligence",
      description:
        "Privacy-first AI solutions with military-grade security protocols",
    },
  ];

  return (
    <section id="solution" className="bg-black text-white py-16">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-40">
        <h2 className="text-transparent   text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-l from-purple-500  to-blue-500  bg-clip-text ">
          AI Solutions
        </h2>
        <p className="text-gray-400 mb-12">
          Transforming industries with intelligent agents
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#1b1a1ab1] to-black bg-opacity-50 p-4 sm:p-6 rounded-lg border-[1px] border-purple-500 border-opacity-20 hover:scale-105 transition-all duration-1000 hover:shadow-[0_0_13px_0px_theme(colors.purple.600)]"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 ">
                {solution.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;