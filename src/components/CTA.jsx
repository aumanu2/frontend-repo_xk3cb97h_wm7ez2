export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Turn your passion into a thriving business</h2>
        <p className="mt-3 text-blue-100 max-w-2xl mx-auto">
          Join thousands of fitness professionals who manage clients, programs, and payments in one place.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-700 hover:bg-blue-50">Start free</a>
          <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-base font-semibold text-white/90 hover:bg-white/10">Learn more</a>
        </div>
      </div>
    </section>
  );
}
