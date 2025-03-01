import React from "react";
import Link from "next/link";

const Footer = () => {
    
    return (
        <footer className="mt-16 py-3 px-5 rounded-2xl bg-dark/90 dark:bg-goldenDark m-5 sm:m-10 
                flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-0 
                text-light dark:text-dark text-xs sm:text-sm
                sm:flex-wrap md:flex-nowrap sm:justify-center md:justify-between">
                <span className="text-center sm:w-full md:w-auto">&copy; 2025 Julia Skretting. All rights reserved.</span>
                <Link href="/sitemap.xml" className="text-center underline sm:w-1/2 md:w-auto">sitemap.xml</Link>
                <div className="text-center md:w-auto">
                    Designed and maintained by <a href="#" className="text-center hover:underline">Ivar Alexander Abusdal</a>
                </div>
        </footer>
    );
};

export default Footer;
