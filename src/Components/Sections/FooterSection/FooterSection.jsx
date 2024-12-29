import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-6 lg:grid-cols-4 lg:gap-12 lg:px-8">
        {/* About Us Section */}
        <div>
          <h2 className="text-lg font-semibold text-white">About Us</h2>
          <p className="mt-4 text-sm leading-relaxed">
            We’re committed to delivering top-notch products and resources that empower businesses globally.
            Join our newsletter to stay updated!
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-green-500">Home</a></li>
            <li><a href="#" className="hover:text-green-500">About</a></li>
            <li><a href="#" className="hover:text-green-500">Services</a></li>
            <li><a href="#" className="hover:text-green-500">Contact</a></li>
            <li><a href="#" className="hover:text-green-500">Blog</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className="text-lg font-semibold text-white">Contact Us</h2>
          <p className="mt-4 text-sm leading-relaxed">
            1234 Main St., Suite 200 <br />
            Hometown, USA 12345 <br />
            +1 (234) 567-890
          </p>
          <p className="mt-2 text-sm">
            <a href="mailto:info@yourcompany.com" className="text-green-400 hover:text-green-500">
              info@yourcompany.com
            </a>
          </p>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-lg font-semibold text-white">Follow Us</h2>
          <div className="mt-4 flex space-x-4">
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-green-500">
              <FaFacebookF className="h-5 w-5 text-white" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-white/10 hover:bg-green-500">
              <FaTwitter className="h-5 w-5 text-white" />
            </a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-green-500">
              <FaInstagram className="h-5 w-5 text-white" />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-white/10 hover:bg-green-500">
              <FaLinkedinIn className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
