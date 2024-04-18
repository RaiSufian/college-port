import { Roboto } from 'next/font/google';
import Image from 'next/image';
import img1 from "../../../public/assets/book.jpeg";
const roboto4 = Roboto({
    weight: '400',
    subsets: ['latin'],
});
const roboto5 = Roboto({
    weight: '500',
    subsets: ['latin'],
});

const Library = () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className="my-3  container mx-auto sm:px-3 md:px-10">
            <h4 className={`text-center uppercase text-2xl text-[#0b3a67] py-4 relative after:absolute after:bottom-0 after:left-1/2 after:contents-'' after:w-2 after:h-2 after:border-t-2 after:border-l-2 after:border-[#0B3A67] after:rotate-45 ${roboto4.className}`}>Advanced search | Libraries </h4>
            <div className="bg-white rounded">
                <div className="flex md:p-5 gap-5">
                    <div className="w-48 lg:w-52 xl:w-60 border hidden md:block">
                        <h5 className="bg-[#F0F3F3] text-center py-2 text-xl text-gray-500">Category</h5>
                        <ul className="py-1">
                            <li className="py-1 px-2 cursor-pointer  hover:bg-[#F0F3F3]">English</li>
                            <li className="py-1 px-2 cursor-pointer  hover:bg-[#F0F3F3]">Urdu</li>
                            <li className="py-1 px-2 cursor-pointer  hover:bg-[#F0F3F3]">Punjabi</li>
                            <li className="py-1 px-2 cursor-pointer  hover:bg-[#F0F3F3]">Science</li>
                            <li className="py-1 px-2 cursor-pointer  hover:bg-[#F0F3F3]">Math</li>
                            <li className="py-1 px-2 cursor-pointer  hover:bg-[#F0F3F3]">Chemistry</li>
                        </ul>
                    </div>
                    <div className="flex-1">

                        {list.map((item, index) => {
                            return (
                                <div className={`flex items-start gap-2 p-2 border-t ${index % 2 == 0 ? "bg-[#FCF9FC]" : ""}`} key={index}>
                                    <div className="flex-1">
                                        <h5 className={`cursor-pointer text-lg text-[#0b3a67] ${roboto5.className}`}>Fiqh us sunnah : Funerals and Dhikr / As Sayyid Sabiq</h5>
                                        <h6 className="py-2"> By: Allama Iqbal</h6>
                                        <ul className="text-sm">
                                            <li>Publisher: <span className="text-gray-500">urdu science acadmy </span></li>
                                            <li>Subject:<span className="text-gray-500"> Urdu </span></li>
                                            <li>Call Number:<span className="text-gray-500"> 923.56</span></li>
                                        </ul>
                                    </div>
                                    <div className="w-32 md:w-40">
                                        <Image src={img1} className="w-full h-full object-cover rounded" />
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Library;