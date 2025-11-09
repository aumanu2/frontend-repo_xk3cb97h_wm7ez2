export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white" />
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full blur-3xl opacity-40 bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              The CRM built for fitness professionals
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Manage clients, automate check-ins, track progress, and grow your business—all in one modern, easy-to-use platform.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Start free trial
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                See features
              </a>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
              {[
                "Unlimited clients",
                "Automated check-ins",
                "Contracts & payments",
                "Progress tracking",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  {/* Check icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-lg rounded-xl border border-gray-200 bg-white/70 backdrop-blur shadow-xl">
              <div className="p-4 border-b border-gray-200 flex items-center gap-2 text-xs text-gray-500">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-2">Client overview</span>
              </div>
              <div className="p-6 grid gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Active clients</p>
                    <p className="text-2xl font-semibold text-gray-900">128</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">This month</p>
                    <p className="text-2xl font-semibold text-emerald-600">+18</p>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-sm font-medium text-gray-900">Today’s check-ins</p>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center text-sm">
                    <div className="rounded-md bg-emerald-50 text-emerald-700 py-2">Done</div>
                    <div className="rounded-md bg-yellow-50 text-yellow-700 py-2">Pending</div>
                    <div className="rounded-md bg-red-50 text-red-700 py-2">Overdue</div>
                  </div>
                </div>
                <div className="rounded-lg border border-dashed border-gray-300 p-4 text-center text-gray-500 text-sm">
                  Attach programs, meal plans, and progress photos.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
