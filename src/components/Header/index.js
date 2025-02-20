"use client"
import Logo from './logo';
import HamburgerMenu from './HamburgerMenu';
import StandardMenu from './StandardMenu';
import SocialMenu from './SocialMenu';

const Header = () => {


    return (
        <header className="w-full p-6 px-5 sm:px-10 flex items-center justify-between">
            
            <Logo />
            <HamburgerMenu />
            <StandardMenu />
            <SocialMenu />

        </header>
    )
}

export default Header;
