jest.dontMock('../components/Field.js');

import React from 'react';
import Field from '../components/Field.js';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';

const field = [
  {
    tilled: false,
    watered: false,
    seed: null,
    daysWatered: 0,
  },
  {
    tilled: false,
    watered: false,
    seed: null,
    daysWatered: 0,
  },
];

describe('Field', () => {
  it('shows the number of squares', function() {

    const component = TestUtils.renderIntoDocument(
      <Field squares={field} />
    );

    const text = ReactDOM.findDOMNode(component).textContent;
    expect(text).toContain('2 Squares');
  });
});
