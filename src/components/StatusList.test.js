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
      {
        created_at: '',
        id: 1,
        text: '',
        user: {
          profile_image_url: '',
          name: '',
        },
      },
    ];

    beforeAll(() => {
      fetch = jest.fn().mockReturnValue(Promise.resolve(twitterData));
      mockFetchTrafficData = jest.spyOn(fetchData, 'traffic').mockReturnValue(Promise.resolve({
        statuses: twitterData,
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
    });
  });
});
