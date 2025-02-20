
import Link from 'next/link'
import React from 'react'
import { cx } from '@/src/utils'

const Category = ({link="#", name, active, ...props}) => {
    return (
        <Link href={link}
                className={cx(
                    "inline-block py-1 md:py-2 px-5 md:px-10 rounded-full m-2 \
                    border-2 border-solid border-dark dark:border-light \
                    hover:scale-105 transition-all ease duration-200",
                    props.className,
                    active ? "bg-dark dark:bg-light text-light dark:text-dark" :
                            "bg-light dark:bg-dark text-dark dark:text-light")} >
            #{name}
        </Link>
    )
}

export default Category
