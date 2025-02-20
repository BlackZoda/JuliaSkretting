import { useState } from 'react';
import { MoonIcon, SunIcon } from '../icons';
import Link from 'next/link';
import { useThemeSwitch } from '../Hooks/useThemeSwitch';


const HamburgerMenu = () => {

    const [click, setClick] = useState(false);

    const toggleBurgerMenu = () => {
        setClick(!click);
    }

    const [mode, setMode] = useThemeSwitch();

    return (
        <>
            <button type="button"
                    className="inline-block sm:hidden z-50 fixed right-10"
                    onClick={toggleBurgerMenu}
                    aria-label="Hamburger Menu">
                <div className="w-7 cursor-pointer transition-all ease duration-300">
                    <div className="relative">
                        <span className="absolute top-0 inline-block w-full h-1 bg-dark
                                dark:bg-light rounded transition-all ease duration-200"
                                style={{
                                    transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(8px)"
                                }}>&nbsp;</span>
                        <span className="absolute top-0 inline-block w-full h-1 bg-dark
                                dark:bg-light rounded transition-all ease duration-200" style={{
                                    opacity: click ? 0 : 1
                                }}>&nbsp;</span>
                        <span className="absolute top-0 inline-block w-full h-1 bg-dark
                                dark:bg-light rounded transition-all ease duration-200"
                                style={{
                                    transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-8px)"
                                }}>&nbsp;</span>
                    </div>
                </div>
            </button>
            <nav className="w-max py-3 px-5 border border-solid border-dark dark:border-light
                    rounded-3xl text-lg top-20 capitalize flex flex-col sm:hidden items-center
                    fixed translate-x-1/2 bg-light/80 dark:bg-dark/80 backdrop-blur-sm z-50
                    transition-all ease duration-500 text-dark dark:text-light"
                    style={{
                        right: click ? "6rem" : "-15rem"
                    }}>
                <Link href="/" className="hover:text-accent dark:hover:text-accentDark mt-1">Home</Link>
                <Link href="/categories/all" className="my-2 hover:text-accent dark:hover:text-accentDark">Categories</Link>
                <Link href="/about" className="my-0 hover:text-accent dark:hover:text-accentDark">About</Link>
                <Link href="http://www.abusdal.pro" target="_blank"
                        className="my-2 hover:text-accent dark:hover:text-accentDark font-semibold">CV</Link>
                <button className="my-1 hover:text-accent dark:hover:text-accentDark"
                        type="button"
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                        { mode === "light" ? <MoonIcon /> : <SunIcon /> }
                </button>
            </nav>
        </>
    )
}

export default HamburgerMenu;
