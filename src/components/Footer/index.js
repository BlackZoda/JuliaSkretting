import React from "react";
import Link from "next/link";

const Footer = () => {
    
    return (
        <footer className="mt-16 py-3 px-5 rounded-2xl bg-dark/90 dark:bg-goldenDark m-5 sm:m-10 flex flex-row
                items-center justify-between text-light dark:text-dark">
                <span className="text-center">&copy; 2025 Julia Skretting. All rights reserved.</span>
                <Link href="/sitemap.xml" className="text-center underline py-2 md:py-0">
                    sitemap.xml
                </Link>
                <div className="text-center">
                    Designed and maintained by <a href="#" className="text-center">
                    Ivar Alexander Abusdal
                    </a>
                </div>
        </footer>
    );
};

export default Footer;
