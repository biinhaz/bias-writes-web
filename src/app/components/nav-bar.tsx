import React from "react";
import Image from "next/image";
import PFP from "../assets/pfp.png"

export default function Navbar() {
    return (
        <nav className="fixed z-10 bg-white w-full p-10">
        <div className="flex items-center text-xl justify-between">
            <p className="font-semibold">Bia's Blog</p>
            <div className="flex gap-7 ml-auto items-center">
            <p>Blog</p>
            <p>Projects</p>
            <p>About</p>
            <div className="rounded-full w-10 h-10 overflow-hidden">
                <Image
                src={PFP}
                alt="Profile Picture"
                />
            </div>
            </div>
        </div>
        </nav>
    );
}
