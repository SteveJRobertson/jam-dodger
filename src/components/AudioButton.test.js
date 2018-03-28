import React from 'react';
import { shallow } from 'enzyme';
import AudioButton from './AudioButton';

it('renders without crashing', () => {
  shallow(<AudioButton />);
});
