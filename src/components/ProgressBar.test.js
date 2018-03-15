import React from 'react';
import { mount } from 'enzyme';
import MockDate from 'mockdate';
import moment from 'moment';
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

  describe('component will receive props', () => {
    describe('when countdown is started', () => {
      beforeAll(() => {
        component = mount(<ProgressBar startCountdown />);
        jest.spyOn(component.instance(), 'startCountdown');
        component.instance().componentWillReceiveProps();
      });

      afterAll(() => {
        component.unmount();
      });

      it('calls startCountdown()', () => {
        expect(component.instance().startCountdown).toHaveBeenCalledWith();
      });
    });

    describe('when countdown is stopped', () => {
      beforeAll(() => {
        component = mount(<ProgressBar startCountdown={false} />);
        jest.spyOn(component.instance(), 'stopCountdown');
        component.instance().componentWillReceiveProps();
      });

      afterAll(() => {
        component.unmount();
      });

      it('calls stopCountdown()', () => {
        expect(component.instance().stopCountdown).toHaveBeenCalledWith();
      });
    });
  });

  describe('start countdown', () => {
    beforeAll(() => {
      MockDate.set(new Date('2018-03-15 13:40:00'));
      const nextInterval = +moment().add(45, 'seconds').format('X');
      component = mount(<ProgressBar nextInterval={nextInterval} />);
      component.instance().startCountdown();
    });

    afterAll(() => {
      component.unmount();
    });

    it('sets the style for the progress bar', () => {
      expect(component.state().styles).toEqual({ animation: 'countdown 45s linear infinite' });
    });
  });

  describe('stop countdown', () => {
    beforeAll(() => {
      component = mount(<ProgressBar />);
      component.instance().stopCountdown();
    });

    afterAll(() => {
      component.unmount();
    });

    it('sets the style for the progress bar', () => {
      expect(component.state().styles).toEqual({ animation: 'none' });
    });
  });
});
