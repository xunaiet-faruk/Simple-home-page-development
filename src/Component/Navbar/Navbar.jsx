import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef.current.contains(e.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <div className='max-w-screen-2xl mx-auto px-12'>
            <nav className="bg-white px-4 py-4 text-white">
                <div className='flex items-center justify-between'>
                    <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                        <img className="w-32" src="https://i.ibb.co/1dm909z/image.png" alt="logo" />
                    </div>
                    <ul className="hidden md:flex items-center justify-between space-x-4">
                        <li className="cursor-pointer rounded-full font-semibold px-3 py-4 text-sm text-black border border-black hover:bg-black hover:text-white">
                            <p>New</p>
                            <div className="w-2 mt-1 h-2 mx-auto bg-black rounded-full hover:bg-white"></div>
                        </li>
                        <li className="cursor-pointer rounded-full px-1 py-5 font-semibold text-sm text-black border border-black hover:bg-black hover:text-white">Services</li>
                        <li className="cursor-pointer font-semibold rounded-full px-3 py-5 text-sm text-black border border-black hover:bg-black hover:text-white">Catalog</li>
                    </ul>
                    <div className='hidden md:flex gap-2 text-black'>
                        <p className='text-2xl font-bold'>*</p>
                        <p className='font-semibold underline'>Summer Collection</p>
                    </div>
                    <div className='hidden md:flex items-center justify-center space-x-2'>
                        <div className="relative group border rounded-full px-1 py-2 border-black">
                            <img className="w-14 h-14 object-cover rounded-full" src="https://i.ibb.co/Lx9w7T2/image.png" alt="avatar" />
                            <span className="w-3 h-3 bg-green-500 absolute rounded-full bottom-2 right-0 border-2 border-white"></span>
                            <span className="w-3 h-3 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                        </div>
                        <div className='border rounded-full px-3 py-2 border-black'>
                            <img className="w-9 h-9" src="https://i.ibb.co/GWM9SGK/image.png" alt="icon" />
                            <div className="w-2 mt-1 h-2 mx-auto bg-green-700 rounded-full hover:bg-white"></div>
                        </div>
                    </div>
                    <div className='flex md:hidden items-center' ref={dropDownMenuRef}>
                        <svg onClick={() => setDropDownState(!dropDownState)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer text-black">
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                    </div>
                </div>
                {dropDownState && (
                    <ul className=" z-10  py-4  bg-white border-2  absolute right-2 top-12 flex w-[200px] flex-col  rounded-lg   text-base ">
                        <li className="cursor-pointer  px-6 py-2 text-black font-semibold rounded-t-lg hover:bg-sky-600 ">
                            New
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-black font-semibold hover:bg-black ">
                            About
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-black hover:bg-black  font-semibold">
                           Catalog
                        </li>
                       
                    </ul>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
