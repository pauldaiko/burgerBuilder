import {BurgerBuilder} from './BurgerBuilder';
import React from 'react';

import { configure, shallow } from 'enzyme';

import Adaptor from 'enzyme-adapter-react-16';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

configure({adapter: new Adaptor()});

describe('Burger Builder', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />)
    })
    it('should render build controls when recieving ingredients', () => {
        wrapper.setProps({ings: {salad: 0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    })
})