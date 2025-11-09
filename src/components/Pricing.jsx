export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Start free, upgrade when you grow. No hidden fees.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-sm font-semibold text-gray-900">Starter</h3>
            <p className="mt-1 text-3xl font-bold text-gray-900">$0<span className="text-base font-medium text-gray-500">/mo</span></p>
            <p className="mt-2 text-sm text-gray-600">Perfect for getting started.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>Up to 10 clients</li>
              <li>Basic automations</li>
              <li>Scheduling & reminders</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black">Get started</a>
          </div>

          <div className="rounded-2xl border-2 border-blue-600 bg-white p-6 relative">
            <span className="absolute -top-3 right-4 rounded-full bg-blue-600 px-2 py-1 text-xs font-semibold text-white">Popular</span>
            <h3 className="text-sm font-semibold text-gray-900">Pro</h3>
            <p className="mt-1 text-3xl font-bold text-gray-900">$39<span className="text-base font-medium text-gray-500">/mo</span></p>
            <p className="mt-2 text-sm text-gray-600">For growing coaches and studios.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>Unlimited clients</li>
              <li>Advanced automations</li>
              <li>Contracts & payments</li>
              <li>Priority support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Start free trial</a>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-sm font-semibold text-gray-900">Business</h3>
            <p className="mt-1 text-3xl font-bold text-gray-900">$99<span className="text-base font-medium text-gray-500">/mo</span></p>
            <p className="mt-2 text-sm text-gray-600">For teams and multi-location gyms.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>Team permissions</li>
              <li>Custom workflows</li>
              <li>API access</li>
              <li>Dedicated success manager</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
