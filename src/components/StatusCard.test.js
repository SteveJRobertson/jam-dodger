import React from 'react';
import { shallow, mount } from 'enzyme';
import MockDate from 'mockdate';
import StatusCard from './StatusCard';

let status;

beforeAll(() => {
  MockDate.set(new Date('2018-03-01 23:59:59'));

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

it('renders without crashing', () => {
  shallow(<StatusCard
    key={`status-${status.id}`}
    avatarUrl={status.user.profile_image_url}
    name={status.user.name}
    time={status.created_at}
    description={status.text}
  />);
});

it('displays the correct time', () => {
  const component = mount(<StatusCard
    key={`status-${status.id}`}
    avatarUrl={status.user.profile_image_url}
    name={status.user.name}
    time={status.created_at}
    description={status.text}
  />);

  expect(component.state().formattedTime).toEqual('28 minutes ago');
});
