import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative section-spacing overflow-hidden">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-cream-100 via-cream-200 to-sage-50"></div>

      {/* Decorative blob shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-300 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cream-400 rounded-full blur-3xl opacity-50"></div>

      <div className="container-custom relative z-10">
        {/* FIXED: Grid wrapper around BOTH columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN: Text content */}
          <div>
            <h1 className="text-sage-600">
              Compassionate Trauma Therapy in Bristol
            </h1>
            <p className="mt-6 text-charcoal-700 text-lg">
              BACP-registered therapist specialising in PTSD, childhood trauma
              and anxiety. Book your free 15-minute consultation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="bg-sage-500 hover:bg-sage-600">
                Book Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sage-500 text-sage-600 hover:bg-sage-50"
              >
                Learn More
              </Button>
            </div>

            <p className="mt-6 text-sm text-charcoal-600">
              Free • No pressure • Reply within 24 hours
            </p>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="relative h-96 lg:h-full min-h-100 rounded-2xl overflow-hidden ring-1 ring-sage-200 shadow-2xl">
            <Image
              src="/images/sarah-hero.jpg"
              alt="Sarah Chen, Trauma Therapist"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
