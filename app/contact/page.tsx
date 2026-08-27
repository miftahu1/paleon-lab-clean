import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Northbridge Systems",
  description: "Get in touch with Northbridge Systems to discuss your technology needs.",
};

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600">
            Let&apos;s discuss how we can help with your technology needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@paleon-lab-clean.com"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    hello@paleon-lab-clean.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-600">+44 161 850 4200</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    Northbridge Systems
                    <br />
                    Manchester
                    <br />
                    United Kingdom
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Business Hours
                  </h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:30 PM
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form Alternative */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                How We Can Help
              </h2>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-6">
                  We work with businesses across the UK on a range of technology challenges. Whether you need ongoing IT support, help with a specific project, or strategic technology advice, we&apos;d be happy to discuss your needs.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      For general enquiries
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Email us at{" "}
                      <a
                        href="mailto:hello@paleon-lab-clean.com"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        hello@paleon-lab-clean.com
                      </a>{" "}
                      with a brief description of what you&apos;re looking for and we&apos;ll get back to you within one business day.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      For urgent support issues
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Existing clients can call our support line directly at +44 161 850 4200.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      For new business enquiries
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We&apos;re always interested in speaking with businesses that could benefit from our services. Get in touch and we&apos;ll arrange an initial call to understand your needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="mailto:hello@paleon-lab-clean.com"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors w-full text-center"
                >
                  Send us an email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Initial Contact
              </h3>
              <p className="text-gray-600 text-sm">
                Get in touch via email or phone. We&apos;ll respond within one business day.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Discovery Call
              </h3>
              <p className="text-gray-600 text-sm">
                We&apos;ll arrange a call to understand your needs and determine if we&apos;re a good fit.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Proposal
              </h3>
              <p className="text-gray-600 text-sm">
                If appropriate, we&apos;ll provide a clear proposal outlining how we can help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
