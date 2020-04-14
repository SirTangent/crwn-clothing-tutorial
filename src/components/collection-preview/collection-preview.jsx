import React from "react";

import CollectionItem from "../collection-item/collection-item";

import './collection-preview.scss'

const CollectionPreview = ({title, items, prevLimit}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, idx) => idx < prevLimit)
                    .map(({id, ...other}) => (
                        <CollectionItem key={id} {...other}/>
                    ))
            }
        </div>
    </div>
);

export default CollectionPreview;