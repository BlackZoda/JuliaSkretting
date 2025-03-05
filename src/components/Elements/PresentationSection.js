import React from 'react';
import ItemList from './ItemList';
import Heading from './Heading';

const PresentationSection = ({ title, children }) => {
    return (
        <section>
            <Heading level={4}>{title}</Heading>
            <ItemList>{children}</ItemList>
        </section>
    );
};

export default PresentationSection;