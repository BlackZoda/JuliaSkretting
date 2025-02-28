import Image from 'next/image';
import React from 'react';
import profileCharacter from "@/public/juliaskretting.jpeg";
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
                    <Image src={profileCharacter} alt="Julian Skretting"
                        className="h-full w-full object-contain object-center"
                        />
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start
                    p-5 xs:p-10 lg:px-16">
                <h2 className="w-full font-pd font-bold capitalize text-xl sm:text-2xl
                      lg:text-4xl text-center md:text-left text-accent dark:text-accentDark">
                    Researcher &amp; Economist
                </h2>
                <p className="font-medium mt-4 text-sm sm:text-base text-center md:text-left">
                    I am a Researcher at Statistics Norway, in the Unit for Macroeconomics, and hold a part-time position as an Adjunct Researcher at BI Norwegian Business School in the Department of Economics.
                    Most of my time is spent on applied macroeconomics and business cycles analysis. 
                    My special interests include the interaction between macroeconomics, fiscal and monetary policies, and energy markets.
                </p>
            </div>
        </section>
    )
}
