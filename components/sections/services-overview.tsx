import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const services = [
  {
    title: "Individual Trauma Therapy",
    description:
      "50-minute sessions focused on your healing journey. We'll work together at your pace to process trauma and build resilience.",
    price: "£95",
    href: "/services#individual-therapy",
  },
  {
    title: "EMDR Therapy",
    description:
      "Eye Movement Desensitization and Reprocessing - a proven approach for trauma, PTSD, and distressing memories.",
    price: "£95",
    href: "/services#emdr-therapy",
  },
  {
    title: "Free Initial Consultation",
    description:
      "Not sure if therapy is right for you? Book a free 15-minute call to discuss your needs and how I can help.",
    price: "Free",
    href: "/book",
  },
];

export const ServicesOverview = () => {
  return (
    <section className="section-spacing bg-white relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cream-100 rounded-full blur-3xl opacity-40"></div>

      <div className="container-custom relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          {/* Add a label above heading */}
          <p className="text-sm font-semibold text-sage-600 tracking-wide uppercase mb-3">
            Services
          </p>
          <h2>How I Can Help</h2>
          <p className="mt-4 text-charcoal-700 text-lg">
            Evidence-based trauma therapy in a warm, non-judgmental space
          </p>
          {/* Decorative line */}
          <div className="w-16 h-1 bg-sage-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-cream-300 hover:shadow-lg hover:border-sage-300 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center mb-4 group-hover:bg-sage-200 transition-colors">
                  <div className="w-6 h-6 bg-sage-500 rounded-full"></div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sage-600 font-semibold text-lg">
                  {service.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal-700 mb-6">{service.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-sage-500 text-sage-600 hover:bg-sage-50"
                >
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
