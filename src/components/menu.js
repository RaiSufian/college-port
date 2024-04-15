'use client'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation'

const Menu = () => {

    let pathname = usePathname();
 
    pathname = pathname.substring(1);
    // console.log("path name is", pathname);

    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <div className="flex justify-center relative w-full overflow-hidden ">
            <div className="container sm:px-3 md:px-10 pb-3">
                <header className="bg-white">
                    <nav className=" flex max-w-7xl items-center justify-end lg:justify-center p-1 md:p-5 lg:px-8" aria-label="Global">

                        <div className="flex lg:hidden">
                            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenu(true)}>
                                <span className="sr-only">Open main menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-8 justify-center">
                            <Link href="/" className={`text-lg  leading-6  rounded py-1 px-3 ${pathname == "" ? "bg-[#0B3A67] text-white" : "hover:bg-gray-100 text-gray-900"}`}>Home</Link>
                            <Link href="/library" className={`text-lg  leading-6  py-1 rounded px-3  ${pathname == "library" ? "bg-[#0B3A67] text-white" : "hover:bg-gray-100 text-gray-900"}`}>library</Link>
                            <Link href="/aboutus" className={` text-lg  leading-6  py-1 rounded px-3 ${pathname == "aboutus" ? "bg-[#0B3A67] text-white" : "hover:bg-gray-100 text-gray-900"}`}>About Us</Link>
                            <Link href="/faculty" className={`text-lg  leading-6 ${pathname == "faculty" ? "bg-[#0B3A67] text-white" : "hover:bg-gray-100 text-gray-900"} py-1 rounded px-3 `}>Faculty</Link>
                            <Link href="/contactus" className={`text-lg  leading-6  py-1 rounded px-3  ${pathname == "contactus" ? "bg-[#0B3A67] text-white" : "hover:bg-gray-100 text-gray-900"}`}>Contact Us</Link>
                        </div>

                    </nav>
                    <div className="lg:hidden" >
                        <div class={`fixed inset-y-0 transition-all ${mobileMenu ? " right-0" : "-right-full"}  z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 `}>
                            <div className="flex items-center justify-between">

                                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenu(false)}>
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <Link href="/" onClick={() => setMobileMenu(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</Link>
                                        <Link href="/library" onClick={() => setMobileMenu(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Labrary</Link>
                                        <Link href="/aboutus" onClick={() => setMobileMenu(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About Us</Link>
                                        <Link href="/faculty" onClick={() => setMobileMenu(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Staf</Link>
                                        <Link href="/contactus" onClick={() => setMobileMenu(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contect Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                <div className={`  bg-[#0B3A67] flex py-1 md:py-3 px-1 md:px-4 gap-2 md:rounded-br md:rounded-bl ${pathname == "" || pathname == "library" ? "" : "hidden"}`}>
                    <select className="w-20 md:w-40 rounded">
                        <option>Keyword </option>
                        <option>Title</option>
                        <option>Author</option>
                        <option>Description</option>
                    </select>
                    <form className="flex-1 flex relative">
                        <input type='text' placeholder='Seacrh library collection' className="flex-1 py-1 px-1 md:px-3 rounded-tl rounded-bl" />
                        <button className=" right-0 h-full absolute sm:relative flex justify-center items-center w-8 md:w-28 rounded-br rounded-tr bg-[#e2e0e2]">
                            <svg className="md:hidden" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M464 428L339.92 303.9a160.48 160.48 0 0 0 30.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0 0 94.58-30.72L428 464ZM209.32 319.69a110.38 110.38 0 1 1 110.37-110.37a110.5 110.5 0 0 1-110.37 110.37" /></svg>
                            <span className="hidden md:block">Search</span></button>
                    </form>
                </div>
                <div className={`bg-[#0B3A67] flex py-1 md:py-3 px-1 md:px-4 gap-2 md:rounded-br md:rounded-bl ${pathname == "" || pathname == "library" ? "hidden" : ""}`}>
                    <ul className="flex gap-2 text-white">
                        <li><Link href="/"> Home</Link></li>
                        /
                        <li>{pathname}</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default Menu;