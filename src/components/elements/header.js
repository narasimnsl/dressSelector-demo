import React from 'react';
import SizeSelectFilter from '../controls/sizeSelectFilter'

const header = (props) => {

    return(
        <div className="HeaderContainer">
            <div className= "leftItem">
                <h1>Women's tops</h1>
            </div>
            <div className= "rightItem">
                 {/* Size Slector Filter on the right of the top Nav */}
                <SizeSelectFilter change={props.change} selFilterList={props.filterList} />
            </div>
        </div>    
    )

}

export default header;