import {FcGoogle} from 'react-icons/fc'
import {MdCancel} from 'react-icons/md'
function PopSign({ isOpen, onClose }) {
    return (
        <div onClick={() => onClose} className={`absolute top-0 left-0 h-[100vh] w-[100vw] bg-black/5 z-50 ${isOpen ? "flex" : "hidden"}`}>

            <div onClick={(e) => { e.stopPropagation() }} className={`flex-col w-60 h-72 bg-white shadow-2xl rounded-lg p-3 absolute top-20 right-20`}>
            <MdCancel  onClick={onClose } className='absolute right-2'/>
                <p className='text-center test-sm text-stone-800 font-bold'>Sign In Now</p>
                <form className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <label htmlFor="" className='text-xs'>Email</label>
                        <input
                         type="email" 
                         placeholder='example@me.now' 
                         className='p-1 pl-2 text-sm border rounded' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className='text-xs'>Password</label>
                        <input
                         type="password" 
                         placeholder='your secret keys' 
                         className='p-1 pl-2 text-sm border rounded' />
                    </div>
                    <button className="p-2 mt-2 bg-black font-semibold text-white rounded-md">
                        Sign-in</button>
                </form>
                
                {/* with google */}
                <div className="flex flex-col">
                    <span className="flex items-center gap-1 mt-1 mb-1">
                        <hr className="bg-slate-400 w-1/2"/> 
                        or 
                        <hr className="bg-slate-400 w-1/2"/> 
                    </span>
                    <button className="p-1 flex justify-center gap-1 items-center bg-blue-800 hover:bg-blue-600 text-white font-semibold rounded-md">
                
                        <FcGoogle/> Google</button>
                </div>
            </div>
        </div>
    )
}

export default PopSign