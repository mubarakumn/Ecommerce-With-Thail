import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Menu, MenuButton, MenuItem, MenuItems, } from '@headlessui/react'
import { Bars3Icon, BellIcon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/fast_white.png'
import nigerianlogo from "../../assets/flag_nigeria.svg"
import PopSign from '../../Auth/PopSign'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import Banner from '../Banner/Banner'


export default function Nav({searchQuery, setSearchQuery}) {
  const [open, setOpen] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [PlaceHolderText, setPlaceHolderText] = useState("Search...");
  const navigate = useNavigate()
  const [show, setShow] = useState(true)
  const location = useLocation()

  // Category data as a variable
  // const categories = [
  //   { name: 'All Categories', value: '' },
  //   { name: 'Electronics', value: 'electronics' },
  //   { name: 'Clothing & Apparel', value: 'clothing' },
  //   { name: 'Home & Kitchen', value: 'home-kitchen' },
  //   { name: 'Beauty & Personal Care', value: 'beauty' },
  //   { name: 'Sports & Outdoors', value: 'sports' },
  //   { name: 'Books & Stationery', value: 'books' },
  //   { name: 'Toys & Games', value: 'toys' },
  //   { name: 'Health & Wellness', value: 'health' },
  //   { name: 'Jewelry & Accessories', value: 'jewelry' },
  //   { name: 'Grocery & Food', value: 'grocery' },
  // ];
const Authenticated = true
  const navigation = [
    { name: 'Products', to: '/products' },
    { name: 'Features', to: '#' },
    { name: 'Marketplace', to: '#' },
    { name: 'Company', to: '#' },
  ];
  
const PlaceHolderOptions = [
    "Search for shoes",
    "Search for bags",
    "Search smart watch",
    "Search for electronics",
    "Search for smart phone"
  ]

  useEffect(()=>{
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * PlaceHolderOptions.length)
      setPlaceHolderText(PlaceHolderOptions[randomIndex])
    }, 3000);
    
    // console.log("changes", PlaceHolderText);
    return () => clearInterval(interval)

  }, []); 


console.log("search", searchQuery.trim())

useEffect(() => {
  if(searchQuery.trim() && location.pathname !== "/products"){
    navigate("/products")
  }
}, [searchQuery])


