import { Roboto } from 'next/font/google';

const roboto3 = Roboto({
    weight: '300',
    subsets: ['latin'],
});
const roboto4 = Roboto({
    weight: '400',
    subsets: ['latin'],
});

const roboto5 = Roboto({
    weight: '500',
    subsets: ['latin'],
});

const FeatureSection = () => {

    return (
        <div className="container mx-auto py-6  px-3 md:px-10">
            <h4 className={`text-center uppercase text-xl md:text-3xl text-[#0b3a67] py-4 relative after:absolute after:bottom-0 after:left-1/2 after:contents-'' after:w-2 after:h-2 after:border-t-2 after:border-l-2 after:border-[#0B3A67] after:rotate-45 ${roboto4.className}`}>Our Features</h4>
            <div className="flex  justify-around lg:justify-between mt-3 mb-6 flex-wrap">
                <div className="w-full md:w-72 lg:w-72 xl:w-96 mt-3 bg-white p-6 cursor-pointer hover:rounded-lg hover:shadow-lg transition-all duration-100 ease-in">
                    <div className="text-5xl text-[#0B3A67]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m8.58 17.25l.92-3.89l-3-2.58l3.95-.37L12 6.8l1.55 3.65l3.95.33l-3 2.58l.92 3.89L12 15.19zM12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8" /></svg>
                    </div>
                    <h5 className={`font-bold text-xl py-3 ${roboto5.className}`}>Better Future</h5>
                    <p className={`${roboto3.className} text-gray-500`}>GACPB  believes in positive competition and fair play. The honor lies with ITM, as it is the only institution in Sargodha region which is affiliated with four renowned universities of Pakistan</p>
                </div>
                <div className="w-full md:w-72 lg:w-72 xl:w-96 mt-3 bg-white p-6 cursor-pointer hover:rounded-lg hover:shadow-lg transition-all duration-100 ease-in">
                    <div className="text-5xl text-[#0B3A67]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M464 72H48a32.036 32.036 0 0 0-32 32v304a32.036 32.036 0 0 0 32 32h416a32.036 32.036 0 0 0 32-32V104a32.036 32.036 0 0 0-32-32m0 336H48V104h416l.02 304Z" /><path fill="currentColor" d="M232 184h184v32H232zm-56 72h240v32H176zm0 72h240v32H176zM88.923 144v128.923l99.172-69.42z" /></svg>
                    </div>
                    <h5 className={`font-bold text-xl py-3 ${roboto5.className}`}>Qualified Trainers</h5>
                    <p className={`${roboto3.className} text-gray-500`}>GACPB  believes in positive competition and fair play. The honor lies with ITM, as it is the only institution in Sargodha region which is affiliated with four renowned universities of Pakistan</p>
                </div>
                <div className="w-full md:w-72 lg:w-72 xl:w-96 mt-3 bg-white p-6 cursor-pointer hover:rounded-lg hover:shadow-lg transition-all duration-100 ease-in">
                    <div className="text-5xl text-[#0B3A67]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M13.5 10.174v.012c-1.393.72-2.81.247-4.959-.585l-.17-.066C6.763 8.91 4.685 8.105 2.5 8.63V2.814c1.393-.72 2.81-.247 4.959.585l.17.066c1.607.624 3.685 1.43 5.871.904zM8 11c-1.83-.708-3.659-1.416-5.5-.81v4.06a.75.75 0 0 1-1.5 0V2C3.35.2 5.675 1.1 8 2c1.83.708 3.659 1.416 5.5.81A5 5 0 0 0 15 2v9c-2.35 1.8-4.675.9-7 0" clip-rule="evenodd" /></svg>                    </div>
                    <h5 className={`font-bold text-xl py-3 ${roboto5.className}`}>Job Oppurtunity</h5>
                    <p className={`${roboto3.className} text-gray-500`}>GACPB  believes in positive competition and fair play. The honor lies with ITM, as it is the only institution in Sargodha region which is affiliated with four renowned universities of Pakistan</p>
                </div>
            </div>
        </div>
    )
}
export default FeatureSection;