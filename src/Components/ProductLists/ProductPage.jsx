import { useLocation, useNavigate } from "react-router-dom";
import { MdStar } from "react-icons/md";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { Input } from "@headlessui/react";

const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    customerName: "",
    rating: "",
    comment: "",
  });
  
  const handleAddReview = () => {
    setReviews([...reviews, newReview]);
    setNewReview({ name: "", rating: "", comment: "" });
  };

const customerName = "testing review"


useEffect(() => {
  return () => {
    setNewReview({ ...newReview, customerName: customerName})
  }
}, [reviews])


  if (!location.state?.product) {
    navigate("/products"); // Redirect if product data is missing
    return null;
  }

  const { name, description, price, discount, rating, imageSrc, imageAlt } = location.state.product;

  return (
    <div className="w-full 
     px-4 sm:px-6 lg:px-8 py-6 bg-stone-100">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Product Section */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 bg-white p-4 rounded-sm shadow">
          {/* Left Section: Product Images */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
            <div className="border rounded-md overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-[300px] sm:h-[400px] object-cover rounded-md"
              />
            </div>
            {/* Thumbnail Carousel */}
            <div className="flex gap-3 overflow-auto no-scrollbar">
              {Array(4)
                .fill(imageSrc)
                .map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Thumbnail ${idx}`}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md border cursor-pointer hover:scale-105 transition-transform"
                  />
                ))}
            </div>
          </div>

          {/* Right Section: Product Details */}
          <div className="col-span-12 lg:col-span-6 space-y-4 sm:space-y-6">
            {/* Product Name */}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{name}</h1>
            {/* Price */}
            <div className="flex items-center gap-2 sm:gap-4">
              <p className="text-xl sm:text-2xl font-semibold text-green-600">&#8358;{price}</p>
              <p className="text-sm sm:text-base text-gray-500 line-through">&#8358;{(price * 1.2).toFixed(2)}</p>
              <span className="text-xs sm:text-sm text-red-500 bg-red-100 px-2 py-1 rounded-md">
                -{discount}% OFF
              </span>
            </div>
            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base">{description}</p>
            {/* Rating */}
            <div className="flex items-center gap-1 sm:gap-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`h-5 w-5 ${i < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                >
                  <MdStar />
                </span>
              ))}
              <span className="text-xs sm:text-sm text-gray-600">({rating} Reviews)</span>
            </div>

            {/* Add to Cart & Buy Now Buttons */}
            {/* Buy Button */}
            <div className="flex flex-row gap-1 justify-between mt-3">
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

        {/* Delivery & Return Policies Section */}
        <div className="lg:w-1/3 bg-white p-4 rounded-md shadow">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Delivery & Returns</h2>
          <hr className="mb-4" />
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Free delivery on orders over &#8358; 50000. Returns are accepted within 30 days of delivery.
          </p>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="bg-white mt-6 p-4 rounded-sm shadow">

        {/* Customer Reviews */}
        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Customer Reviews</h2>
          <hr className="mb-4" />

          {/* Reviews List */}
          <div className="mt-4 space-y-4">
            <div className="flex flex-wrap gap-2">
            {reviews.length > 0 ? (
                  reviews.map((review, index) => (
                    <div key={index}
                      className="p-4 bg-gray-50 border rounded-md shadow-sm" >
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-800">{review.customerName}</h3>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`h-5 w-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"
                                }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm sm:text-base text-gray-600">
                    No reviews yet. Be the first to review this product!
                  </p>
                )}
              </div>
          </div>

          {/* Add Review Form */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Write a Review</h3>
            <form
              className="mt-4 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleAddReview();
              }}
            >
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                  Rating
                </label>
                <div
                  value={newReview.rating}
                  className="flex gap-2 mt-1 w-full border border-gray-300 rounded-md p-2"
                  required
                  >
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <>
                      <input key={rating} type="radio" name="rating" value={rating} 
                        onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                      />
                      <label htmlFor="rating">
                        {rating} Star{rating > 1 ? "s" : ""}
                      </label>
                    </>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                  Comment
                </label>
                <textarea
                  id="comment"
                  rows="3"
                  value={newReview.comment}
                  onChange={(e) =>
                    setNewReview({ ...newReview, comment: e.target.value })
                  }
                  className="mt-1 w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white rounded-md hover:bg-green-500"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Policies */}
      <div className="bg-white mt-6 p-4 rounded-sm shadow">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Policies</h2>
        <hr className="mb-4" />
        <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 mt-2 space-y-1">
          <li>30-day return policy.</li>
          <li>1-year warranty for manufacturing defects.</li>
          <li>Contact our support team for queries.</li>
        </ul>
      </div>

      <div className="bg-white mt-6 p-4 rounded-sm shadow">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Other Products</h2>
        <hr className="mb-4" />
        <div className="flex bg-stone-100 p-2 overflow-auto no-scrollbar">
          <ProductCard product={location.state.product} />
          <ProductCard product={location.state.product} />
          <ProductCard product={location.state.product} />
          <ProductCard product={location.state.product} />
          <ProductCard product={location.state.product} />
          <ProductCard product={location.state.product} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
