import ServiceDetailClient from "./ServiceDetailClient";
import { services } from "@/app/data/content";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ServiceDetailClient slug={slug} />;
}
