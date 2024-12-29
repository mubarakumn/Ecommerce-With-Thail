import { useState } from "react";

const Checkout = () => {
  const [step, setStep] = useState(1)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Progress Indicator */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Section - User Information */}
        <section className="col-span-8 bg-white p-6 shadow rounded-md space-y-6">
          
          {/* Billing Details */}
          {step === 1 && (
          <div>
            <h2 className="text-lg font-medium mb-2">Billing Details</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Billing Address"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </form>
          </div>
          )}

          {/* Shipping Details */}
          {step === 2 && (
            <div>
              <h2 className="text-lg font-medium mb-2">Shipping Details</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Shipping Address"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </form>
            </div>
          )}

          {/* Payment Method */}
          {step === 3 && (
            <div>
              <h2 className="text-lg font-medium mb-2">Payment Method</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Expiry Date"
                    className="w-1/2 p-3 border border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 p-3 border border-gray-300 rounded-md"
                  />
                </div>
              </form>
            </div>
          )}
          {<button className="" onClick={()=>{
            step >= 2 && setStep(step - 1)
          }}>back</button>
          }
          {step === 3 ? "" : <button className="" onClick={()=>{
            setStep(step + 1)
          }}>Next</button>
          }
        </section>

        {/* Right Section - Order Summary */}
        {
          step === 3 && 
        <section className="col-span-4 bg-white p-6 shadow rounded-md space-y-6">
          <h2 className="text-lg font-medium mb-4">Order Summary</h2>

          {/* Items List */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Product 1</span>
              <span>$20.00</span>
            </div>
            <div className="flex justify-between">
              <span>Product 2</span>
              <span>$15.00</span>
            </div>
            <div className="flex justify-between">
              <span>Product 3</span>
              <span>$30.00</span>
            </div>
          </div>

          {/* Summary */}
          <div className="border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$65.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$3.25</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>$73.25</span>
            </div>
          </div>

          {/* Place Order Button */}
          <button className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
            Place Order
          </button>
        </section>
   }
      </main>
    </div>
  );
};

export default Checkout;
