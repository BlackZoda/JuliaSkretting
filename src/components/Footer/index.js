"use client"

import React from "react";
import { useForm } from 'react-hook-form';
import { LinkedinIcon, GithubIcon } from "../icons";
import Link from "next/link";
import siteMetaData from "../../utils/siteMetaData";

const Footer = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => console.log(data);

    console.error(errors);
    
    return (
        <footer className="mt-16 rounded-2xl bg-dark/90 dark:bg-goldenDark m-5 sm:m-10 flex flex-col
                items-center text-light dark:text-dark">
            <h3 className="font-sx mt-16 font-medium text-center dark:font-bold capitalize text-2xl
                    xs:text-3xl sm:text-4xl lg:text-5xl">
                Enigma Bulletin
            </h3>
            <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium
                    text-sm sm:text-base">
                Subscribe to learn more and get notified about new updates.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 w-fit
                    xs:min-w-[400px] lg:min-w-[600px]
                    flex items-stretch bg-light dark:bg-dark/80 p-1 sm:p-2 rounded mx-2">
                <input type="email"
                        placeholder="Enter your email"
                        {...register("email", { required: true, maxLength: 80 })}
                        className="w-full bg-transparent pl-2 text-dark dark:text-light focus:border-dark
                                focus:ring-0 border-0 border-b mr-2 pb-1" />

                <input type="submit" className="bg-dark dark:bg-light text-light dark:text-dark
                        cursor-pointer font-medium rounded px-3 sm:px-5 py-1" />
            </form>
            <div className="h-12 w-60 bg-red-800 rounded-xl mt-6">
               <p className="block text-light text-lg mt-2 text-center font-black">Not implemented yet!</p> 
            </div>
            <div className="flex items-center mt-8">
                <a href={siteMetaData.linkedin} target="_blank" rel="noreferrer"
                        className="inline-block w-6 h-6 mr-4">
                    <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
                </a>
                <a href={siteMetaData.github} target="_blank" rel="noreferrer" className="inline-block w-6 h-6 mr-4 fill-white">
                    <GithubIcon className="fill-light dark:fill-dark hover:scale-125 transition-all ease duration-200" />
                </a>
            </div>
            <div className="w-full mt-12 md:mt-18 relative font-medium border-t border-solid
                    border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between
                    text-xs md:text-sm xl:text-base">
                <span className="text-center">&copy; 2023 Ivar A. Abusdal. All rights reserved.</span>
                <Link href="/sitemap.xml" className="text-center underline py-2 md:py-0">
                    sitemap.xml
                </Link>
                <div className="text-center">
                    Made with &#x1F608; by <a href="http://abusdal.pro" className="text-center">
                    Ivar Alexander Abusdal
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
