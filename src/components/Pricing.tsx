import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      title: "Starter",
      price: "$499/month",
      features: [
        "2 AI Agents Instances",
        "Basic Neural Processing",
        "24/7 Support",
        "Weekly Analytics",
        "Basic Integration Support",
      ],
      buttonText: "Get Started",
      link: "/", 
      highlighted: false,
    },
    {
      title: "Professional",
      price: "$999/month",
      features: [
        "10 AI Agents Instances",
        "Advanced Neural Networks",
        "Priority Support",
        "Real-Time Analytics",
        "Custom Integration",
        "API Access",
        "Advanced Security",
      ],
      buttonText: "Get Started",
      link: "/",
      highlighted: true,
    },
    {
      title: "Enterprise",
      price: "$Custom",
      features: [
        "Unlimited Agents",
        "Full Neural Suite",
        "Dedicated Support Team",
        "Advanced Analytics Dashboard",
        "Custom Development",
        "Full API Access",
        "Enterprise Security",
        "Custom Training",
      ],
      buttonText: "Get Started",
        link: "/",
        highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="bg-black text-white py-16">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-40">
        <h2 className="text-purple-500 text-3xl md:text-5xl font-bold mb-4 md:text-transparent md:bg-gradient-to-l md:from-purple-500 md:to-blue-500 md:bg-clip-text">
          Choose Your Plan
        </h2>
        <p className="text-gray-400 mb-12">
          Scale your AI capabilities with our flexible pricing
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group p-4 sm:p-6 rounded-2xl shadow-lg border border-purple-500 border-opacity-20 transition-all duration-700 hover:scale-105 hover:shadow-[0_0_13px_0px_theme(colors.purple.600)] ${
                plan.highlighted
                  ? "bg-gradient-to-b from-purple-900 to-black"
                  : "bg-gradient-to-b from-[#1b1a1ab1] to-black bg-opacity-50"
              }`}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-2xl sm:text-3xl font-bold mb-4">{plan.price}</p>

              <ul className="text-gray-400 text-xs sm:text-sm mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={plan.link}>
                <button
                  className={`w-full py-2 rounded-full transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:bg-gradient-to-r hover:shadow-[0_0_35px_0px_rgba(168,85,247,0.5)] hover:border-[1px] border-purple-500"
                      : "bg-transparent border border-purple-500 text-white hover:bg-purple-500 hover:border-purple-500"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;