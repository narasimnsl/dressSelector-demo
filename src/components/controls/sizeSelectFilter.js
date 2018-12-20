import React from 'react';
/* Function component to handle Select Dropdown List Render*/
const sizeFilter = (props) => {

    function renderOptions(list,key) {
        let val = ''
        if(key!==0){
            val = list
        }
        return (
            <option key= {key} value={val}>{list}</option>
        );
    }

    return(
        <div>
            <select  className="filterList" onChange={props.change}>
                {/* map thelist element to create select choices */}
                {props.selFilterList.map(renderOptions)}
            </select>
        </div>
    )
}

export default sizeFilter;