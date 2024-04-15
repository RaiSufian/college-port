import Image from 'next/image';
import Img1 from '../../../public/assets/img1.jpg';

const AboutUs = () => {
    return (
        <div className="py-4">
            <div className="container mx-auto flex px-3 md:px-20">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 py-3">
                        <Image src={Img1} alt="adv image" className="h-full object-cover" />
                    </div>
                    <div className="w-full lg:w-1/2  md:px-8 py-3">
                        <h4 className="text-2xl">Message of principle</h4>
                        <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <br />  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                        </p>
                        <h6 className="py-2 text-lg">Muhammad Kamran Malik</h6>
                        <span className="text-lg font-semibold">Principle</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/3 p-4 md:p-8 lg:p-16 min-h-52 relative bg-yellow-400">
                    <h5 className="text-2xl mb-4">Educational Goals</h5>
                    <p className="relative z-10 text-sm text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <svg className="absolute text-opacity-50 text-gray-500 right-6 bottom-2 z-0" xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 20 20"><path fill="currentColor" d="M11.078 0c.294 0 .557.183.656.457l.706 1.957c.253.063.47.126.654.192c.201.072.46.181.78.33l1.644-.87a.702.702 0 0 1 .832.131l1.446 1.495c.192.199.246.49.138.744l-.771 1.807c.128.235.23.436.308.604c.084.183.188.435.312.76l1.797.77c.27.115.437.385.419.674l-.132 2.075a.69.69 0 0 1-.46.605l-1.702.605c-.049.235-.1.436-.154.606a8.79 8.79 0 0 1-.298.774l.855 1.89a.683.683 0 0 1-.168.793l-1.626 1.452a.703.703 0 0 1-.796.096l-1.676-.888a7.23 7.23 0 0 1-.81.367l-.732.274l-.65 1.8a.696.696 0 0 1-.64.457L9.11 20a.697.697 0 0 1-.669-.447l-.766-2.027a14.625 14.625 0 0 1-.776-.29a9.987 9.987 0 0 1-.618-.293l-1.9.812a.702.702 0 0 1-.755-.133L2.22 16.303a.683.683 0 0 1-.155-.783l.817-1.78a9.517 9.517 0 0 1-.302-.644a14.395 14.395 0 0 1-.3-.811L.49 11.74a.69.69 0 0 1-.49-.683l.07-1.921a.688.688 0 0 1 .392-.594L2.34 7.64c.087-.319.163-.567.23-.748a8.99 8.99 0 0 1 .314-.712L2.07 4.46a.683.683 0 0 1 .15-.79l1.404-1.326a.702.702 0 0 1 .75-.138l1.898.784c.21-.14.4-.253.572-.344c.205-.109.479-.223.824-.346l.66-1.841A.696.696 0 0 1 8.984 0zm-1.054 7.019c-1.667 0-3.018 1.335-3.018 2.983c0 1.648 1.351 2.984 3.018 2.984c1.666 0 3.017-1.336 3.017-2.984s-1.35-2.983-3.017-2.983" /></svg>
                </div>
                <div className="w-full lg:w-1/3 p-4 md:p-8 lg:p-16 min-h-52 relative bg-[#0B3A67] text-white">
                    <h5 className="text-2xl mb-4">Our Mission</h5>
                    <p className="relative text-sm text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="w-full lg:w-1/3 p-4 md:p-8 lg:p-16 min-h-52 relative bg-yellow-400">
                    <h5 className="text-2xl mb-4">Educational Goals</h5>
                    <p className="relative text-sm text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <svg className="absolute text-opacity-50 text-gray-500 left-6 bottom-2 z-0" xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 20 20"><path fill="currentColor" d="M3.33 8L10 12l10-6l-10-6L0 6h10v2zM0 8v8l2-2.22V9.2zm10 12l-5-3l-2-1.2v-6l7 4.2l7-4.2v6z" /></svg>
                </div>
            </div>
            <div className="container mx-auto flex flex-wrap py-6 px-3 md:px-20">
                <div className="w-full lg:w-1/2 p-2 md:p-5">
                    <h5 className="text-3xl py-2">Our Philosophy</h5>
                    <p>We believe that every student is capable of reaching great academic heights if teachers and parents provide him/her with the opportunity, confidence and right guidance. Teachers, however, play the dominant role in helping students reach the pinnacle of knowledge and preparing them for the competition that lies ahead in life. This is why KIMS takes great pride in introducing its family of highly qualified, experienced and dedicated teachers. We undertake every possible effort to bring about improvements in not only the performance of our students but also our teachers by arranging various workshops and training programmes for them. Our aim is to prepare students for some of the most prestigious universities worldwide and the most lucrative careers in life. At the same time, we believe that the secret of quality education extends beyond the field of academics; it involves developing a host of personality traits that make a complete, responsible citizen. We, therefore, offer a variety of extracurricular activities that groom our young individuals and help them emerge with well rounded personalities</p>
                </div>
                <div className="w-full lg:w-1/2 p-2 md:p-5">
                    <h5 className="text-3xl py-2">Our Philosophy</h5>
                    <p>We believe that every student is capable of reaching great academic heights if teachers and parents provide him/her with the opportunity, confidence and right guidance. Teachers, however, play the dominant role in helping students reach the pinnacle of knowledge and preparing them for the competition that lies ahead in life. This is why KIMS takes great pride in introducing its family of highly qualified, experienced and dedicated teachers. We undertake every possible effort to bring about improvements in not only the performance of our students but also our teachers by arranging various workshops and training programmes for them. Our aim is to prepare students for some of the most prestigious universities worldwide and the most lucrative careers in life. At the same time, we believe that the secret of quality education extends beyond the field of academics; it involves developing a host of personality traits that make a complete, responsible citizen. We, therefore, offer a variety of extracurricular activities that groom our young individuals and help them emerge with well rounded personalities</p>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;