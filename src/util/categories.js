import React from 'react';

const CATEGORIES = [
        'ENTERTAINMENT',
        'FOOD',
        'LIFESTYLE',
        'MISCELLANEOUS',
        'SURVEY',
        'TECHNOLOGY'
];

export const getCategoryOption = () => {
        return CATEGORIES.map((category, i) =>
        <option key={i} value={i}>{category}</option>
    );
 }

 export default CATEGORIES;
