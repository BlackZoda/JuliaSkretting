import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import { slug } from 'github-slugger';
import ViewCounter from './ViewCounter';

const BlogDetails = ({blog, slug: blogSlug}) => {
    return (
        <div className="px-2 lg:px-10 bg-accent/80 dark:bg-accentDark/80 text-light dark:text-dark
                py-2 flex items-center justify-around
                flex-wrap text-sm sm:text-lg md:text-xl font-medium mx-5 md:mx-10 rounded-lg">
            <time className="m-3">
                {format(parseISO(blog.publishedAt), "MMMM d, yyyy")}
            </time>
            <div className="m-3">
                {blog.readingTime.text}
            </div>
            <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
                #{blog.tags[0]}
            </Link>
        </div>
    )
}

export default BlogDetails;
