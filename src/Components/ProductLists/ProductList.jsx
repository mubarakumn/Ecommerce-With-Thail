import ProductQuickView from './ProductQuickView';
import { useState } from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '/productpage',
    price: '4800',
    discount: 10,
    discountedPrice: 4738,
    imageSrc: 'https://imageplaceholder.net/650x600',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    description: 'A beautifully crafted earthen bottle made from natural materials.',
    rating: 1,
    reviewCount: 30,
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
  },
  {
    id: 2,
    name: 'Earthen Bottle',
    href: '/productpage',
    price: '4800',
    discount: 10,
    discountedPrice: 4738,
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    description: 'A beautifully crafted earthen bottle made from natural materials.',
    rating: 3,
    reviewCount: 9,
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
  },
  {
    id: 3,
    name: 'Nomad Tumbler',
    href: '/productpage',
    price: '3500',
    discount: 10,
    discountedPrice: 4738,
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    description: 'Stay hydrated with this durable, eco-friendly tumbler.',
    rating: 5,
    reviewCount: 55,
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
  },
  {
    id: 4,
    name: 'Earthen Bottle',
    href: '/productpage',
    price: '4800',
    discount: 10,
    discountedPrice: 4738,
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    description: 'A beautifully crafted earthen bottle made from natural materials.',
    rating: 4,
    reviewCount: 27,
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
  },
  {
    id: 5,
    name: 'Nomad Tumbler',
    href: '/productpage',
    price: '3500',
    discount: 10,
    discountedPrice: 4738,
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    description: 'Stay hydrated with this durable, eco-friendly tumbler.',
    rating: 5,
    reviewCount: 100,
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
  },
  {
    id: 6,
    name: 'Earthen Bottle',
    href: '/productpage',
    price: '4800',
    discount: 10,
    discountedPrice: 4738,
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    description: 'A beautifully crafted earthen bottle made from natural materials.',
    rating: 4,
    reviewCount: 17,
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
  },
  {
    id: 7,
    name: 'Nomad Tumbler',
    href: '/productpage',
    price: '3500',
    discount: 10,
    discountedPrice: 4738,
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    description: 'Stay hydrated with this durable, eco-friendly tumbler.',
    rating: 5,
    reviewCount: 11,
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ]
  },
  {
    id: 8,
    name: 'Earthen Bottle',
    href: '/productpage',
    price: '4800',
    discount: 10,
    discountedPrice: 4738,
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    description: 'A beautifully crafted earthen bottle made from natural materials.',
    rating: 4,
    reviewCount: 7,
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
  },
  {
    id: 9,
    name: 'Nomad Tumbler',
    href: '/productpage',
    price: '3500',
    discount: 10,
    discountedPrice: 4738,
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    description: 'Stay hydrated with this durable, eco-friendly tumbler.',
    rating: 5,
    reviewCount: 17,
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
  },
  {
    id: 10,
    name: 'Earthen Bottle',
    href: '/productpage',
    price: '4800',
    discount: 10,
    discountedPrice: 4738,
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    description: 'A beautifully crafted earthen bottle made from natural materials.',
    category: "sports",
    rating: 4,
    reviewCount: 67,
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
  },
  {
    id: 11,
    name: 'Nomad Tumbler',
    href: '/productpage',
    price: '3500',
    discount: 10,
    discountedPrice: 4738,
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    description: 'Stay hydrated with this durable, eco-friendly tumbler.',
    category: "sports",
    rating: 5,
    reviewCount: 10,
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
  },
];

