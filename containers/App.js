import React from 'react/addons';
import { connect } from 'react-redux';
import {
  fetchRecentEntries,
  submitNewEntry,
  editEntryBegin,
  editEntryEnd,
  editEntrySubmit,
  submitDeleteEntry,
} from '../actions/actions';

const $ = require('jquery');
window.$ = $;
window.jQuery = $;
require('bootstrap');

const App = React.createClass({
  componentDidMount: function() {
    const { dispatch } = this.props
    dispatch(fetchRecentEntries());
  },

  editEntry: function(id) {
    const { dispatch } = this.props;
    if (this.props.entries.editing.indexOf(id) > -1) {
      return;
    }
    dispatch(editEntryBegin(id));
  },
  
  newEntrySubmit: function() {
    const { dispatch } = this.props;
    dispatch(submitNewEntry());
  },

  editEntrySubmit: function(id, title, notes) {
    const { dispatch } = this.props;
    dispatch(editEntrySubmit(id, title, notes));
  },

  deleteEntry: function(id, type) {
    const { dispatch } = this.props;
    if (this.props.entries.editing.indexOf(id) > -1) {
      dispatch(editEntryEnd(id));
    }
    dispatch(submitDeleteEntry(id));
  },

  render: function() {
    return (
      <div>
      </div>
    )
  }
});

function mapStateToProps(state) {
  const { entries } = state;
  return {
    entries,
  };
}

export default connect(mapStateToProps)(App);
