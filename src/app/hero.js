
'use client'
import '../../node_modules/slick-carousel/slick/slick.css';
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Img1 from '../../public/assets/img1.jpg';
import Img2 from '../../public/assets/img2.jpg';
import Img3 from '../../public/assets/img3.jpg';
import { Roboto } from 'next/font/google'

import Slider from "react-slick";
import Link from 'next/link';

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
});
const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // speed: 2000,
        // autoplaySpeed: 5000,
    };
    return (
        <div className="w-100 overflow-hidden relative bg-white">
            <Slider {...settings}>
                <div>
                    <img src={Img1.src} className="object-top w-[100%] h-[280px] md:h-[380px] lg:h-[520px] object-cover" />
                </div>
                <div>
                    <img src={Img2.src} className="object-top w-[100%] h-[280px] md:h-[380px] lg:h-[520px] object-cover" />
                </div>
                <div>
                    <img src={Img3.src} className="object-top w-[100%] h-[280px] md:h-[380px] lg:h-[520px] object-cover" />
                </div>


            </Slider>
            <div className="absolute bg-opacity-5 w-full h-full bg-black text-white top-0 left-0">
                <div className="container mx-auto">
                    <div className="px-2 md:px-5 lg:px-10 py-2 md:py-5 lg:py-16 md:w-[620px]">
                        <div className="">
                            <h3 className="text-2xl md:text-4xl font-bold leading-10 text-yellow-400 hero_text_shadow">22 YEARS OF EXCELLENCE IN EDUCATION</h3>
                            <p className="py-2 md:py-5 text-white md:text-lg md:mb-4"> As a college we have a strong focus on student's academic progress and achievement along with its contribution to the nation building.  </p>
                            <h4 className={`text-[#0B3A67] font-bold text-lg md:text-2xl mb-2 md:mb-4 `}>Lets Come Start</h4>
                            <Link href="#" className="bg-[#0B3A67] px-3 md:px-5  py-2 md:py-3 rounded">Contect US </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Hero;