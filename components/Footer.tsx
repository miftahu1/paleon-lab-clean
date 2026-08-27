import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/3 p-6 sm:p-8 md:grid-cols-[1.3fr_0.8fr_0.8fr_1.2fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="brand-pill bg-blue-500/10 text-blue-200">N</span>
              <h3 className="text-lg font-semibold text-white">Northbridge Systems</h3>
            </div>
            <p className="max-w-xs text-sm leading-6 text-slate-300">
              Practical technology solutions for growing businesses.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white">
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/resources" className="hover:text-white">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>Manchester, United Kingdom</li>
              <li>
                <a href="mailto:hello@paleon-lab-clean.com" className="hover:text-white">
                  hello@paleon-lab-clean.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          &copy; {currentYear} Northbridge Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
