import React from 'react';
import TileImageLoader from '../controls/tileImageLoader'
import Conditional from '../../hoc/conditional'

const shirtList = (props) => {
    let shirtDetails = props.list
    let img_src = require(`../../images/Products/${shirtDetails.productImage}`);
    return(
        // Individual Tiles creator
        <div className="shirtTiles">
                {/* Center Image */}
                <center>
                    <div className="imageContainer" >
                         <TileImageLoader imgsource={img_src}/>
                    </div>
                   
                </center>
                {/* Sales and Exclusive Info show based on Conditions*/}
                <div className="sale_Info_holder">
                    <Conditional if={shirtDetails.isSale}>
                        <span className="saleItem">Sale</span>
                    </Conditional>
                    <Conditional if={shirtDetails.isExclusive}>
                        <span className="exclusiveItem">Exclusive</span>
                    </Conditional>
                </div>
                {/* Product Name and Price Info */}
                <div className="tile_txt_holder">
                    <div className= "leftItem">
                        <div>{shirtDetails.productName}</div>
                    </div>
                    <div className= "rightItem">
                        {shirtDetails.price}
                    </div>
                </div>
        </div>
            
    )

}

export default shirtList;