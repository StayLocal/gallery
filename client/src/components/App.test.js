import React from 'react';
import { shallow, mount, render } from 'enzyme';
import fetch from 'node-fetch';
import App from './App.js';


describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);
  
    expect(component).toMatchSnapshot();
  });

  it('should handle state changes', () => {
	  const output = shallow(
	    <App />
	  );
	  
	  expect(output.state().clicked).toEqual(false);
	  output.simulate('click');
	  expect(output.state().clicked).toEqual(true);
	});

});
