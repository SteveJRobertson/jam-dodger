import React from 'react';
import { mount } from 'enzyme';
import Loader from './Loader';

describe('Loader component', () => {
  let component;

  describe('initialise', () => {
    describe('with default props', () => {
      beforeAll(() => {
        component = mount(<Loader />);
      });

      afterAll(() => {
        component.unmount();
      });

      it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
      });

      it('sets the default status for hasLoaded', () => {
        expect(component.props().hasLoaded).toBe(false);
      });

      it('sets the default loader size', () => {
        expect(component.props().size).toBe('massive');
      });

      it('sets the default loader text', () => {
        expect(component.props().text).toBe(null);
      });
    });

    describe('with props', () => {
      beforeAll(() => {
        component = mount(<Loader
          hasLoaded
          size="small"
          text="Loading..."
        />);
      });

      afterAll(() => {
        component.unmount();
      });

      it('renders without crashing', () => {
        expect(component.exists()).toEqual(true);
      });

      it('sets the status for hasLoaded', () => {
        expect(component.props().hasLoaded).toBe(true);
      });

      it('sets the loader size', () => {
        expect(component.props().size).toBe('small');
      });

      it('sets the loader text', () => {
        expect(component.props().text).toBe('Loading...');
      });
    });
  });
});

