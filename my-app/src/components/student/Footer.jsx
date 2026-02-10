import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0B1220] to-[#020617] text-gray-300">
      
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Edemy</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text.
            </p>
          </div>

         
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About us</li>
              <li className="hover:text-white cursor-pointer">Contact us</li>
              <li className="hover:text-white cursor-pointer">Privacy policy</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-white font-semibold mb-4">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-l-md bg-[#111827] border border-gray-600 text-sm outline-none"
              />
              <button className="px-6 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
          </div>

        </div>

      
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          Copyright 2024 © GreatStack. All Right Reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;



