import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App.js';


describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);
  
    expect(component).toMatchSnapshot();
  });
});

