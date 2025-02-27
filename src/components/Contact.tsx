
import { Mail, Globe, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-black text-white py-16">
      <div className="container mx-auto px-6 sm:px-6 lg:px-40">
        <h2 className="text-purple-500 text-3xl md:text-5xl font-bold mb-4 md:text-transparent md:bg-gradient-to-l md:from-purple-500 md:to-blue-500 md:bg-clip-text text-center">
          Get in Touch
        </h2>
        <p className="text-gray-400 mb-12 text-center">
          Ready to transform your business with AI?
        </p>

        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <Link
                  href="mailto:contact@agentiaworld.com"
                  className="text-gray-400 hover:text-purple-400"
                >
                  contact@agentiaworld.com
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-purple-400" />
                <Link
                  href="https://www.agentiaworld.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400"
                >
                  www.agentiaworld.com
                </Link>
              </li>
              <li className="flex items-center space-x-5 text-xl mt-2.5 ">
                <Link
                  href="https://github.com/panaverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400"
                >
                  <Github  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/panaverse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400"
                >
                  <Linkedin  />
                </Link>
                <Link
                  href="https://twitter.com/Panaverse_edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400"
                >
                  <Twitter />
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:w-2/3">
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 border border-purple-500 border-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 border border-purple-500 border-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 border border-purple-500 border-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 border border-purple-500 border-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:bg-gradient-to-r hover:shadow-[0_0_35px_0px_rgba(168,85,247,0.5)] hover:border-[1px] border-purple-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
