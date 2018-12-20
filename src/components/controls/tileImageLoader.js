import React from 'react';
import ImageLoader from 'react-loading-image';
import Spinner from 'react-spinkit';
const SpinStyle={left:'50%'}

const tileImageLoader = (props) => {
    
    return(
        <div className="tilesContainer">
            {/* Image loader which displays Spinner as Image is loading and 
            shows Error if Image is not loaded */}
            <ImageLoader 
                src={props.imgsource}
                loading={() => <Spinner style={SpinStyle} name="ball-clip-rotate-multiple" color="gray"/>}
                error={() => <div className="errorImgLoad">Error</div>}
            />
        </div>    
    )

}

export default tileImageLoader;