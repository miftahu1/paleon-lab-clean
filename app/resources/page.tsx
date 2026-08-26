import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Northbridge Systems",
  description: "Practical guidance and insights for managing technology in your business.",
};

export default function Resources() {
  const articles = [
    {
      title: "Preparing Your Business for Cloud Migration",
      date: "July 2026",
      excerpt:
        "Moving to the cloud can bring significant benefits, but successful migration requires careful planning. Here are the key considerations to ensure a smooth transition.",
      content: [
        "Cloud migration is a significant step for any business. Done well, it can reduce costs, improve flexibility, and enable new capabilities. Done poorly, it can disrupt operations and fail to deliver expected benefits.",
        "Before migrating, assess your current infrastructure and applications. Not everything needs to move to the cloud immediately, and some workloads may be better suited to on-premises infrastructure. Start with a clear inventory of what you have and what business outcomes you're trying to achieve.",
        "Choose the right migration strategy for each workload. Some applications can simply be rehosted (lift and shift), while others may benefit from refactoring to take advantage of cloud-native features. Consider the tradeoffs between speed, cost, and long-term benefits.",
        "Plan for data migration carefully. Data transfer can be time-consuming and complex, especially for large datasets. Consider bandwidth limitations, data security requirements, and the need to keep systems operational during migration.",
        "Don't forget about security and compliance. Ensure you understand your responsibilities in a shared security model and configure appropriate access controls, encryption, and monitoring from the start.",
        "Finally, plan for ongoing cloud management and cost optimization. Cloud costs can grow quickly if not monitored, so establish processes for regular review and optimization of your cloud resources.",
      ],
    },
    {
      title: "Five Things to Consider When Replacing Legacy Systems",
      date: "June 2026",
      excerpt:
        "Legacy system replacement is a complex undertaking that affects multiple parts of your business. These essential planning points will help you avoid common pitfalls.",
      content: [
        "Replacing a legacy system that's been running your business for years is never simple. These systems often contain decades of business logic and institutional knowledge that isn't always well documented.",
        "First, document what the current system actually does. This seems obvious, but many businesses discover critical functionality only when it stops working. Talk to everyone who uses the system and map out all the processes it supports.",
        "Second, plan your data migration strategy early. Legacy systems often have complex, denormalized data structures that don't map cleanly to modern applications. Data cleansing and transformation can take longer than the actual system implementation.",
        "Third, consider the integration implications. Your legacy system likely connects to other business systems. Understand these dependencies and plan how they'll work with the replacement system.",
        "Fourth, manage the organizational change. People have been using the old system for years and will need training and support. Some will resist the change. Plan for adequate training and have a clear communication strategy.",
        "Finally, phase the transition where possible. A big-bang cutover is risky. If you can run systems in parallel or migrate in stages, you'll reduce risk and give users time to adapt.",
      ],
    },
    {
      title: "Improving Business Efficiency Through Automation",
      date: "May 2026",
      excerpt:
        "Automation can reduce manual work, improve accuracy, and free your team to focus on higher-value activities. Here's how to identify and implement valuable automation opportunities.",
      content: [
        "Every business has repetitive manual tasks that consume time without adding much value. Automation can eliminate these tasks, reduce errors, and let your team focus on work that requires human judgment and creativity.",
        "Start by identifying high-volume, repetitive tasks. Look for processes where people are copying data between systems, performing calculations, generating reports, or sending routine notifications. These are often good automation candidates.",
        "Prioritize based on impact and feasibility. A task that takes 30 minutes daily and is straightforward to automate will deliver more value than a complex monthly process. Look for quick wins that build momentum.",
        "Consider workflow automation tools rather than custom development for common business processes. Modern workflow automation platforms can connect different systems and automate multi-step processes without writing code.",
        "Document and standardize processes before automating them. Automation makes processes faster but doesn't fix broken processes. Make sure the process works well manually before committing to automation.",
        "Monitor automated processes and have fallback plans. Automation failures can be more disruptive than manual process delays because they often fail silently. Build in monitoring, alerts, and clear procedures for when automation fails.",
      ],
    },
    {
      title: "Understanding Your Business Continuity Requirements",
      date: "April 2026",
      excerpt:
        "How quickly do you need to recover from a technology failure? Understanding your business continuity requirements helps you make informed decisions about backup and disaster recovery.",
      content: [
        "Business continuity planning isn't just about having backups. It's about understanding how long your business can operate without specific systems and what data loss is acceptable.",
        "Start by identifying critical business systems. Not all systems are equally important. Your customer database might be critical while your internal wiki can be down for a day without significant impact.",
        "Define your Recovery Time Objective (RTO) and Recovery Point Objective (RPO) for each critical system. RTO is how quickly you need the system back. RPO is how much data loss you can accept. These requirements drive your technology choices.",
        "Consider the full scope of recovery. Getting a server back online is one thing. Restoring all data, reconnecting integrations, and getting users back to work is another. Your plan should cover the complete recovery process.",
        "Test your recovery procedures regularly. Untested backups are worse than no backups because they give you false confidence. Schedule regular recovery tests and document what works and what doesn't.",
        "Remember that business continuity isn't just a technology problem. Have clear communication plans, decision-making authority, and documented procedures that people can follow during an incident.",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Resources
          </h1>
          <p className="text-xl text-gray-600">
            Practical guidance for managing technology in your business.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {articles.map((article, index) => (
              <article
                key={index}
                className="border-b border-gray-200 last:border-b-0 pb-12 last:pb-0"
              >
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h2>
                  <p className="text-lg text-gray-600">{article.excerpt}</p>
                </div>

                <div className="prose prose-gray max-w-none">
                  {article.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-600 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need specific advice for your business?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get in touch to discuss your technology challenges.
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
