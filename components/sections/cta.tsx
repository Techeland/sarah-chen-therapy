import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="relative section-spacing bg-linear-to-br from-sage-600 to-sage-700 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-800 rounded-full blur-3xl opacity-20"></div>

      <div className="container-custom text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-white">Ready to Start Your Healing Journey?</h2>
          <p className="mt-6 text-lg text-sage-50">
            Book a free 15-minute consultation to see if we're a good fit. No
            pressure, no obligation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button
              size="lg"
              className="bg-white text-sage-600 hover:bg-cream-100 shadow-lg hover:shadow-xl transition-all"
            >
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-sage-600 hover:bg-white/10"
            >
              Learn More About My Approach
            </Button>
          </div>

          <p className="mt-8 text-sm text-sage-200">
            ✓ Free 15-minute call ✓ No obligation ✓ Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};
