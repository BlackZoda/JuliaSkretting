import React from 'react';

const PresentationTable = ({ columns, data }) => {
    return (
        <table className="min-w-full divide-y divide-dark/40 dark:divide-light/40">
            <thead>
                <tr className="text-accent dark:text-accentDark">
                    {columns.map((column, index) => (
                        <th key={index} className="px-6 py-3 text-left text-base font-bold text-gray-300 uppercase tracking-wider">
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-gray-900 dark:bg-gray-800 divide-y divide-dark/20 dark:divide-light/20">
                {data.map((item, index) => (
                    <tr key={index}>
                        {columns.map((column, colIndex) => (
                            <td key={colIndex} className="px-6 py-4 text-sm text-dark dark:text-light break-words">
                                {item[column.toLowerCase().replace(/\s+/g, '_')]} {/* Assuming keys in data are in snake_case */}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PresentationTable;