import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Northbridge Systems",
  description: "IT support, cloud solutions, infrastructure management, software integration, and technical consultancy services for UK businesses.",
};

export default function Services() {
  const services = [
    {
      title: "Business IT Support",
      description:
        "Responsive technical support for your day-to-day IT needs, from user issues to infrastructure troubleshooting.",
      features: [
        "Helpdesk and user support",
        "Infrastructure troubleshooting",
        "System maintenance and updates",
        "Proactive monitoring and alerts",
      ],
      useCase:
        "For businesses that need reliable technical support without maintaining a full in-house IT team.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Modern cloud infrastructure that scales with your business, from initial migration to ongoing management.",
      features: [
        "Cloud migration planning and execution",
        "Infrastructure design and deployment",
        "Cost optimization and monitoring",
        "Backup and disaster recovery",
      ],
      useCase:
        "For businesses looking to move to the cloud or optimize their existing cloud infrastructure.",
    },
    {
      title: "Infrastructure Management",
      description:
        "Keep your networks, servers, and systems running smoothly with proactive management and maintenance.",
      features: [
        "Network design and management",
        "Server administration and maintenance",
        "Performance monitoring and optimization",
        "Security patching and updates",
      ],
      useCase:
        "For businesses that need their infrastructure managed professionally without hiring dedicated staff.",
    },
    {
      title: "Software Integration",
      description:
        "Connect your business systems and streamline workflows with practical integration solutions.",
      features: [
        "System integration planning",
        "API development and integration",
        "Data synchronization and migration",
        "Workflow automation",
      ],
      useCase:
        "For businesses using multiple systems that need to work together more effectively.",
    },
    {
      title: "Technical Consultancy",
      description:
        "Strategic technology guidance to help you make informed decisions about your IT investments.",
      features: [
        "Technology strategy and planning",
        "System architecture and design",
        "Vendor selection and evaluation",
        "Project planning and oversight",
      ],
      useCase:
        "For businesses planning significant technology changes or looking for independent technical advice.",
    },
    {
      title: "Security & Compliance",
      description:
        "Protect your business with robust security measures and compliance support.",
      features: [
        "Security assessments and audits",
        "Compliance guidance and implementation",
        "Security policy development",
        "Incident response planning",
      ],
      useCase:
        "For businesses that need to improve their security posture or meet specific compliance requirements.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive technology services designed to keep your business running smoothly.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0 pb-16 last:pb-0"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      What's included
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Who it's for
                    </h3>
                    <p className="text-gray-600">{service.useCase}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need help with your technology?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss which services are right for your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
}
