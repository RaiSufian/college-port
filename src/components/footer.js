import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
const Footer = () => {
    return (

        <div className="bg-[#0B3A67]">
           
            <div className="container mx-auto px-3 md:px-10 py-7 flex text-white">
                <div className="w-1/4">
                    <Image src={Logo} className="w-52" />
                </div>
                <div className="w-1/4">
                    <h4 className="text-xl font-medium">Usefull Links</h4>
                    <ul className=" list-disc list-inside">
                        <li className="py-2 text-sm"><Link href="#">Home</Link></li>
                        <li className="py-2 text-sm"><Link href="#">
                            About Us
                        </Link></li>
                        <li className="py-2 text-sm"><Link href="#">
                            Contect Us
                        </Link></li>
                        <li className="py-2 text-sm"><Link href="#">
                            Labrary
                        </Link></li>
                        <li className="py-2 text-sm"><Link href="#">
                            Staff
                        </Link></li>
                    </ul>
                </div>
                <div className="w-1/4">
        
                </div>
                <div className="w-1/4">

                </div>

            </div>
        </div>
    )
}
export default Footer;