import Link from 'next/link'

const Menu = () => {
    return (
        <div className="flex justify-center relative">
            <div className="container px-3 md:px-10 pb-3">
                <ul className="flex">
                    <li className="px-3 text-lg font-medium">
                        <Link href="#">
                            Home
                        </Link>

                    </li>
                    <li className="px-3 text-lg font-medium">
                        <Link href="#">About </Link></li>
                    <li className="px-3 text-lg font-medium"><Link href="#"> labrary </Link> </li>
                    <li className="px-3 text-lg font-medium"><Link href="#">Staf</Link></li>
                    <li className="px-3 text-lg font-medium"> <Link href="#">Contect Us </Link></li>
                </ul>
                <div className="bg-[#0B3A67] flex py-3 px-4 gap-2 rounded">
                    <select className="w-40 rounded">
                        <option>Keyword </option>
                        <option>Title</option>
                        <option>Author</option>
                        <option>Description</option>
                    </select>
                    <form className="flex-1 flex">
                        <input type='text' placeholder='Seacrh library collection' className="flex-1 py-1 px-3 rounded-tl rounded-bl" />
                        <button className="w-28 rounded-br rounded-tr bg-[#e2e0e2]">Search</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
export default Menu;