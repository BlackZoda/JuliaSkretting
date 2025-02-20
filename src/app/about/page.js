import Image from 'next/image';
import React from 'react';
import profileCharacter from "@/public/ivaricon.svg";
import Link from 'next/link';

export const metadata = {
    title: "About Me",
    descriptio: "Here are some details about myself.",
}

export default function About() {
    
    return (
        <section className="w-full h-auto border-y-2 border-solid border-dark
                dark:border-light flex flex-col md:flex-row items-center justify-center
                text-dark dark:text-light">
            <div className="md:w-1/2 justify-center flex">
                <div className="h-full w-full my-10 mx-10 rounded-2xl overflow-hidden">
                    <Image src={profileCharacter} alt="Ivar A. Abusdal"
                        className="h-full w-full object-contain object-center"
                        />
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col text-left items-start
                    justify-center p-5 xs:p-10 lg:px-16">
                <h2 className="font-bold capitalize text-xl sm:text-2xl lg:text-4xl
                        text-center md:text-left">
                    I&apos;m a fullstack developer, illustrator and graphic designer
                </h2>
                <p className="font-medium mt-4 text-sm sm:text-base text-center md:text-left">
                    I&apos;m a full stack developer with experience in C#, Python,
                    and JavaScript, frameworks such as ASP.NET, React and Next.js, database
                    solutions such as MS SQL Server and CosmosDB, and cloud providers
                    like Azure. I&apos;m a quick learner and collaborate closely with
                    clients to create efficient, scalable, and user-friendly solutions
                    that solve real-world problems. I also have many years of experience
                    with illustration and graphic design.
                </p>
                <p className="font-medium mt-4 text-sm text-center md:text-left">
                    Check out my <Link href="http://www.abusdal.pro"
                        className="text-accent dark:text-accentDark underline-offset-2 underline"
                        target="_blank" rel="noreferrer">
                    CV</Link> for more information about me and how to get in contact.
                </p>
            </div>
        </section>
    )
}
