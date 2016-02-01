jest.dontMock('../components/Day.js');

import React from 'react';
import Day from '../components/Day.js';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';

describe('Day', () => {
  it('renders the season and day', function() {

    const component = TestUtils.renderIntoDocument(
      <Day season="Spring" day={30} />
    );

    const text = ReactDOM.findDOMNode(component).textContent;
    expect(text).toEqual('Spring 30');
  });
});
