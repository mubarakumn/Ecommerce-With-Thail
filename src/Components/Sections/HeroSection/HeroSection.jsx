import img from "../../../assets/hero.png"
export default function HeroSection() {

  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="relative isolate flex-col md:flex lg:flex-row px-6 pt-6 max-sm:p-4 lg:px-8">
        <div className="mx-auto max-w-2xl py-12 sm:py-24 lg:py-20 lg:mr-8">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 dark:text-gray-50 ring-1 ring-gray-900/10 dark:ring-stone-50 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '} 
              <a href="#" className="font-semibold text-green-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl">
             Discover the Best Products Online
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Shop our curated selection of quality items and enjoy exclusive deals every day.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
             <a
              href="#products"
              className="inline-block rounded-sm bg-green-600 px-4 py-2 text-base font-semibold text-white shadow-lg hover:bg-green-500"
            >
              Shop Now
            </a>
              <a href="#" className="text-sm/6 font-semibold py-2 px-4 rounded border-y-2 border-stone-100 hover:border-stone-200 text-gray-900 dark:text-gray-50">
                Learn more <span aria-hidden="true">→</span>
              </a>

            </div>
          </div>
        </div>
        <img src={img} alt="" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -transtone-x-1/2 bg-gradient-to-tr from-[#80ffbd] to-[#bffc89] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}
