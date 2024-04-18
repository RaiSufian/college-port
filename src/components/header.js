import Logo from '../../public/logo.png';
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import Link from 'next/link';
const robotoBold = Roboto({
    weight: '700',
    subsets: ['latin'],
})
const Header = () => {

    return (

        <div className="flex justify-center py-3">
            <div className="container px-3 md:px-10 flex items-center">
                <Link href="/" className="logo">
                    <Image src={Logo} alt="logo" className="w-24 md:w-32 lg:w-40 xl:w-48" />
                </Link>
                <div className="flex-1 text-center text-[#0B3A67]">
                    <h1 className={`text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ${robotoBold.className}`}>Government Associate College </h1>
                    <h2 className="md:text-2xl lg:text-3xl xl:text-4xl">(Boys) Pindi Bhattian</h2>
                </div>
            </div >
        </div>

    )
}
export default Header;