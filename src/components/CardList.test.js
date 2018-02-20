import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './CardList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const mockPost = {};
  ReactDOM.render(<CardList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
