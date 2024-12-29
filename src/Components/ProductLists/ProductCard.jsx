import { EyeIcon, ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ProductCard = ({ product, QuickView }) => {
    const navigate = useNavigate()
    const [Ishovered, setIshovered] = useState(false)
       

    return (
    <div
        key={product.id}
        className="group rounded-md dark:border-gray-950
             hover:bg-white dark:hover:bg-black 
            dark:shadow-lg shadow-white hover:shadow-lg
            transition-transform duration-200 
            max-md:w-[200px] h-[370px] lg:w-[210px] mb-0
            "
    >
        {/* image Section */}
        <div
        onMouseEnter={()=> setIshovered(true)}
        onMouseLeave={()=> setIshovered(false)}
         onClick={() => QuickView(product)}
         className="relative"
         >
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg p-2">
                <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="img h-[190px] w-full object-cover object-center 
                    transition-transform duration-200"
                />
            </div>
            <div className={`${!Ishovered ? "hidden" : "flex"}  flex-col  absolute
                top-0 left-0 h-full w-full bg-black/25 p-1 rounded-lg text-black items-center justify-center`}>
                <EyeIcon className='w- text-white size-8' />
                <span className='sr-nly text-[8px] text-white'>Preview Product</span>
            </div>
        </div>

        <div onClick={() => navigate("/productpage", { state: { product } })}
            className="p-2 cursor-pointer">
            <h3 className="text-sm font-medium text-gray-900
                dark:text-gray-100 truncate">{product.name}</h3>
            <p className="text-xs text-gray-500 truncate">{product.description}</p>

            {/* Price */}
            <div className='flex mt-2 justify-around items-center gap-2'>
                <p className="mt-1 text-lg font-semibold text-green-600">&#8358;{product.price}</p>
                <sup>
                    <del className="mt-1 text-xs  font-semibold text-stone-600">&#8358;{product.price}</del>
                </sup>
                <span className='text-[10px] text-red-800 font-semibold px-[2px] rounded h-fit bg-red-200 '>
                -{product.discount}% OFF
                    </span>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center mt-1">
                {[...Array(5)].map((_, index) => (
                    <StarIcon
                        key={index}
                        className={`h-4 w-4 ${index < product.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                    />
                ))}
                <p className='text-[10px] ml-2'>
                    ({product.reviewCount} reviews)
                </p>
            </div>

            {/* Buy Button */}
            <div className="hidden group-hover:flex flex-row gap-1 justify-between mt-3">
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
        </div>
    </div>
    )
}

export default ProductCard