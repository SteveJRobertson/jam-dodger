import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('renders without crashing', () => {
  const mockPost = {};
  shallow(<Card post={mockPost} />);
});
