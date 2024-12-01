import { useState } from "react";
import Link from "./Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
      ];
      
      const [open, setOpen] = useState(false);


    return (
        <nav className="bg-blue-500">
            <div className="md:hidden p-6" onClick={()=>{setOpen(!open)}}>
                {
                    open? <AiOutlineClose className="cursor-pointer"/>:<AiOutlineMenu className="cursor-pointer"/>
                }
            </div>
            <ul className={`mx-auto w-full absolute bg-blue-500 duration-500
                ${open? 'left-0':'-left-full'}
                md:flex md:w-10/12 md:justify-between md:relative md:left-0`}>
                {
                    routes.map((route) => (
                        <Link key={route.id} route={route} />
                    ))
                }
            </ul>
        </nav>
    );
};

export default Nav;