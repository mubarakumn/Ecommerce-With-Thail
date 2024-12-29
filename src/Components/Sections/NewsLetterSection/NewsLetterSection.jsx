import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';

export default function NewsLetterSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight text-black">Subscribe to our newsletter</h2>
            <p className="mt-4 text-lg text-gray-500">
              Get exclusive weekly articles, updates, and no spam—guaranteed.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="flex-auto rounded-md border-0 bg-black/10 px-4 py-2 text-gray-950 shadow-sm ring-1 ring-inset ring-gray/20 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-full bg-black/10 p-3 ring-1 ring-black/20">
                <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-green-700" />
              </div>
              <dt className="mt-4 text-lg font-semibold text-black">Weekly articles</dt>
              <dd className="mt-2 text-base text-gray-500">
                Quality insights and tips every week to help you stay ahead.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-full bg-black/10 p-3 ring-1 ring-black/20">
                <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-green-700" />
              </div>
              <dt className="mt-4 text-lg font-semibold text-black">No spam</dt>
              <dd className="mt-2 text-base text-gray-500">
                We respect your privacy and won’t flood your inbox.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-10">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#80ffbd] to-[#bffc89] opacity-30"
        />
      </div>
    </div>
  );
}
