import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const mockPost = {};
  ReactDOM.render(<Card post={mockPost} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
