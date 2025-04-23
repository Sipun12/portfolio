import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
        {/* Logo / Branding */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">
            <img
              src="src\assets\logo.png"
              width={50}
              height={50}
              alt="Sipun"
              srcset=""
            />
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-yellow-400 hover:underline decoration-amber-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-yellow-400">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-yellow-400 hover:underline decoration-amber-400">
            Contact
          </h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:sipunmeher59@gmail.com"
                className="hover:text-yellow-400"
              >
                sipunmeher129@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+918637238931" className="hover:text-yellow-400">
                +91 8637238931
              </a>
            </li>
            <li>Location: Barpali, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        Made with ❤️ by Sipun
      </div>
    </footer>
  );
}
