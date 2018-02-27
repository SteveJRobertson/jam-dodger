import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('renders without crashing', () => {
  shallow(<CardList />);
});
