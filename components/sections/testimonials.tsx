import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Sarah created a space where I finally felt safe enough to address my trauma. Her warmth and expertise changed my life.",
    author: "Rachel M.",
  },
  {
    quote:
      "After years of struggling with PTSD, EMDR therapy with Sarah gave me my life back. I can't recommend her highly enough.",
    author: "James T.",
  },
  {
    quote:
      "Sarah's compassionate approach helped me understand and heal from childhood trauma I'd carried for decades. I'm forever grateful.",
    author: "Linda K.",
  },
];

export const Testimonials = () => {
  return (
    <section className="section-spacing bg-linear-to-b from-cream-200 to-cream-100">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-sage-600 tracking-wide uppercase mb-3">
            Testimonials
          </p>
          <h2>What Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border-none shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="pt-8 pb-6">
                {/* Quote mark */}
                <div className="text-5xl text-sage-200 font-serif leading-none mb-4">
                  "
                </div>

                <p className="text-charcoal-700 mb-6 relative">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-3 mt-6">
                  {/* Placeholder avatar circle */}
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-sage-400 to-sage-600 flex items-center justify-center text-white font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <p className="text-sm font-semibold text-charcoal-800">
                    {testimonial.author}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
