import React, { Component, PropTypes as T } from 'react';

export default class Entry extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

Entry.propTypes = {
  editEntry: T.func.isRequired,
  entry: T.shape({
    id: T.string.isRequired,
    title: T.string.isRequired,
    notes: T.string.isRequired,
  }).isRequired,
};
