import React from 'react';
import { mount } from 'enzyme';
import NoResults from './NoResults';

describe('NoResults component', () => {
  let component;

  describe('initialise', () => {
    describe('with default props', () => {
      beforeAll(() => {
        component = mount(<NoResults />);
      });

      afterAll(() => {
        component.unmount();
      });

      it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
      });

      it('sets the default hasLoaded flag', () => {
        expect(component.props().hasLoaded).toBe(true);
      });

      it('sets the default status count', () => {
        expect(component.props().statusCount).toBe(0);
      });

      it('sets the default text', () => {
        expect(component.props().text).toBe('No results found');
      });
    });

    describe('with props', () => {
      beforeAll(() => {
        component = mount(<NoResults
          hasLoaded={false}
          statusCount={15}
          text="Test text here"
        />);
      });

      afterAll(() => {
        component.unmount();
      });

      it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
      });

      it('sets the hasLoaded flag', () => {
        expect(component.props().hasLoaded).toBe(false);
      });

      it('sets the status count', () => {
        expect(component.props().statusCount).toBe(15);
      });

      it('sets the text', () => {
        expect(component.props().text).toBe('Test text here');
      });
    });
  });
});

