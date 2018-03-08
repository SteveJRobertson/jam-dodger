import React from 'react';
import fetch from 'isomorphic-fetch';
import { mount } from 'enzyme';
import MockDate from 'mockdate';
import jdConfig from '../jamdodger.config';
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
    let mockFetchTrafficData;

    // Data is deliberately set with the IDs out of order as Twitter sometimes returns results in
    // this way
    const twitterData = [
      { created_at: 'Wed Feb 28 19:26:26 +0000 2018', id: 13, id_str: '14', full_text: '', user: { profile_image_url: '', name: '' } },
      { created_at: 'Wed Feb 28 19:23:40 +0000 2018', id: 11, id_str: '12', full_text: '', user: { profile_image_url: '', name: '' } },
      { created_at: 'Wed Feb 28 19:23:51 +0000 2018', id: 12, id_str: '13', full_text: '', user: { profile_image_url: '', name: '' } },
      { created_at: 'Wed Feb 28 19:38:13 +0000 2018', id: 15, id_str: '16', full_text: '', user: { profile_image_url: '', name: '' } },
      { created_at: 'Wed Feb 28 19:33:13 +0000 2018', id: 14, id_str: '15', full_text: '', user: { profile_image_url: '', name: '' } },
      { created_at: 'Wed Feb 28 18:19:16 +0000 2018', id: 10, id_str: '11', full_text: '', user: { profile_image_url: '', name: '' } },
      { created_at: 'Wed Feb 28 18:16:55 +0000 2018', id: 9, id_str: '10', full_text: '', user: { profile_image_url: '', name: '' } },
      { created_at: 'Wed Feb 28 18:15:38 +0000 2018', id: 8, id_str: '9', full_text: '', user: { profile_image_url: '', name: '' } },
      { created_at: 'Wed Feb 28 17:15:34 +0000 2018', id: 7, id_str: '8', full_text: '', user: { profile_image_url: '', name: '' } },
      { created_at: 'Wed Feb 28 17:13:55 +0000 2018', id: 6, id_str: '7', full_text: '', user: { profile_image_url: '', name: '' } },
      { created_at: 'Wed Feb 28 17:13:41 +0000 2018', id: 5, id_str: '6', full_text: '', user: { profile_image_url: '', name: '' } },
      { created_at: 'Wed Feb 28 16:12:24 +0000 2018', id: 4, id_str: '5', full_text: '', user: { profile_image_url: '', name: '' } },
      { created_at: 'Wed Feb 28 16:11:35 +0000 2018', id: 3, id_str: '4', full_text: '', user: { profile_image_url: '', name: '' } },
      { created_at: 'Wed Feb 28 16:08:01 +0000 2018', id: 2, id_str: '3', full_text: '', user: { profile_image_url: '', name: '' } },
      { created_at: 'Wed Feb 28 16:07:58 +0000 2018', id: 1, id_str: '2', full_text: '', user: { profile_image_url: '', name: '' } },
    ];

    // Status with ID of 15 is included from the previous search as Twitter will sometimes return an
    // existing status, even with since_id set in the paramters of the API call
    const moreTwitterData = [
      { created_at: 'Wed Feb 28 19:38:13 +0000 2018', id: 15, id_str: '16', full_text: '', user: { profile_image_url: '', name: '' } },
      { created_at: 'Wed Feb 28 19:48:52 +0000 2018', id: 17, id_str: '18', full_text: '', user: { profile_image_url: '', name: '' } },
      { created_at: 'Wed Feb 28 19:42:25 +0000 2018', id: 16, id_str: '17', full_text: '', user: { profile_image_url: '', name: '' } },
    ];

    beforeAll(() => {
      jest.useFakeTimers();

      MockDate.set(new Date('2018-02-28 19:50:00'));

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
      MockDate.reset();
      component.unmount();
    });

    describe('initial fetch', () => {
      it('fetches traffic data from the api', () => {
        expect(mockFetchTrafficData).toHaveBeenCalledWith(fetch, null);
      });

      it('returns the data', () => {
        expect(component.state().statuses).toEqual([
          { created_at: 'Wed Feb 28 19:38:13 +0000 2018', id: 15, id_str: '16', full_text: '', user: { profile_image_url: '', name: '' } },
          { created_at: 'Wed Feb 28 19:33:13 +0000 2018', id: 14, id_str: '15', full_text: '', user: { profile_image_url: '', name: '' } },
          { created_at: 'Wed Feb 28 19:26:26 +0000 2018', id: 13, id_str: '14', full_text: '', user: { profile_image_url: '', name: '' } },
          { created_at: 'Wed Feb 28 19:23:51 +0000 2018', id: 12, id_str: '13', full_text: '', user: { profile_image_url: '', name: '' } },
          { created_at: 'Wed Feb 28 19:23:40 +0000 2018', id: 11, id_str: '12', full_text: '', user: { profile_image_url: '', name: '' } },
          { created_at: 'Wed Feb 28 18:19:16 +0000 2018', id: 10, id_str: '11', full_text: '', user: { profile_image_url: '', name: '' } },
          { created_at: 'Wed Feb 28 18:16:55 +0000 2018', id: 9, id_str: '10', full_text: '', user: { profile_image_url: '', name: '' } },
          { created_at: 'Wed Feb 28 18:15:38 +0000 2018', id: 8, id_str: '9', full_text: '', user: { profile_image_url: '', name: '' } },
        ]);
      });

      it('returns results within the last two hours', () => {
        expect(component.state().statuses.length).toBe(8);
      });

      it('fetches the data just once', () => {
        expect(mockFetchTrafficData).toHaveBeenCalledTimes(1);
      });
    });

    describe('subsequent fetch with new data', () => {
      beforeAll(() => {
        jest.runTimersToTime(jdConfig.refreshRate);
      });

      it('fetches more traffic data from the api', () => {
        expect(mockFetchTrafficData).toHaveBeenCalledTimes(2);
      });

      it('fetches more traffic data from the api, passing the last status id as an extra parameter', () => {
        expect(mockFetchTrafficData).toHaveBeenCalledWith(fetch, '16');
      });

      it('adds the new results to the existing list', () => {
        expect(component.state().statuses.length).toBe(10);
      });

      it('adds the new results to the top of the existing list', () => {
        expect(component.state().statuses[0].id).toBe(17);
      });

      it('adds a newStatus attribute to the new results', () => {
        expect(component.state().statuses[0].newStatus).toBe(true);
        expect(component.state().statuses[1].newStatus).toBe(true);
        expect(component.state().statuses[2].newStatus).toBe(false);
      });
    });

    describe('subsequent fetch with no new data', () => {
      beforeAll(() => {
        jest.runTimersToTime(jdConfig.refreshRate);
      });

      it('fetches more traffic data from the api', () => {
        expect(mockFetchTrafficData).toHaveBeenCalledTimes(3);
      });

      it('does not add new results to the existing list', () => {
        expect(component.state().statuses.length).toBe(10);
      });

      it('does not add new results to the top of the existing list', () => {
        expect(component.state().statuses[0].id).toBe(17);
      });

      it('adds a newStatus=false attribute to each result in the existing list', () => {
        expect(component.state().statuses[0].newStatus).toBe(false);
      });
    });
  });
});
