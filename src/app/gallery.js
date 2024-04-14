import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Img1 from '../../public/assets/img1.jpg';

const roboto4 = Roboto({
    weight: '400',
    subsets: ['latin'],
});
const images = [1, 2, 3, 4, 5, 6, 7, 8]
const Gallery = () => {
    return (
        <div className="pt-6">
            <h4 className={`text-center uppercase text-3xl text-[#0b3a67] py-4 relative after:absolute after:bottom-0 after:left-1/2 after:contents-'' after:w-2 after:h-2 after:border-t-2 after:border-l-2 after:border-[#0B3A67] after:rotate-45 ${roboto4.className}`}>Campus</h4>
            <div className="flex justify-center flex-wrap pt-6">
                {images.map((items, index) => {
                    return (
                        <div className="w-1/2 md:w-1/3 lg:w-1/4 h-40  md:h-52 p-1  cursor-pointer relative overflow-hidden group" key={index}>
                            <Image src={Img1} alt="gallery" className="transition-all w-full h-full group-hover:scale-125" />
                            <div className="text-white flex justify-center items-center text-2xl w-3/5 h-1/3 bg-[#0b3a67] opacity-50 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 6.1a.31.31 0 0 0-.45.32a2.47 2.47 0 0 0 .51 1.22l.15.13A3 3 0 0 1 9.08 10a3.63 3.63 0 0 1-3.55 3.44a3 3 0 0 1-2.11-.85a3 3 0 0 1-.85-2.22A3.55 3.55 0 0 1 3.63 8a3.66 3.66 0 0 1 1.5-.91A5.19 5.19 0 0 1 5 6v-.16a4.84 4.84 0 0 0-2.31 1.3a4.5 4.5 0 0 0-.2 6.37a4.16 4.16 0 0 0 3 1.22a4.79 4.79 0 0 0 3.38-1.42a4.52 4.52 0 0 0 .21-6.38A4.16 4.16 0 0 0 8 6.1"/><path fill="currentColor" d="M13.46 2.54a4.16 4.16 0 0 0-3-1.22a4.79 4.79 0 0 0-3.37 1.42a4.52 4.52 0 0 0-.21 6.38A4.21 4.21 0 0 0 8 9.9a.31.31 0 0 0 .45-.31a2.41 2.41 0 0 0-.52-1.23l-.15-.13A3 3 0 0 1 6.92 6a3.63 3.63 0 0 1 3.55-3.44a3 3 0 0 1 2.11.85a3 3 0 0 1 .85 2.22A3.55 3.55 0 0 1 12.37 8a3.66 3.66 0 0 1-1.5.91a5.19 5.19 0 0 1 .13 1.14v.16a4.84 4.84 0 0 0 2.31-1.3a4.5 4.5 0 0 0 .15-6.37"/></svg>
                                </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}
export default Gallery;