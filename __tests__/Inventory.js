jest.dontMock('../components/Inventory.js');

import React from 'react';
import Inventory from '../components/Inventory.js';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';

describe('Inventory', () => {
  it('shows the money amount', function() {

    const component = TestUtils.renderIntoDocument(
      <Inventory money={200} />
    );

    const text = ReactDOM.findDOMNode(component).textContent;
    expect(text).toContain('Money: 200');
  });
});
