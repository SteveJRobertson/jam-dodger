import React from 'react';
import { mount } from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar component', () => {
  let component;

  describe('initialise', () => {
    it('renders without crashing', () => {
      component = mount(<ProgressBar />);
      expect(component.exists()).toEqual(true);
      component.unmount();
    });
  });
});
