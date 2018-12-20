import React from 'react';
import {shallow, mount} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TileImageLoader from './tileImageLoader'
import Test_Image from '../../images/Products/product-1.jpg';

configure({ adapter: new Adapter() });

describe('Tile Image Loader', () => {

     it('should Find error if imgsource is wrong',() =>{
        const wrapper = shallow(<TileImageLoader imgsource="assets/doesnotexist.jpg"/>)
        setTimeout(() => {
             expect(wrapper.find(".errorImgLoad").length).toBe(1);
        }, 500);
     });

     it('should Find error if imgsource is wrong',() =>{
        const wrapper = shallow(<TileImageLoader imgsource={Test_Image}/>)
        setTimeout(() => {
             expect(wrapper.find(".errorImgLoad").length).toBe(0);
        }, 500);
     });    

});