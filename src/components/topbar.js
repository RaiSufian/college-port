import { Inter } from 'next/font/google'

const inter = Inter({ weight: '400', subsets: ['latin'] })

const Topbar = () => {

    return (
        <div className=" bg-yellow-400 flex justify-center text-white py-1">
            <div className="container px-3 md:px-10">
                <div className="flex text-xs justify-center md:justify-between">
                    <div className={`${inter.className} hidden md:block`}>WORKING HOURS: MON to SAT (8 AM TO 6 PM)</div>
                    <div className="">
                        <ul className="flex gap-5">
                            <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="m20.33 21.48l2.24-2.24a2.19 2.19 0 0 1 2.34-.48l2.73 1.09a2.18 2.18 0 0 1 1.36 2v5A2.17 2.17 0 0 1 26.72 29C7.59 27.81 3.73 11.61 3 5.41A2.17 2.17 0 0 1 5.17 3H10a2.16 2.16 0 0 1 2 1.36l1.09 2.73a2.16 2.16 0 0 1-.47 2.34l-2.24 2.24s1.29 8.73 9.95 9.81"/></svg>
                                <a href="phoneto:+923001234567">+923001234567</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 100 100"><path fill="currentColor" d="M85.944 20.189H14.056a2.559 2.559 0 0 0-2.556 2.557v5.144c0 .237.257.509.467.619l37.786 21.583a.63.63 0 0 0 .318.083a.634.634 0 0 0 .324-.088L87.039 28.53c.206-.115.752-.419.957-.559c.248-.169.504-.322.504-.625v-4.601a2.559 2.559 0 0 0-2.556-2.556m2.237 15.457a.644.644 0 0 0-.645.004L66.799 47.851a.637.637 0 0 0-.145.985l20.74 22.357a.632.632 0 0 0 .467.204a.64.64 0 0 0 .639-.639V36.201a.638.638 0 0 0-.319-.555M60.823 51.948a.636.636 0 0 0-.791-.118l-8.312 4.891a3.243 3.243 0 0 1-3.208.021l-7.315-4.179a.64.64 0 0 0-.751.086L12.668 78.415a.64.64 0 0 0 .114 1.02c.432.254.849.375 1.273.375h71.153a.635.635 0 0 0 .585-.385a.635.635 0 0 0-.118-.689zm-26.489-2.347a.639.639 0 0 0-.115-1.023L12.453 36.146a.638.638 0 0 0-.953.556v32.62a.637.637 0 0 0 1.073.468z" /></svg>
                                <a href="mailto:govcollege@gmail.com">govcollege@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Topbar;