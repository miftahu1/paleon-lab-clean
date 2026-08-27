import Link from "next/link";

export default function Home() {
  const services = [
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
  ];

  const strengths = [
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
  ];

  const resources = [
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
  ];

  return (
    <div className="site-shell bg-transparent">
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.18),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <h1 className="text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-6xl">
            Technology that keeps your business moving
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Northbridge Systems helps UK businesses with practical technology,
            infrastructure and digital solutions that work.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(31,94,255,0.26)] hover:bg-blue-700 hover:shadow-[0_12px_35px_rgba(31,94,255,0.32)]"
            >
              Explore our services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-blue-700 shadow-sm hover:border-blue-200 hover:bg-blue-50"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="hero-stat rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
              <strong>UK</strong>
              <span>Based support</span>
            </div>
            <div className="hero-stat rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
              <strong>24/7</strong>
              <span>Business continuity</span>
            </div>
            <div className="hero-stat rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
              <strong>Clear</strong>
              <span>Practical advice</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="section-kicker mb-5">What we do</div>
            <h2 className="section-heading">Reliable technology services tailored to your business</h2>
            <p className="section-subheading mx-auto mt-5">
              Reliable technology services tailored to your business needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="site-card group p-6 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-base font-bold text-blue-700">
                  0{index + 1}
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-[-0.03em] text-slate-900">
                  {service.title}
                </h3>
                <p className="text-base leading-7 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-base font-semibold text-blue-700 hover:text-blue-800"
            >
              View all services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50/80 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="section-kicker mb-5">Why Northbridge</div>
            <h2 className="section-heading">A straightforward approach to technology</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {strengths.map((item, index) => (
              <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-lg font-bold text-blue-700">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-base leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="section-kicker mb-5">Latest resources</div>
            <h2 className="section-heading">Practical guidance for managing technology in your business</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((resource, index) => (
              <article
                key={index}
                className="site-card flex h-full flex-col p-6 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="mb-5 inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Insight
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-[-0.03em] text-slate-900">
                  {resource.title}
                </h3>
                <p className="mb-5 text-base leading-7 text-slate-600">{resource.excerpt}</p>
                <Link href="/resources" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800">
                  Read more <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-base font-semibold text-blue-700 hover:text-blue-800"
            >
              View all resources <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-8 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 p-8 text-center text-white shadow-[0_25px_50px_rgba(37,99,235,0.28)] sm:p-12 lg:p-16">
            <div className="mx-auto max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-50">
                Let’s talk
              </div>
              <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-4 text-lg text-blue-50 sm:text-xl">
                Let’s discuss how we can help your business.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-blue-700 shadow-lg hover:bg-slate-100"
                >
                  Contact us today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
