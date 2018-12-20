import React from 'react';
import {shallow, mount} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShirtListComp from './shirtList'

configure({ adapter: new Adapter() });

describe('Shirt List Component', () => {

     it('should Not Find SALE Item if isSale is false',() =>{
          let sampleData = {
             productImage: "product-1.jpg",isSale:false
           }
           const wrapper = mount(<ShirtListComp list={sampleData}/>)
           expect(wrapper.find(".saleItem").length).toBe(0);
         
        });
        it('should Find SALE Item if isSale is false',() =>{
          let sampleData = {
             productImage: "product-1.jpg",isSale:true
           }
           const wrapper = mount(<ShirtListComp list={sampleData}/>)
           expect(wrapper.find(".saleItem").length).toBe(1);
         
        });

     it('should Find EXCLUSIVE Item if  isExclusive is false',() =>{
       let sampleData = {
          isExclusive: false,productImage: "product-1.jpg"
        }
        const wrapper = mount(<ShirtListComp list={sampleData}/>)
        expect(wrapper.find(".exclusiveItem").length).toBe(0);
     });

     it('should Find EXCLUSIVE Item if  isExclusive is true',() =>{
          let sampleData = {
               isExclusive: true,productImage: "product-1.jpg"
           }
           const wrapper = mount(<ShirtListComp list={sampleData}/>)
           expect(wrapper.find(".exclusiveItem").length).toBe(1);
        });

        

});