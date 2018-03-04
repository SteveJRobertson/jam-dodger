import React from 'react';
import { shallow } from 'enzyme';
import StatusCard from './StatusCard';

it('renders without crashing', () => {
  const mockPost = {};
  shallow(<StatusCard post={mockPost} />);
});
