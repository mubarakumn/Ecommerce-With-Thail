import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useNavigate } from "react-router-dom"



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductQuickView({ open, close, quickViewData }) {
  const product = quickViewData
  const [selectedColor, setSelectedColor] = useState(product?.colors[0])

  const navigate = useNavigate()

  return (
    <Dialog open={open} onClose={close} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:block"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <DialogPanel
            transition
            className="flex w-full transform text-left text-base transition data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:my-8 md:max-w-2xl md:px-4 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95 lg:max-w-4xl"
          >
            <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button
                type="button"
                onClick={() => close()}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>

              <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                  <img alt={product.imageAlt} src={product.imageSrc} className="object-cover object-center" />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                  <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>
                  <p>{product.description}</p>
                  <section aria-labelledby="information-heading" className="mt-2">
                    <h3 id="information-heading" className="sr-only">
                      Product information
                    </h3>

                    {/* Price */}
                    <div className='flex mt-2 justify-start items-center gap-2 '>
                      <div className='flex gap-2 '>
                        <p className="mt-1 text-lg font-semibold text-green-600">&#8358;{product.price}</p>
                        <sup>
                          <del className="mt-1 text-xs  font-semibold text-stone-600">&#8358;{product.price}</del>
                        </sup>
                      </div>
                      <span className='text-[10px] text-red-800 font-semibold px-[2px] rounded h-fit bg-red-200 ml-5'>-{product.discount}% off</span>
                    </div>

                    {/* Reviews */}
                    <div className="mt-6">
                      <h4 className="sr-only">Reviews</h4>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              aria-hidden="true"
                              className={classNames(
                                product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                'h-5 w-5 shrink-0',
                              )}
                            />
                          ))}
                        </div>
                        <p className="sr-only">{product.rating} out of 5 stars</p>
                        <a href="#" className="ml-3 text-sm font-medium text-green-600 hover:text-green-500">
                          {product?.reviewCount} reviews
                        </a>
                      </div>
                    </div>
                  </section>

                  <section aria-labelledby="options-heading" className="mt-10">
                    <h3 id="options-heading" className="sr-only">
                      Product options
                    </h3>

                    <form>
                      {/* Colors */}
                      <fieldset aria-label="Choose a color">
                        <legend className="text-sm font-medium text-gray-900">Color</legend>

                        <RadioGroup
                          value={selectedColor}
                          onChange={setSelectedColor}
                          className="mt-4 flex items-center space-x-3"
                        >
                          {product?.colors.map((color) => (
                            <Radio
                              key={color.name}
                              value={color}
                              aria-label={color.name}
                              className={classNames(
                                color.selectedClass,
                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                              )}
                            >
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  color.class,
                                  'h-8 w-8 rounded-full border border-black border-opacity-10',
                                )}
                              />
                            </Radio>
                          ))}
                        </RadioGroup>
                      </fieldset>

                      {/* Goto Product page  */}
                      <a  onClick={() => navigate("/productpage", { state: { product } })}
                        className='text-sm font-medium cursor-pointer underline underline-offset-2 hover:text-green-700'
                        >more details...</a>
                     
                      {/* Buy Button */}
                      <div className="flex flex-row gap-1 justify-between mt-6">
                        <button
                          type="button"
                          className="w-full sm1/2 s text-xs 
                    sm:text-sm rounded-md bg-black dark:bg-stone-100 py-2 text-white dark:text-black
                    font-bold shadow-md hover:bg-stone-900 dark:hover:bg-stone-400 focus:outline-none
                    focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                          Buy now
                        </button>
                        <div className='flex w-2/3 flex-col items-center dark:text-white'>
                          <ShoppingBagIcon
                            onClick={() => alert("added to cart")}
                            className='w-4 font-semibold' />
                          <span className='text-[8px]'>Add to cart</span>
                        </div>
                      </div>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}