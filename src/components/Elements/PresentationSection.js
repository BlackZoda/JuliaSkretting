import React from 'react';
import ItemList from './ItemList';
import Heading from './Heading';

const PresentationSection = ({ title, items }) => {
    return (
        <section>
            <Heading level={4}>{title}</Heading>
            <ItemList items={items} />
        </section>
    );
};

export default PresentationSection;