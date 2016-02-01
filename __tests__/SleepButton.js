jest.dontMock('../components/SleepButton.js');

import React from 'react';
import SleepButton from '../components/SleepButton.js';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';

describe('SleepButton', () => {
  it('calls its callback on click', function() {
    const mock = jest.genMockFunction();

    const component = TestUtils.renderIntoDocument(
      <SleepButton advanceDay={mock} />
    );

    const node = component.refs.sleep;
    TestUtils.Simulate.click(node);
    expect(mock).toBeCalled();
  });
});
