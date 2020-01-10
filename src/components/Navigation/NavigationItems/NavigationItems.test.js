import React from 'react';

import { configure, shallow } from 'enzyme';

import Adaptor from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'

configure({adapter: new Adaptor()});

describe('NavigationItems', () => {
    let wrapper;
    beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
    }) 

    it('should render 2 navigation item elements if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
    it('should render 3 navigation item elements if authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });
    it('should render logout item element if authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>));
    });

});