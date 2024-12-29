import { useNavigate } from 'react-router-dom'
import sellerImg from '../assets/seller.jpg'

const Sellwithus = () => {

  const  navigate = useNavigate()
  return (
    <div className="bg-stone-100 min-h-[100vh]">
       <div className="grid grid-cols-12 p-4">
        {/* Intro */}
        <div className="col-span-12 flex gap-4 border h-80 p-4 shadow rounded bg-white">
            <img src={sellerImg} alt="start selling" className='object-fill shrink-0 rounded w-1/3 h-full '/>
            <div className="p-4 text-sm">
                <h1 className="text-xl font-bold">Get the unlimited market with us 100% plus!</h1>
                <hr className="mb-5" />
                <p className="mb-5">
                  With us you, lift up your sells from 75% up to 175% easily, 
                  with large rich to customers all over the nation wide
                  <br />
                  <br />
                  <h1>Get start here!</h1>
                  By just listing you product to unveiled the market purtentails
                  and getting sells record & feedbacks easily
                </p>
                <div className="flex gap-2">
                  <button
                  onClick={()=> navigate('/sellersignup')}
                  className='block p-2
                  bg-black/85 text-white font-bo rounded'>Register now</button> 
                  <button
                  onClick={()=> navigate('/sellerdashboard')}
                  className='block p-2
                  bg-black text-white font-bo rounded'>Login </button> 

                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Sellwithus