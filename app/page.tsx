import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Technology that keeps your business moving
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Northbridge Systems helps UK businesses with practical technology,
              infrastructure and digital solutions that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Explore our services
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-medium border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What we do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reliable technology services tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "IT Support",
                description:
                  "Responsive technical support when you need it, from helpdesk to infrastructure troubleshooting.",
              },
              {
                title: "Cloud Solutions",
                description:
                  "Modern cloud infrastructure that scales with your business, managed end-to-end.",
              },
              {
                title: "Infrastructure Management",
                description:
                  "Reliable networks, servers, and systems that keep your business running smoothly.",
              },
              {
                title: "Software Integration",
                description:
                  "Connect your business systems and streamline workflows with practical integration solutions.",
              },
              {
                title: "Technical Consultancy",
                description:
                  "Strategic technology guidance to help you make informed decisions about your IT.",
              },
              {
                title: "Security & Compliance",
                description:
                  "Protect your business with robust security measures and compliance support.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Northbridge */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Northbridge Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Practical Approach",
                description:
                  "We focus on solutions that work for your business, not trends that don't.",
              },
              {
                title: "Reliable Support",
                description:
                  "When you need help, we're there. Responsive, knowledgeable support you can count on.",
              },
              {
                title: "Business-Focused",
                description:
                  "Technology should serve your business goals, not the other way around.",
              },
              {
                title: "Long-Term Partnerships",
                description:
                  "We're here for the long haul, growing alongside your business.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Highlight */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Latest Resources
            </h2>
            <p className="text-lg text-gray-600">
              Practical guidance for managing technology in your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Preparing Your Business for Cloud Migration",
                excerpt:
                  "Key considerations and steps for a successful move to the cloud.",
              },
              {
                title: "Five Things to Consider When Replacing Legacy Systems",
                excerpt:
                  "Essential planning points for modernizing your business technology.",
              },
              {
                title: "Improving Business Efficiency Through Automation",
                excerpt:
                  "How automation can reduce manual work and improve accuracy.",
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">{resource.excerpt}</p>
                <Link
                  href="/resources"
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/resources"
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              View all resources →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Contact us today
          </Link>
        </div>
      </section>
    </div>
  );
}