// Category data as a variable
const categories = [
  { name: 'All Categories', value: '' },
  { name: 'Electronics', value: 'electronics' },
  { name: 'Clothing & Apparel', value: 'clothing' },
  { name: 'Home & Kitchen', value: 'home-kitchen' },
  { name: 'Beauty & Personal Care', value: 'beauty' },
  { name: 'Sports & Outdoors', value: 'sports' },
  { name: 'Books & Stationery', value: 'books' },
  { name: 'Toys & Games', value: 'toys' },
  { name: 'Health & Wellness', value: 'health' },
  { name: 'Jewelry & Accessories', value: 'jewelry' },
  { name: 'Grocery & Food', value: 'grocery' },
];
export default function ProductLists({ searchQuery }) {
  const [open, setOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [quickViewData, setQuickViewData] = useState({
    name: 'Basic Tee',
    href: '#',
    price: '19002',
    discount: 10,
    discountedPrice: 4738,
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-quick-preview-02-detail.jpg',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    description: 'Stay hydrated with this durable, eco-friendly tumbler.',
    category: "sports",
    rating: 3.9,
    reviewCount: 117,
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-ray-900', selectedClass: 'ring-gray-900' },
    ],
  });



  const handleClose = () => {
    setOpen(false)
  }
  const showQuickView = (data) => {
    setQuickViewData(data)
    setOpen(true)
  }

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "" || product.category === selectedCategory) &&
      product.rating >= ratingFilter
      && product.name?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  return (
    <div id='products' className="sticky grid grid-cols-12 bg-gray-50 dark:bg-black/95 py-12 ">

      {/* Left Sidebar (Filters) */}
      <div className="col-span-6 md:col-span-4 lg:col-span-2 px-4 py-2 mb-8 bg-white 
border border-gray-200 rounded-tr-md lg:sticky lg:top-36 h-fit shadow-sm ">
        {/* Filter Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button
            className="text-sm text-green-600 hover:underline focus:outline-none"
            onClick={() => {
              setSelectedCategory("");
              setRatingFilter(0);
            }}
          >
            Clear All
          </button>
        </div>

        {/* Dropdown for Small Screens */}
        <div className="lg:hidden mt-4">
          <details className="group">
            <summary className="cursor-pointer text-sm font-medium flex items-center justify-between p-2 bg-gray-100 rounded-md">
              <span>Filter Options</span>
              <span className="group-open:rotate-180 transition-transform">
                ▼
              </span>
            </summary>
            <div className="mt-2 space-y-4">
              {/* Category Filter */}
              <div>
                <h4 className="text-sm font-medium mb-1">Categories</h4>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={`category-${index}`}
                        value={category.value}
                        checked={selectedCategory === category.value}
                        onChange={(e) =>
                          setSelectedCategory(
                            e.target.checked ? category.value : ""
                          )
                        }
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring focus:ring-green-500"
                      />
                      <label
                        htmlFor={`category-${index}`}
                        className="text-sm text-gray-700"
                      >
                        {category.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rating Filter */}
              <div>
                <label
                  htmlFor="rating-small"
                  className="block text-sm font-medium mb-1"
                >
                  Minimum Rating:
                </label>
                <select
                  id="rating-small"
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(Number(e.target.value))}
                  className="block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-green-500 focus:outline-none"
                >
                  {[0, 1, 2, 3, 4, 5].map((rating) => (
                    <option key={rating} value={rating}>
                      {rating} Stars
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </details>
        </div>

        {/* Filters for Large Screens */}
        <div className="hidden lg:block mt-4 space-y-6 ">
          {/* Category Filter */}
          <div>
            <h4 className="text-sm font-medium mb-2">Categories</h4>
            <ul className="space-y-2  max-h-60 overflow-y-clip">
              {categories.map((category, index) => (
                <li key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`category-lg-${index}`}
                    value={category.value}
                    checked={selectedCategory === category.value}
                    onChange={(e) =>
                      setSelectedCategory(
                        e.target.checked ? category.value : ""
                      )
                    }
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring focus:ring-green-500"
                  />
                  <label
                    htmlFor={`category-lg-${index}`}
                    className="text-sm text-gray-700"
                  >
                    {category.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Rating Filter */}
          <div>
            <label
              htmlFor="rating-large"
              className="block text-sm font-medium mb-2"
            >
              Minimum Rating:
            </label>
            <select
              id="rating-large"
              value={ratingFilter}
              onChange={(e) => setRatingFilter(Number(e.target.value))}
              className="block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-green-500 focus:outline-none"
            >
              {[0, 1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating} Stars
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Products Grid Section */}
      <div className="col-span-12 lg:col-span-10 px-4 sm:px-6 
      lg:px-8 max-w-7xl mx-auto ">
        {/* <h2 className="text-3xl font-extrabold tracking-tight text-black dark:text-white mb-8">Our Products</h2> */}
        {/* Products Grid */}
        <div className="relative grid h-fit gap-x-2 gap-y-2  grid-cols-2 
         sm:grid-cols-3 xl:grid-cols-5 xl:gap-x-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} QuickView={showQuickView}/>
          ))}
        </div>
        {/* Product Quick View Modal */}
        <ProductQuickView open={open} quickViewData={quickViewData} close={handleClose} />
      </div>
    </div >

  );
}
