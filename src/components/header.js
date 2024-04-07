import Logo from '../../public/logo.png';
import Image from 'next/image'
import { Roboto } from 'next/font/google'
const robotoBold = Roboto({
    weight: '700',
    subsets: ['latin'],
  })
const Header = () => {
    console.log("our image is", Logo);
    return (
        <div className="flex justify-center py-3">
            <div className="container px-3 md:px-10 flex items-center">
                <div className="logo">
                    <Image src={Logo} alt="logo" width={210} />
                </div>
                <div className="flex-1 text-center text-blue-800">
                    <h1 className={`text-7xl font-bold ${robotoBold.className}`}>Govt. Associate College </h1>
                    <h2 className="text-5xl">(Boys) Pindi Bhattian</h2>
                </div>
            </div >
        </div>

    )
}
export default Header;