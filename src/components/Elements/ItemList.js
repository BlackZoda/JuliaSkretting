import React from 'react';

const ItemList = ({ items }) => {
    return (
        <ul className="list-disc list-inside text-dark text-xs sm:text-sm lg:text-base dark:text-light
                leading-4 sm:leading-5 lg:leading-6 space-y-1 sm:space-y-2 lg:space-y-3">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default ItemList;