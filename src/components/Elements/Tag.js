import Link from 'next/link'
import React from 'react'
import { cx } from '../../utils'

const Tag = ({link="#", name, ...props}) => {
    return (
        <Link href={link}
                className={cx(
                    "inline-block py-2 sm:py-3 px-5 sm:px-10 bg-dark text-light rounded-full \
                    uppercase font-semibold border-2 border-solid border-light \
                    hover:scale-105 transition-all ease duration-200 text-sm sm:text-base",
                props.className)} >
            {name}
        </Link>
    )
}

export default Tag
