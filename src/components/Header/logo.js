import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/iaa_logo.svg"

const Logo = () => {
    return (
        <Link href="/" className="flex items-center text-dark dark:text-light">
            <div className="w-10 lg:w-12 rounded-full overflow-hidden mr-1 md:mx-2">
                <Image src={profileImg} alt="Ivar Alexander Abusdal"
                        className="w-full h-auto p-1 rounded-full bg-dark"
                        priority
                        size="33vw" />
            </div>
            <span className="font-sx mt-0.5 font-bold dark:font-semibold text-xl md:text-2xl">
                Ivar <span className="hidden md:inline lg:hidden">A.</span>
                <span className="inline sm:hidden lg:inline">Alexander</span> Abusdal
            </span>
        </Link>
    )
}

export default Logo;
