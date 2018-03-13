import React from 'react';
import { mount } from 'enzyme';
import StatusList from './StatusList';

describe('StatusList component', () => {
  let component;

  describe('initialise', () => {
    it('renders without crashing', () => {
      component = mount(<StatusList />);
      expect(component.exists()).toEqual(true);
      component.unmount();
    });
  });
});
