import React from 'react';
import { shallow, mount } from 'enzyme';
import MockDate from 'mockdate';
import StatusCard from './StatusCard';

describe('StatusCard component', () => {
  let component;
  let status;

  describe('initialise', () => {
    it('renders without crashing', () => {
      component = shallow(<StatusCard />);
      expect(component.exists()).toEqual(true);
      component.unmount();
    });
  });

  describe('date formatting', () => {
    beforeAll(() => {
      jest.useFakeTimers();

      MockDate.set(new Date('2018-03-02 00:00:00'));

      status = {
        created_at: 'Thu Mar 01 23:32:09 +0000 2018',
        id: '',
        user: {
          name: '',
          profile_image_url: '',
        },
        text: '',
      };
    });

    afterAll(() => {
      MockDate.reset();
    });

    beforeEach(() => {
      component = mount(<StatusCard
        key={`status-${status.id}`}
        avatarUrl={status.user.profile_image_url}
        name={status.user.name}
        time={status.created_at}
        description={status.text}
      />);
    });

    afterEach(() => {
      component.unmount();
    });

    it("converts the 'created_at' property to a moment.fromNow() value", () => {
      expect(component.state().formattedTime).toEqual('28 minutes ago');
    });

    describe('after the interval has passed', () => {
      beforeEach(() => {
        MockDate.set(new Date('2018-03-02 00:01:00'));

        jest.runTimersToTime(60000);
      });

      it('updates the fromNow() value when the interval has updated', () => {
        expect(component.state().formattedTime).toEqual('29 minutes ago');
      });
    });
  });
});
