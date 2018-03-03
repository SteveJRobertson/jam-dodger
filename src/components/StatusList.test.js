import React from 'react';
import fetch from 'isomorphic-fetch';
import { shallow, mount } from 'enzyme';
import StatusList from './StatusList';

import fetchData from '../api/fetchData';

describe('StatusList component', () => {
  let component;

  it('renders without crashing', () => {
    component = shallow(<StatusList />);
    expect(component.exists()).toEqual(true);
  });

  describe('fetch data from the api', () => {
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

    beforeEach(() => {
      fetch = jest.fn().mockReturnValue(Promise.resolve(twitterData));
      mockFetchTrafficData = jest.spyOn(fetchData, 'traffic').mockReturnValue(Promise.resolve({
        statuses: twitterData,
      }));
      component = mount(<StatusList />);
    });

    afterEach(() => {
      component.unmount();
    });

    it('fetches traffic data from the api', () => {
      expect(mockFetchTrafficData).toHaveBeenCalledWith(fetch);
    });

    it('returns the data', () => {
      expect(component.state().statuses).toEqual(twitterData);
    });
  });
});
