import { SunIcon, MoonIcon } from '../icons';
import { useThemeSwitch } from '../Hooks/useThemeSwitch';
import Link from 'next/link';


const StandardMenu = () => {

    const [mode, setMode] = useThemeSwitch();

    return (
        <>
            <nav className="w-max py-2 px-2 md:px-4 sm:mt-1 border border-solid border-dark dark:border-light
                    rounded-full text-sm md:text-base lg:text-lg capitalize hidden sm:flex
                    items-center fixed top-5 right-1/2 translate-x-1/2 bg-light/80 dark:bg-dark/80
                    backdrop-blur-sm z-50 text-dark dark:text-light">
                <Link href="/" className="hover:text-accent dark:hover:text-accentDark ml-1">Home</Link>
                <Link href="/categories/all" className="mx-3 lg:mx-4 hover:text-accent dark:hover:text-accentDark">Categories</Link>
                <Link href="/about" className="mx-0 hover:text-accent dark:hover:text-accentDark">About</Link>
                <Link href="http://www.abusdal.pro" target="_blank"
                        className="mx-3 lg:mx-4 hover:text-accent dark:hover:text-accentDark">CV</Link>
                <button className="hover:text-accent dark:hover:text-accentDark"
                        type="button"
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                        { mode === "light" ? <MoonIcon /> : <SunIcon /> }
                </button>
            </nav>
        </>
    )
}

export default StandardMenu;
