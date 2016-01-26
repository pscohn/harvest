jest.dontMock('../components/NewFolderButton.js');

var React = require('react/addons');
var NewFolderButton = require('../components/NewFolderButton.js');
var TestUtils = React.addons.TestUtils;

describe('NewFolderButton', function() {
  it('does the right thing', function() {

    var button = TestUtils.renderIntoDocument(
      <NewFolderButton folder={{id: '4'}} handleNewFolder={{}} />
    );

    expect(button.state.active).toEqual(false);
    button.handleNew();
    expect(button.state.active).toEqual(true);
    
  });
});
