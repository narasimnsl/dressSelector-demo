import React, {Component}from 'react'
import HeaderComp from '../../components/elements/header'
import ShirtListComp from '../../components/elements/shirtList'
import shirtListData from '../../data/products.json';


class womensTops extends Component{
    state = {
        cur_shirt_list:[],
        size_filter:['Filter by size', "All","XS", "S","M", "L", "XL"]
   }
// Init state to Render all Tiles when Loaded
componentWillMount() {
    this.setState({
        cur_shirt_list:shirtListData
    });
}
// Function to handle on Filter Change
onSizeFilterChange = (event) => {       
    const chVal = event.target.value;
    if(chVal==="" || chVal==="All"){
        this.setState({
            cur_shirt_list:shirtListData
        }); 
    }else{
        /* Filters the array based on Shirst size */
        let filteredList = shirtListData.filter((data) => {if(data.size.includes(chVal))return data});
        this.setState({
            cur_shirt_list:filteredList
        }); 
    }  
    
}

    render(){
        // Renders the indicidua shirt item
        function renderTileList(list,key) {
            return (
                
                <ShirtListComp
                    key= {key}
                    list ={list}
                />
              
            );
        }
        // Shirt List Information
        let curShirtList = this.state.cur_shirt_list;
        // Size Filter Information
        let curFilterList = this.state.size_filter;
        return(
            
            <div className="ModuleWrapper">
                <div className="HeaderWrapper">
                    <HeaderComp change={this.onSizeFilterChange} filterList={curFilterList}/>
                </div>  
                <div className="contentWrapper"> 
                    <div className="contentContainer"> 
                        {/* Render each Shirt in the Shirt List */}
                        {curShirtList.map(renderTileList)}
                    </div>
                </div>  
            </div>
            
        )

    }
    
}
export default womensTops;