
'use client'
import '../../node_modules/slick-carousel/slick/slick.css';
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Img1 from '../../public/assets/img1.jpg';
import Img2 from '../../public/assets/img2.jpg';
import Img3 from '../../public/assets/img3.jpg';

import Slider from "react-slick";
import Link from 'next/link';

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
    };
    return (
        <div className="w-100 overflow-hidden relative">
            <Slider {...settings}>
                <div>
                    <img src={Img1.src} className="object-top w-[100%] h-[520px] object-cover" />
                </div>
                <div>
                    <img src={Img2.src} className="object-top w-[100%] h-[520px] object-cover" />
                </div>
                <div>
                    <img src={Img3.src} className="object-top w-[100%] h-[520px] object-cover" />
                </div>


            </Slider>
            <div className="absolute bg-opacity-5 w-full h-full bg-black text-white top-0 left-0">
                <div className="container mx-auto">
                    <div className="px-10 py-16 w-[620px]">
                        <div className="">
                            <h3 className="text-4xl font-bold leading-10 text-yellow-400 hero_text_shadow">22 YEARS OF EXCELLENCE IN EDUCATION</h3>
                            <p className="py-5 text-white text-lg mb-4y"> As a college we have a strong focus on student's academic progress and achievement along with its contribution to the nation building.  </p>
                            <Link href="#" className="bg-[#0B3A67] px-5 py-3 rounded">Contect US </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Hero;