import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
const Footer = () => {
    return (

        <div className="bg-[#0B3A67]">

            <div className="container mx-auto px-3 md:px-10 py-7 flex text-white flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/4 pl-4 sm:pl-1 pt-3">
                    <Image src={Logo} className="w-52 mx-auto" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 pl-4 sm:pl-1 pt-3">
                    <h4 className="text-xl font-medium mb-3">Usefull Links</h4>
                    <ul className=" list-disc list-inside">
                        <li className="py-1 text-sm"><Link href="#" className="hover:underline">Home</Link></li>
                        <li className="py-1 text-sm"><Link href="#" className="hover:underline">
                            About Us
                        </Link></li>
                        <li className="py-1 text-sm"><Link href="#" className="hover:underline">
                            Contact Us
                        </Link></li>
                        <li className="py-1 text-sm"><Link href="#" className="hover:underline">
                            Library
                        </Link></li>
                        <li className="py-1 text-sm"><Link href="#" className="hover:underline">
                        Faculty
                        </Link></li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 pl-4 sm:pl-1 pt-3">
                    <h4 className="text-xl font-medium mb-3">Courses</h4>
                    <ul className=" list-disc list-inside">
                        <li className="py-1">
                            Inter
                            <ul className=" list-inside text-sm">
                                <li className="ml-8">FA, FSc, ICS,</li>
                            </ul>
                        </li>
                        <li className="py-1">
                            Undergraduation
                            <ul className=" list-inside text-sm">
                                <li className="ml-8">Islamyat, Political Science, History</li>
                            </ul>
                        </li>
                        <li className="py-1">
                            Graduation
                            <ul className=" list-inside text-sm">
                                <li className="ml-8">Islamyat, Political Science, History</li>
                            </ul>
                        </li>
                    </ul>

                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 pl-4 sm:pl-1 pt-3">
                    <h4 className="text-xl font-medium mb-3">Social Links</h4>
                    <ul className="text-2xl mt-4 flex gap-3">
                        <li> <Link href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsFacebookFill0)"><path fill="currentColor" fill-rule="evenodd" d="M0 12.067C0 18.034 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067" clip-rule="evenodd" /></g><defs><clipPath id="akarIconsFacebookFill0"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></g></svg></Link></li>
                        <li> <Link href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" d="M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7s-7-3.13-7-7s3.13-7 7-7M5.72 10.69c3.1 0 4.8-2.57 4.8-4.8v-.22c.33-.24.62-.54.84-.88c-.3.13-.63.22-.97.27c.35-.21.62-.54.74-.93c-.33.19-.69.33-1.07.41c-.31-.33-.75-.53-1.23-.53c-.93 0-1.69.76-1.69 1.69c0 .13.01.26.05.38c-1.4-.07-2.65-.74-3.48-1.76c-.14.25-.23.54-.23.85c0 .58.3 1.1.75 1.4c-.28 0-.54-.08-.76-.21v.02c0 .82.58 1.5 1.35 1.66c-.14.04-.29.06-.44.06c-.11 0-.21-.01-.32-.03c.21.67.84 1.16 1.57 1.17c-.58.45-1.31.72-2.1.72c-.14 0-.27 0-.4-.02c.74.48 1.63.76 2.58.76" class="cls-1" /></svg></Link></li>
                        <li><Link href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a78.831 78.831 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465a72.11 72.11 0 0 1-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78.43 78.43 0 0 1-2.189-.023l-.194-.006a63.036 63.036 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.889 4.889 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428a74.1 74.1 0 0 1-.03-.712l-.005-.194A79.047 79.047 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.678a4.897 4.897 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5" /></svg> </Link></li>
                        <li><Link href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><defs><mask id="ipSYoutube0"><g fill="none" strokeLinejoin="round"><path fill="#fff" stroke="#fff" strokeWidth="4" d="M11.064 10.414c5.543-.276 9.854-.414 12.934-.414s7.393.138 12.939.415a6 6 0 0 1 5.68 5.492c.254 3.034.381 5.706.381 8.017c0 2.339-.13 5.048-.39 8.128a6 6 0 0 1-5.587 5.483c-4.741.31-9.082.465-13.023.465c-3.94 0-8.28-.155-13.018-.465a6 6 0 0 1-5.587-5.48c-.263-3.103-.395-5.814-.395-8.131c0-2.29.129-4.963.385-8.02a6 6 0 0 1 5.68-5.49Z" /><path fill="#000" stroke="#000" strokeWidth="3.43" d="M21 19.61v8.796a.857.857 0 0 0 1.33.715l6.597-4.36a.857.857 0 0 0 .006-1.427l-6.598-4.436a.857.857 0 0 0-1.335.711Z" /></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSYoutube0)" /></svg></Link></li>
                    </ul>
                    <h4 className="text-xl font-medium mb-3 mt-4">Address</h4>
                    <ul className="mt-2">
                        <li className="flex gap-2 pt-1 items-center">  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 9A7 7 0 1 0 5 9c0 1.387.409 2.677 1.105 3.765h-.008L12 22l5.903-9.235h-.007A6.971 6.971 0 0 0 19 9m-7 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6" /></svg> Pindi Bhattian, Dist Hafizabad </li>
                        <li className="flex gap-2 pt-1 items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317" /></svg> 03006467449 </li>
                        <li className="flex gap-2 pt-1 items-center">  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5 20a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3zM7.625 8.22a1 1 0 1 0-1.25 1.56l3.75 3.001a3 3 0 0 0 3.75 0l3.75-3a1 1 0 1 0-1.25-1.562l-3.75 3a1 1 0 0 1-1.25 0z" clip-rule="evenodd" /></svg> govschool@gmail.com </li>

                    </ul>

                </div>

            </div>
            
            <div className="flex justify-center py-2 border-t border-gray-50 border-opacity-50">
                © Copyright 2024, All Rights Reserved
            </div>
        </div>
    )
}
export default Footer;