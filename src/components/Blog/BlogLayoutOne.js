import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";
import Image from "next/image";
import { slug } from "github-slugger";

const BlogLayoutOne = ({blog}) => {
    return (
        <div className="group inline-block overflow-hidden rounded-xl">
            <div className="absolute top-0 left-0 bottom-0 right-0 h-full
                    bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10" />
            <Image src={blog.image.filePath.replace("../public", "")}
                placehoder='blur'
                blurDataURL={blog.image.blurhashDataUrl}
                alt={blog.title}
                width={blog.image.width}
                height={blog.image.height}
                className="aspect-square sm:aspect-auto w-full h-full object-cover object-center rounded-xl
                        group-hover:scale-105 transition-all ease duration-300"/>

            <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
                <Tag link={`/categories/${slug(blog.tags[0])}`}
                        name={blog.tags[0]}
                        className="px-6 text-xs sm:text-sm py-1 sm:py-2 !border" />
                <Link href={blog.url} className="mt-6">
                    <h2 className="font-bold capitalize text-base xs:text-lg sm:text-xl
                            md:text-2xl text-light mt-2 sm:mt-4">
                        <span className="bg-gradient-to-r from-accent dark:from-accentDark
                                to-accent dark:to-accentDark bg-[length:0px_3px]
                                md:bg-[length:0px_6px] group-hover:bg-[length:100%_3px]
                                md:group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat
                                transition-[background-size] duration-500">
                            {blog.title}
                        </span> 
                    </h2>
                </Link>
            </div>
        </div>
    )
}

export default BlogLayoutOne;
