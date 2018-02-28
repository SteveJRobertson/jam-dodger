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

    beforeEach(() => {
      const trafficData = {
        statuses: [],
      };
      fetch = jest.fn().mockReturnValue(Promise.resolve(trafficData));
      mockFetchTrafficData = jest.spyOn(fetchData, 'traffic');
      component = mount(<CardList />);
    });

    afterEach(() => {
      component.unmount();
    });

    it('fetches traffic data from the api', () => {
      expect(mockFetchTrafficData).toHaveBeenCalledWith(fetch);
    });

    it('returns the data');
  });
});
