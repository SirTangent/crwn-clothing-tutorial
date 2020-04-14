import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview";
import LIST_HATS from "../../data/list-hats";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: LIST_HATS,
            prevLimit: 4
        }
    }

    render() {
        const {collections, prevLimit} = this.state;
        return <div className='shop-page'>
            {
                collections.map(({id, ...other}) => (
                <CollectionPreview key={id} prevLimit={prevLimit} {...other}/>
                ))
            }
        </div>
    }

}

export default ShopPage;