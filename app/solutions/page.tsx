import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Northbridge Systems",
  description: "Business technology solutions for infrastructure, cloud, applications, data reporting, and managed support.",
};

export default function Solutions() {
  const solutions = [
    {
      title: "Infrastructure Solutions",
      description:
        "Build and maintain reliable infrastructure that supports your business operations.",
      benefits: [
        "Reduced downtime and improved reliability",
        "Scalable infrastructure that grows with you",
        "Professional management without the overhead",
        "Proactive monitoring and maintenance",
      ],
      examples: [
        "Network infrastructure design and deployment",
        "Server consolidation and virtualization",
        "Infrastructure monitoring and management",
        "Performance optimization",
      ],
    },
    {
      title: "Cloud Solutions",
      description:
        "Move to the cloud or optimize your existing cloud infrastructure for better performance and cost efficiency.",
      benefits: [
        "Lower capital costs and predictable expenses",
        "Flexibility to scale up or down as needed",
        "Access to modern cloud services",
        "Improved disaster recovery capabilities",
      ],
      examples: [
        "Cloud migration strategy and execution",
        "Multi-cloud and hybrid cloud architecture",
        "Cloud cost optimization",
        "Cloud security and compliance",
      ],
    },
    {
      title: "Business Application Solutions",
      description:
        "Implement, integrate, and support the business applications that keep your company running.",
      benefits: [
        "Streamlined business processes",
        "Better data visibility and reporting",
        "Reduced manual work and errors",
        "Improved collaboration",
      ],
      examples: [
        "Business application selection and implementation",
        "System integration and data migration",
        "Custom workflow automation",
        "Application support and optimization",
      ],
    },
    {
      title: "Data & Reporting Solutions",
      description:
        "Turn your business data into actionable insights with proper data management and reporting.",
      benefits: [
        "Better visibility into business performance",
        "Data-driven decision making",
        "Reduced time spent on manual reporting",
        "Consistent and reliable data",
      ],
      examples: [
        "Data warehouse design and implementation",
        "Business intelligence and reporting",
        "Data integration and ETL processes",
        "Dashboard development",
      ],
    },
    {
      title: "Managed Support Solutions",
      description:
        "Comprehensive managed services that take the burden of IT management off your shoulders.",
      benefits: [
        "Predictable IT costs",
        "Access to a full team of specialists",
        "Proactive rather than reactive support",
        "Focus on your business, not your IT",
      ],
      examples: [
        "Fully managed IT services",
        "24/7 infrastructure monitoring",
        "Help desk and user support",
        "Strategic IT planning and roadmapping",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Business Solutions
          </h1>
          <p className="text-xl text-gray-600">
            Practical technology solutions designed around common business needs and challenges.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white">
                <div className="border-l-4 border-blue-600 pl-6 mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {solution.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Benefits
                    </h3>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
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
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Examples
                    </h3>
                    <ul className="space-y-2">
                      {solution.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-600">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How we work with you
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Understand
              </h3>
              <p className="text-gray-600">
                We learn about your business, challenges, and objectives.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Recommend
              </h3>
              <p className="text-gray-600">
                We propose practical solutions tailored to your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Deliver
              </h3>
              <p className="text-gray-600">
                We implement and support solutions that work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to discuss your needs?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let&apos;s explore how these solutions can help your business.
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
