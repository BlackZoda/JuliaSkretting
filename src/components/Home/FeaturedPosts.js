import { sortBlogs } from '../../utils';
import React from 'react';
import BlogLayoutOne from '../Blog/BlogLayoutOne';
import BlogLayoutTwo from '../Blog/BlogLayoutTwo';

const FeaturedPosts = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);

    return (<section className="w-full mt-16 sm:mt-20 md:mt-32 px-5 sm:px-10
                md:px-16 xsl:px-24 flex flex-col items-center">
        <h2 className="font-sx w-full inline-block font-bold capitalize text-2xl
                xs:text-3xl sm:text-4xl md:text-5xl text-accent dark:text-accentDark
                ml-6 sm:ml-12 lg:ml-20">
            Sorcerer's Picks
        </h2>

        <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16">
            <article className="col-span-2 lg:col-span-1 row-span-2 relative">
                <BlogLayoutOne blog={sortedBlogs[1]} />
            </article>
            <article className="col-span-2 xs:col-span-1 row-span-1 relative">
                <BlogLayoutTwo blog={sortedBlogs[2]} />
            </article>
            <article className="col-span-2 xs:col-span-1 row-span-1 relative">
                <BlogLayoutTwo blog={sortedBlogs[3]} />
            </article>
        </div>
    </section>)
}

export default FeaturedPosts;
