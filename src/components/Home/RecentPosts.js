import { sortBlogs } from '../../utils';
import Link from 'next/link';
import React from 'react';
import BlogLayoutThree from '../Blog/BlogLayoutThree';

const RecentPosts = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);

    return (<section className="w-full mt-16 pb-10 sm:mt-20 md:mt-32 px-5 sm:px-10
                md:px-16 xsl:px-24 flex flex-col items-center">
        <div className="flex w-full justify-between">
            <h2 className="font-sx w-fit inline-block font-bold capitalize text-xl xs:text-3xl sm:text-4xl
                    md:text-5xl text-accent dark:text-accentDark ml-3 sm:ml-5 lg:ml-10">
                Enthralling Epistles
            </h2>
            <Link href="/categories/all" className="inline-block font-medium lowercase
                    text-accent dark:text-accentDark underline underline-offset-2
                    text-base md:text-lg mr-8 lg:mr-16">
                Explore the Entire Grimoire
            </Link>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6
                grid-rows-2 2xl:grid-rows-1
                gap-6 sm:gap-8 mt-16">
            {
                sortedBlogs.slice(4, 10).map((blog, index) => {
                    return (<article key={`${blog.title}-${index}`}
                        className="col-span-1 row-span-1 relative">
                            <BlogLayoutThree blog={blog} />
                        </article>)
                })
            } 
        </div>
    </section>);
};

export default RecentPosts;


