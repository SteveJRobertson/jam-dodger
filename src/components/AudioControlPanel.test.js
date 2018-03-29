import React from 'react';
import { shallow } from 'enzyme';
import AudioControlPanel from './AudioControlPanel';

it('renders without crashing', () => {
  shallow(<AudioControlPanel />);
});
