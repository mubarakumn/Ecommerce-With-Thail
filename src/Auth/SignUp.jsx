import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fast_white.png";

export default function SignUp() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-green-100 dark:bg-slate-900">
      <div className="mt-10 sm:mx-auto sm:w-full md:max-w-lg p-5 rounded-md bg-white dark:bg-black">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={logo} alt="Your Company" className="mx-auto h-10 w-auto" />
          <h2 className="my-10 text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
            Sign up for your account
          </h2>
        </div>

        <form className="space-y-6">
          {step === 1 && (
            <div className="">
              <h3 className="text-lg font-semibold mb-4">Step 1: Account Details</h3>
              <div className="mt-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-50">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 sm:text-sm"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-gray-50">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 sm:text-sm"
                />
              </div>
              <button
                type="button"
                onClick={handleNextStep}
                className="mt-4 w-full rounded-md bg-green-600 px-4 py-2 text-white font-semibold shadow-sm hover:bg-green-500"
              >
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="transition-all ease-in duration-75">
              <h3 className="text-lg font-semibold mb-4">Step 2: Personal Details</h3>
              <div className="mt-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 dark:text-gray-50">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 sm:text-sm"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 dark:text-gray-50">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 sm:text-sm"
                />
              </div>
              <button
                type="button"
                onClick={handleNextStep}
                className="mt-4 w-full rounded-md bg-green-600 px-4 py-2 text-white font-semibold shadow-sm hover:bg-green-500"
              >
                Next
              </button>
              <button
                type="button"
                onClick={handlePreviousStep}
                className="mt-4 w-full rounded-md bg-gray-600 px-4 py-2 text-white font-semibold shadow-sm hover:bg-gray-500"
              >
                Back
              </button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Step 3: Confirm Your Information</h3>
              {/* Confirmation of entered data, can add final preview here */}
              <button
                type="submit"
                className="mt-4 w-full rounded-md bg-green-600 px-4 py-2 text-white font-semibold shadow-sm hover:bg-green-500"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handlePreviousStep}
                className="mt-4 w-full rounded-md bg-gray-600 px-4 py-2 text-white font-semibold shadow-sm hover:bg-gray-500"
              >
                Back
              </button>
            </div>
          )}
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-green-600 hover:text-green-500">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
