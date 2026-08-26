import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Northbridge Systems
            </h3>
            <p className="text-sm text-gray-600">
              Practical technology solutions for growing businesses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Manchester, United Kingdom</li>
              <li>
                <a
                  href="mailto:hello@paleon-lab-clean.com"
                  className="hover:text-gray-900"
                >
                  hello@paleon-lab-clean.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            &copy; {currentYear} Northbridge Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
