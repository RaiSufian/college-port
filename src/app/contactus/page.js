import Link from "next/link";

const ContectUs = () => {
    return (
        <div className=" ">
            <div className="container mx-auto px-3 md:px-10 ">
                <div className="grid md:grid-cols-5 ">
                    <div className="md:col-span-2 py-6">
                        <div className="flex gap-4 py-3 group">
                            <span className="group-hover:text-white group-hover:bg-[#0B3A67] transition-all w-12 h-12 text-2xl bg-white rounded-full flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544" /><path fill="currentColor" d="M512 512a96 96 0 1 0 0-192a96 96 0 0 0 0 192m0 64a160 160 0 1 1 0-320a160 160 0 0 1 0 320" /></svg>                            </span>
                            <div className="">
                                <h5 className="text-xl text-[#0B3A67]">Location:</h5>
                                <p className="py-1 text-sm text-gray-400">College Road, Pindi bhattian, Dist Hafizbad</p>
                            </div>
                        </div>
                        <div className="flex gap-4 py-3 group">
                            <span className="group-hover:text-white group-hover:bg-[#0B3A67] transition-all w-12 h-12 text-2xl bg-white rounded-full flex justify-center items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m16.484 11.976l6.151-5.344v10.627zm-7.926.905l2.16 1.875c.339.288.781.462 1.264.462h.017h-.001h.014c.484 0 .926-.175 1.269-.465l-.003.002l2.16-1.875l6.566 5.639H1.995zM1.986 5.365h20.03l-9.621 8.356a.612.612 0 0 1-.38.132h-.014h.001h-.014a.61.61 0 0 1-.381-.133l.001.001zm-.621 1.266l6.15 5.344l-6.15 5.28zm21.6-2.441c-.24-.12-.522-.19-.821-.19H1.859a1.87 1.87 0 0 0-.835.197l.011-.005A1.856 1.856 0 0 0 0 5.855v12.172a1.86 1.86 0 0 0 1.858 1.858h20.283a1.86 1.86 0 0 0 1.858-1.858V5.855c0-.727-.419-1.357-1.029-1.66l-.011-.005z" /></svg>
                            </span>
                            <div className="">
                                <h5 className="text-xl text-[#0B3A67]">Email:</h5>
                                <Link href="#" className="py-1 text-sm text-gray-400">govtcollegePindiBhattian@gmail.com</Link>
                            </div>

                        </div>
                        <div className="flex gap-4 py-3 group">
                            <span className="group-hover:text-white group-hover:bg-[#0B3A67] transition-all w-12 h-12 text-2xl bg-white rounded-full flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" /><path d="M8 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2" /></g></svg>
                            </span>
                            <div className="">
                                <h5 className="text-xl text-[#0B3A67]">Phone:</h5>
                                <Link href="#" className="py-1 text-sm text-gray-400">College Road, Pindi bhattian, Dist Hafizbad</Link>
                            </div>
                        </div>
                        <div className="flex gap-4 py-3 group">
                            <span className="group-hover:text-white group-hover:bg-[#0B3A67] transition-all w-12 h-12 text-2xl bg-white rounded-full flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" /></svg>
                            </span>
                            <div className="">
                                <h5 className="text-xl text-[#0B3A67]">What App:</h5>
                                <p className="py-1 text-sm text-gray-400">College Road, Pindi bhattian, Dist Hafizbad</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-3 py-6">
                        <form action="#" class="space-y-8">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                                    <input type="text" id="name" class="shadow-sm bg-white  text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:shadow-md " placeholder="Entre your name" required="" />

                                </div>
                                <div className="col-span-1">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                    <input type="email" id="email" class="shadow-sm bg-white  text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:shadow-md " placeholder="name@flowbite.com" required="" />

                                </div>
                            </div>

                            <div>
                                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg  shadow-sm  focus:shadow-md  " placeholder="Let us know how we can help you" required="" />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm focus:border-0 focus:outline-0  focus:shadow-md    " placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#0B3A67] border border-[#0B3A67] sm:w-fit hover:bg-white hover:border-[#0B3A67] hover:text-[#0B3A67] transition-all ">Send message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27093.840943230905!2d73.25980935643234!3d31.913929400026745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39221d28a33352c3%3A0x1a9ed072413c3991!2sGovt%20Degree%20College%20Boys%20Pindi%20Bhattian!5e0!3m2!1sen!2s!4v1713378030677!5m2!1sen!2s" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
export default ContectUs;