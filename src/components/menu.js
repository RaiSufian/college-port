'use client'
import Link from 'next/link'
import { useState } from 'react'
const Menu = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <div className="flex justify-center relative ">
            <div className="container px-3 md:px-10 pb-3">
                <header class="bg-white">
                    <nav class=" flex max-w-7xl items-center justify-end lg:justify-center p-5 lg:px-8" aria-label="Global">

                        <div class="flex lg:hidden">
                            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenu(true)}>
                                <span class="sr-only">Open main menu</span>
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                        <div class="hidden lg:flex lg:gap-x-8 justify-center">
                            <Link href="#" class="text-sm font-semibold leading-6 text-white rounded bg-[#0B3A67] py-1 px-3">Home</Link>
                            <Link href="#" class="text-sm font-semibold leading-6 text-gray-900 py-1 px-3 hover:bg-gray-100">labrary</Link>
                            <Link href="#" class="text-sm font-semibold leading-6 text-gray-900 py-1 px-3 hover:bg-gray-100">About Us</Link>
                            <Link href="#" class="text-sm font-semibold leading-6 text-gray-900 py-1 px-3 hover:bg-gray-100">Staf</Link>
                            <Link href="#" class="text-sm font-semibold leading-6 text-gray-900 py-1 px-3 hover:bg-gray-100">Contect Us</Link>
                        </div>

                    </nav>
                    <div class="lg:hidden" >

                        <div class={`fixed inset-y-0 transition-all ${mobileMenu ? " right-0" : "-right-full"}  z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 `}>
                            <div class="flex items-center justify-between">

                                <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenu(false)}>
                                    <span class="sr-only">Close menu</span>
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div class="mt-6 flow-root">
                                <div class="-my-6 divide-y divide-gray-500/10">
                                    <div class="space-y-2 py-6">
                                        <Link href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</Link>
                                        <Link href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Labrary</Link>
                                        <Link href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About Us</Link>
                                        <Link href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Staf</Link>
                                        <Link href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contect Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="bg-[#0B3A67] flex py-3 px-4 gap-2 rounded">
                    <select className="w-40 rounded">
                        <option>Keyword </option>
                        <option>Title</option>
                        <option>Author</option>
                        <option>Description</option>
                    </select>
                    <form className="flex-1 flex">
                        <input type='text' placeholder='Seacrh library collection' className="flex-1 py-1 px-3 rounded-tl rounded-bl" />
                        <button className="w-28 rounded-br rounded-tr bg-[#e2e0e2]">Search</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Menu;