// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0d10] text-gray-300 pt-16 pb-10">
      
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#15151b] rounded-xl p-8 grid md:grid-cols-2 gap-6 items-center">

          {/* Left text */}
          <div>
            <p className="uppercase text-xs tracking-widest text-gray-400">
              Subscribe to our
            </p>
            <h3 className="text-2xl font-semibold text-white">
              Newsletter
            </h3>
          </div>

          {/* Email Input */}
          <motion.form 
            className="flex items-center bg-[#1d1d24] rounded-full p-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 bg-transparent outline-none px-4 text-gray-300 text-sm"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Submit
            </button>
          </motion.form>

        </div>
      </div>

      {/* Links Section */}
      <div className="mt-14 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Information */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Information</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Our Company</li>
            <li>Data</li>
            <li>Pricing</li>
            <li>Contact Us</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Application */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Application</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Download</li>
            <li>Bike Provider</li>
            <li>How It Works</li>
          </ul>
        </div>

        {/* API */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">API</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Documentation</li>
            <li>Credential</li>
            <li>Developer Info</li>
          </ul>
        </div>

        {/* Branding */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">ReactBits</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            © {new Date().getFullYear()} ReactBits.  
            <br /> All rights reserved.
            <br /> Made with ❤️ using Tailwind, shadcn & React.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
