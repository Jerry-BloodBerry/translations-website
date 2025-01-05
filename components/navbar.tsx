import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="h-10 bg-transparent pt-4 pb-10 px-8">
            <div className="flex justify-center md:justify-between">
                <ul className="list-none flex gap-8 text-black font-bold">
                    <li>
                        <Link href={"/"} className="hover:text-[#CE2939] transition-colors duration-150">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/about"} className="hover:text-[#CE2939] transition-colors duration-150">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href={"/projects"} className="hover:text-[#CE2939] transition-colors duration-150">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href={"/contact"} className="hover:text-[#CE2939] transition-colors duration-150">
                            Contact
                        </Link>
                    </li>
                </ul>
                <ul className="hidden md:flex">
                    <li>
                        <a href={`tel:+48 123 456 789`}>Call Us: (+48) 123 456 789</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
