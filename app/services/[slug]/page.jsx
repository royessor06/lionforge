import ServiceDetailClient from "./ServiceDetailClient";

export async function generateStaticParams() {
  const services = [
    { slug: "web-development" },
    { slug: "mobile-apps" },
    { slug: "custom-solutions" },
    { slug: "maintenance" },
  ];

  return services.map((service) => ({ slug: service.slug }));
}

export default function Page({ params }) {
  return <ServiceDetailClient slug={params.slug} />;
}