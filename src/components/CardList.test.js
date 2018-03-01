import React from 'react';
import fetch from 'isomorphic-fetch';
import { shallow, mount } from 'enzyme';
import CardList from './CardList';

import fetchData from '../api/fetchData';

describe('CardList component', () => {
  let component;

  it('renders without crashing', () => {
    component = shallow(<CardList />);
    expect(component.exists()).toEqual(true);
  });

  describe('fetch data from the api', () => {
    let mockFetchTrafficData;
    const trafficData = [
      {
        created_at: '',
        id: 1,
        text: '',
        user: {
          profile_image_url: '',
          screen_name: '',
        },
      },
    ];

    beforeEach(() => {
      fetch = jest.fn().mockReturnValue(Promise.resolve(trafficData));
      mockFetchTrafficData = jest.spyOn(fetchData, 'traffic').mockReturnValue(Promise.resolve({
        statuses: trafficData,
      }));
      component = mount(<CardList />);
    });

    afterEach(() => {
      component.unmount();
    });

    it('fetches traffic data from the api', () => {
      expect(mockFetchTrafficData).toHaveBeenCalledWith(fetch);
    });

    it('returns the data', () => {
      expect(component.state().posts).toEqual(trafficData);
    });
  });
});