const search =()=>{
 setSearchQuery(searchData)
}
  return (
    <>
     <Banner showIt={show} closeIt={()=> setShow(false)}/>
    <header className="bg-white dark:bg-gray-800 sticky top-0 z-10">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-20 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-gray-100 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-transtone-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 px-4 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      onClick={()=> 
                        setOpen(false)}
                      className="-mx-3 cursor-pointer block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-gray-300 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {!Authenticated ? (<div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div onClick={() => { navigate("/signIn") }} className="flow-root">
                <Link to='/signIn' className="-m-2 block p-2 font-medium text-gray-900 dark:text-gray-300">
                  Sign in
                </Link>
              </div>
              <PopSign isOpen={signInModal} onClose={() => setSignInModal(false)} />
              <div className="flow-root">
                <Link to="/signUp" className="-m-2 block p-2 font-medium text-gray-900 dark:text-gray-300">
                  Create account
                </Link>
              </div>
            </div>)
            :
            ( <div className="relative inset-y-0 right-0 flex flex-col items-start  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Profile dropdown */}
            <div className="relative">
              <div className=" right-0 z-10 mt-2 w-48 origin-top-right 
              rounded-m py-1 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              // ring-1 ring-black ring-opacity-5 
             >
                <div>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Your Profile
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Settings
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>)}

            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src={nigerianlogo}
                  className="block h-auto w-5 shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">NGN</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <nav aria-label="Top" className="bg-white dark:bg-black/55 dark:text-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between  border-b h-16 items-center">

          {/*Left Section (Logo, Navigation Bar )*/}
          <div className='flex justify-between  items-center'>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative rounded-md bg-white dark:bg-stone-700 p-2 text-gray-400 lg:hidden"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
            {/* logo */}
            <Link to="/" className='max-sm:hidden'>
              <span className="sr-only">Your Company</span>
              <img alt="Company logo" src={logo} className="h-8 w-auto" />
            </Link>

            {/* Sell with Us */}
            <Link to="/sellwithus" title='Register as a Seller' className='ml-6 max-sm:hidden text-sm hover:text-green-700 underline underline-offset-2'>
             Sell withUs
            </Link>
          </div>

          {/* Right Section (Search, Sign in, Cart) */}
          <div className="flex justify-end  sm:w-2/4 md:w-3/4 gap-2">
            {/* Search Bar */}
            <div className="flex items-center overflow-hidden rounded-md shadow-md dark:shadow-white dark:shadow-sm lg:w-2/4 md:w-3/4 ">
             <MagnifyingGlassIcon aria-hidden="true" className="max-sm:m-1 h-6 w-6 mx-2 text-stone-400" />
              <input type="text"
                placeholder={PlaceHolderText}
                value={searchData}
                onChange={(e)=> setSearchData(e.target.value)}
                className='max-sm:p-1 p-2 w-full bg-stone-100   outline-none transition-opacity duration-[0.5s] ease-in-out'
              />
              {/* Search icon */}
              <div
              onClick={search}
               className="max-sm:p-1 p-2 text-gray-300 hover:text-gray-100 bg-green-900">
                <span className="sr-only">Search</span>
                Search
              </div>
            </div>

            {/* Other links */}
            <div className="ml-auto flex items-center ">
              {!Authenticated && <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <div onClick={() => { setSignInModal(!signInModal) }} className="flow-root">
                  <div className="relative -m-2 block p-2 text-sm
                  font-medium text-gray-900 hover:text-green-950 cursor-pointer dark:text-gray-300">
                    Sign in
                  </div>
                  <PopSign isOpen={signInModal} onClose={() => setSignInModal(false)} />
                </div>
                <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                <Link to="signUp" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-800">
                  Create account
                </Link>
              </div>}

              <div className="lg:ml-8 max-sm:hidden flex">
                <a href="#" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-800">
                  <img
                    alt="Nigerian flag"
                    src={nigerianlogo}
                    className="block h-auto w-5 shrink-0"
                  />
                  <span className="ml-3 block text-sm font-medium">NGN</span>
                  <span className="sr-only">, change currency</span>
                </a>
              </div>

              {/* Cart */}
              <div onClick={() => setOpenCart(true)} className="relative ml-4 flex lg:ml-6" >
                <ShoppingBagIcon
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                />
                <span className="absolute top-4 right-[-5px] ml-2 text-[10px] font-medium px-1 rounded-md bg-stone-900 text-white dark:text-gray-300 group-hover:text-gray-800">10</span>
                <span className="sr-only">items in cart, view cart</span>
              </div>

              {Authenticated &&  <div className="absolute inset-y-0 right-0 hidden lg:flex lg:flex-1 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>}
            </div>
          </div>
        </div>
      </nav>

      {/* Navigations & Category */}
      <div className="flex items-center w-full h-16 p-0 px-2 lg:px-12 border-b shadow">
        <div aria-label="Global" className="flex items-center gap-2 w-full">
          {/* Category Dropdown */}
          {/* <select name="category" id="category" className="bg-white text-gray-900 
          font-semibold text-sm rounded-sm shado border border-gray-300 focus:ring-2
           focus:ring-blue-500 focus:outline-none py-1 px-2 transition-all ease-in-out 
           duration-300 hover:bg-gray-100">
            {categories.map((category) => (
              <option key={category.value} value={category.value} className='bg-stone-100 '>
                {category.name}
              </option>
            ))}
          </select> */}

          {/* Navigation Links */}
          <div className="hidden md:flex md:gap-x-8 ml-10">
            {navigation.map((item) => (
              <Link key={item.name} to={item.to} className="text-gray-900 dark:text-white cursor-pointer 
              text-sm font-semibold hover:text-green-700 transition-all ease-in-out duration-200">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <ShoppingCart open={openCart} close={() => setOpenCart(false)} />
    </header>
    </>
  )
}