import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Northbridge Systems",
  description: "Learn about Northbridge Systems and our approach to practical technology solutions for UK businesses.",
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Northbridge Systems
          </h1>
          <p className="text-xl text-gray-600">
            We&apos;re a UK-based technology partner helping businesses make the most of their IT infrastructure.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Who we are
          </h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              Northbridge Systems was established to provide practical, reliable technology solutions for growing businesses across the United Kingdom. We work with companies that need their technology to simply work, without unnecessary complexity or jargon.
            </p>
            <p>
              Based in Manchester, we serve businesses throughout the UK with a focus on building long-term partnerships. Our approach is straightforward: understand your business needs, recommend appropriate solutions, and deliver reliable support.
            </p>
            <p>
              We&apos;re not here to sell you the latest trends. We&apos;re here to ensure your technology infrastructure supports your business goals, whether that means maintaining existing systems, migrating to the cloud, or planning for growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our mission
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            To provide practical, reliable technology solutions that help UK businesses operate efficiently and grow with confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Practical Solutions",
                description: "Technology that solves real business problems, not theoretical ones.",
              },
              {
                title: "Reliable Service",
                description: "Consistent, responsive support you can depend on.",
              },
              {
                title: "Long-Term Thinking",
                description: "Solutions designed to grow with your business.",
              },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our approach
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Listen First
              </h3>
              <p className="text-gray-600">
                We start by understanding your business, not by pitching products. Every business is different, and your technology should reflect that.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Recommend Honestly
              </h3>
              <p className="text-gray-600">
                We&apos;ll tell you what you need, not what&apos;s most profitable for us. If your existing systems work, we&apos;ll help you optimize them. If you need to upgrade, we&apos;ll explain why.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Deliver Reliably
              </h3>
              <p className="text-gray-600">
                We do what we say we&apos;ll do, when we say we&apos;ll do it. Clear communication, realistic timelines, and dependable execution.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Support Continuously
              </h3>
              <p className="text-gray-600">
                Technology doesn&apos;t stop needing attention once it&apos;s deployed. We provide ongoing support to keep your systems running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our team
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team brings together experienced engineers, consultants, and support specialists who understand both technology and business. We&apos;ve worked across industries including finance, retail, manufacturing, and professional services.
          </p>
          <p className="text-lg text-gray-600">
            What unites us is a commitment to practical problem-solving and a genuine interest in helping businesses succeed through better technology management.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to learn more?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get in touch to discuss how we can support your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Contact us
          </a>
        </div>
      </section>
    </div>
  );
}
