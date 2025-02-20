"use client"

import React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';


const mdxComponents = {
    Image
}

const RenderMdx = ({blog}) => {

    const MDXContent = useMDXComponent(blog.body.code);

    return (
        <div className="col-span-12 lg:col-span-8 font-in 
                prose sm:prose-base md:prose-lg max-w-max
                prose-img:rounded-xl prose-em:tracking-wider
                prose-em:font-sx prose-em:prose-xl prose-em:leading-snug
                prose-blockquote:font-sx prose-headings:font-sx
                prose-headings:text-accent dark:prose-headings:text-accentDark
                prose-blockquote:bg-accent/20 prose-blockquote:p-2
                prose-blockquote:px-6 prose-blockquote:border-accent
                prose-blockquote:not-italic prose-blockquote:rounded-r-lg
                prose-li:marker:text-accent dark:prose-invert
                dark:prose-blockquote:bg-accentDark/20
                dark:prose-blockquote:border-accentDark
                dark:prose-li:marker:text-accentDark
                first-letter:font-sx first-letter:text-5xl
                md:first-letter:text-6xl first-letter:inline-block
                first-letter:pt-[4px] first-letter:float-left
                first-letter:mr-2 first-letter:text-accent
                dark:first-letter:text-accentDark">

            <MDXContent components={mdxComponents} />
        </div>
    );
};

export default RenderMdx;
