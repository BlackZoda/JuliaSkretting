import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/JSPlain.svg"

const Logo = () => {
    return (
        <Link href="/" className="flex items-center text-dark dark:text-light">
            <div className="w-16 lg:w-12 overflow-hidden mr-1 md:mx-2">
                <Image src={profileImg} alt="Julia Skretting"
                        className="w-full rounded-sm h-auto p-1"
                        priority
                        size="40vw" />
            </div>
            <span className="font-pd mb-2 text-xl md:text-2xl">
                <span className="italic text-accent dark:text-accentDark">Julia</span>Skretting
            </span>
        </Link>
    )
}

export default Logo;
