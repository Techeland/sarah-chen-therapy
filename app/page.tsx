export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-spacing bg-cream-200">
        <div className="container-custom">
          <h1 className="text-sage-600">Sarah Chen Therapy</h1>
          <p className="mt-4 text-charcoal-700">
            Compassionate trauma therapy in Bristol
          </p>
          <button className="btn-primary mt-6">Book Free Consultation</button>
          <button className="btn-secondary mt-6 ml-4">Learn More</button>
        </div>
      </section>

      {/* Test Card */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="card">
            <h3>Individual Therapy</h3>
            <p className="mt-2">Safe, confidential space to process trauma</p>
          </div>
        </div>
      </section>
    </main>
  );
}
