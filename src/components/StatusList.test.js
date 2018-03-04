import React from 'react';
import fetch from 'isomorphic-fetch';
import { mount } from 'enzyme';
import StatusList from './StatusList';

import fetchData from '../api/fetchData';

describe('StatusList component', () => {
  let component;

  describe('initialise', () => {
    it('renders without crashing', () => {
      component = mount(<StatusList />);
      expect(component.exists()).toEqual(true);
      component.unmount();
    });
  });

  describe('fetch data from the api', () => {
    jest.useFakeTimers();

    let mockFetchTrafficData;

    const twitterData = [
      { created_at: '', id: 15, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 14, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 13, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 12, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 11, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 10, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 9, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 8, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 7, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 6, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 5, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 4, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 3, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 2, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 1, text: '', user: { profile_image_url: '', name: '' } },
    ];

    const moreTwitterData = [
      { created_at: '', id: 17, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 16, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 15, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 14, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 13, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 12, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 11, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 10, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 9, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 8, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 7, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 6, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 5, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 4, text: '', user: { profile_image_url: '', name: '' } },
      { created_at: '', id: 3, text: '', user: { profile_image_url: '', name: '' } },
    ];

    beforeAll(() => {
      fetch = jest.fn().mockReturnValue(Promise.resolve(twitterData));
      mockFetchTrafficData = jest.spyOn(fetchData, 'traffic')
        .mockReturnValue(Promise.resolve({
          statuses: [],
        }))
        .mockReturnValueOnce(Promise.resolve({
          statuses: twitterData,
        }))
        .mockReturnValueOnce(Promise.resolve({
          statuses: moreTwitterData,
        }));

      component = mount(<StatusList />);
    });

    afterAll(() => {
      component.unmount();
    });

    it('fetches traffic data from the api', () => {
      expect(mockFetchTrafficData).toHaveBeenCalledWith(fetch);
    });

    it('returns the data', () => {
      expect(component.state().statuses).toEqual(twitterData);
    });

    it('returns 15 results', () => {
      expect(component.state().statuses.length).toBe(15);
    });

    it('fetches the data just once', () => {
      expect(mockFetchTrafficData).toHaveBeenCalledTimes(1);
    });

    describe('after the interval has passed', () => {
      beforeEach(() => {
        jest.runTimersToTime(60000);
      });

      it('fetches more traffic data from the api', () => {
        expect(mockFetchTrafficData).toHaveBeenCalledTimes(2);
      });

      it('adds the new results to the existing list', () => {
        expect(component.state().statuses.length).toBe(17);
      });
    });
  });
});
