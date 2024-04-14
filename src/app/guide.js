import { Roboto } from 'next/font/google';

const roboto7 = Roboto({
    weight: '700',
    subsets: ['latin'],
});

const Guide = () => {



    return (
        <div className="bg-[#0B3A67] guide-bg">
            <div className="container mx-auto py-10 px-3 md:px-20 text-white">
                <div className="flex justify-between flex-wrap">
                    <div className=" flex flex-col py-5 items-center w-1/2 sm:w-1/2 lg:w-1/4">
                        <span className={`text-2xl md:text-4x lg:text-6xl pb-3 ${roboto7.className}`} >27<span className="font-normal">+</span></span>
                        <h5 className="pt-4 text-2xl text-center relative before:absolute before:top-0 before:left-0  before:content-'' before:bg-red-500 before:w-full before:h-1  ">Teachers</h5>
                    </div>
                    <div className=" flex flex-col py-5 items-center w-1/2 sm:w-1/2 lg:w-1/4">
                        <span className={`text-2xl md:text-4x lg:text-6xl pb-3 ${roboto7.className}`} >1160<span className="font-normal">+</span></span>
                        <h5 className="pt-4 text-2xl text-center relative before:absolute before:top-0 before:left-0  before:content-'' before:bg-red-500 before:w-full before:h-1 ">Students</h5>
                    </div>
                    <div className=" flex flex-col py-5 items-center w-1/2 sm:w-1/2 lg:w-1/4">
                        <span className={`text-2xl md:text-4x lg:text-6xl pb-3 ${roboto7.className}`} >18<span className="font-normal">+</span></span>
                        <h5 className="pt-4 text-2xl text-center relative before:absolute before:top-0 before:left-0  before:content-'' before:bg-red-500 before:w-full before:h-1 ">Courses</h5>
                    </div>
                    <div className=" flex flex-col py-5 items-center w-1/2 sm:w-1/2 lg:w-1/4">
                        <span className={`text-2xl md:text-4x lg:text-6xl pb-3 ${roboto7.className}`} >38<span className="font-normal">+</span></span>
                        <h5 className="pt-4 text-2xl text-center relative before:absolute before:top-0 before:left-0  before:content-'' before:bg-red-500 before:w-full before:h-1  ">Awards</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Guide;