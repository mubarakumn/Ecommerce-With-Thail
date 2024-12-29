import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fast_white.png";

export default function SellerSignUp() {
    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    return (
        <div className="flex flex-col px-6 py-12 lg:px-8  dark:bg-slate-900">
            <div className="mt-10 sm:mx-auto sm:w-full md:max-w-lg p-5 rounded-md bg-white dark:bg-black">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img src={logo} alt="Your Company" className="mx-auto h-10 w-auto" />
                    <h2 className="my-10 text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
                        Register as a Seller
                    </h2>
                </div>

                <form className="space-y-6">
                    {step === 1 && (
                        <div className="">
                            <h3 className="text-lg font-semibold mb-4">Step 1: Personal Details</h3>
                            <div className="flex gap-2 ">
                                <div className="w-1/2">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 dark:text-gray-50">
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1
                                         ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 sm:text-sm"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 dark:text-gray-50">
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1
                                         ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 sm:text-sm"
                                    />
                                </div>
                            </div>
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
                                <div className="flex gap-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 sm:text-sm"
                                    />
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1
                                         ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleNextStep}
                                    className="mt-4 w-1/3 rounded bg-black px-4 py-2 text-white font-semibold shadow-sm hover:bg-black/80"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div>
                            {/* <h3 className="text-lg font-semibold mb-4">Step 3: Confirm Your Information</h3> */}
                            {/* Confirmation of entered data, can add final preview here */}
                            <h3 className="text-lg font-semibold mb-4">Step 2: Store Details</h3>
                            <div className="flex gap-2 ">
                                <div className="w-1/2">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 dark:text-gray-50">
                                        Store name
                                    </label>
                                    <input
                                        id="StoreName"
                                        name="StoreName"
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1
                                         ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-900 dark:text-gray-50">
                                    Description 
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    type="description"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 sm:text-sm"
                                />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="catergory" className="block text-sm font-medium text-gray-900 dark:text-gray-50">
                                    Catergory
                                </label>
                                <div className="flex gap-2">
                                    <select
                                        id="catergory"
                                        name="catergory"
                                        type="catergory"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 sm:text-sm"
                                    >
                                        <option value="">choose</option>
                                        <option value="">choose</option>
                                        <option value="">choose</option>
                                        <option value="">choose</option>
                                        <option value="">choose</option>
                                   </select>
                                </div>
                            </div>

                            <div className="flex  gap-2 justify-end">
                                <button
                                    type="button"
                                    onClick={handlePreviousStep}
                                    className="mt-4 w-1/3 rounded bg-gray-400 px-4 py-2 text-white font-semibold shadow-sm hover:bg-gray-500"
                                >
                                    Back
                                </button>

                                {/* <button
                                    type="button"
                                    onClick={handleNextStep}
                                    className="mt-4 w-1/3 rounded bg-black px-4 py-2 text-white font-semibold shadow-sm hover:bg-black/80"
                                >
                                    Next
                                </button> */}
                                <button
                                    type="button"
                                    onClick={()=> alert("registeration processing")}
                                    className="mt-4 w-1/3 rounded bg-black px-4 py-2 text-white font-semibold shadow-sm hover:bg-black/80"
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    )}
                    
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                   No need exist?{" "}
                    <Link to="/sellwithus" className="font-semibold text-green-600 hover:text-green-500">
                        Go to Home
                    </Link>
                </p>
            </div>
        </div>
    );
}
