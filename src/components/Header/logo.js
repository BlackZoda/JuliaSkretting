import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/JSPlain.svg"

const Logo = () => {
    return (
        <Link href="/" className="flex items-center text-dark dark:text-light">
            <div className="w-12 md:w-14 lg:w-16 overflow-hidden mr-1 md:mx-2">
                <Image src={profileImg} alt="Julia Skretting"
                        className="w-full rounded-sm h-auto p-1"
                        priority
                        size="40vw" />
            </div>
            <span className="font-pd mb-2 mt-1 md:mt-0 text-xl md:text-2xl lg:text-3xl">
                <span className="italic text-accent dark:text-accentDark">Julia</span>Skretting
            </span>
        </Link>
    )
}

export default Logo;
