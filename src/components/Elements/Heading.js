import React from 'react';

const Heading = ({ level, children }) => {
    const Tag = `h${level}`;

    const level2Styles = "w-full font-pd font-bold capitalize text-2xl sm:text-3xl lg:text-4xl text-accent dark:text-accentDark mb-3";
    const level3Styles = "font-pd mt-5 mb-5 text-xl sm:text-2xl lg:text-3xl font-semibold text-accent dark:text-accentDark my-6";
    const level4Styles = "font-semibold text-base sm:text-lg lg:text-xl text-dark dark:text-light my-4";

    return (
        <Tag className={level === 4 ? level4Styles : level === 3 ? level3Styles : level2Styles}>
            {children}
        </Tag>
    );
};

export default Heading;