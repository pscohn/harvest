import * as types from '../constants/ActionTypes';
const $ = require('jquery');

// ENTRIES

function requestEntries() {
  return {
    type: types.REQUEST_ENTRIES,
  };
}

export function receiveEntries(json) {
  return {
    type: types.RECEIVE_ENTRIES,
    payload: {
      entries: json,
      receivedAt: Date.now(),
    },
  };
}

export function fetchRecentEntries() {
  return dispatch => {
    dispatch(requestEntries());
    $.ajax({
      type: 'get',
      dataType: 'json',
      url: '/entries/recent/',
      success: data => {
        return dispatch(receiveEntries(data));
      },
    });
  };
}

export function submitNewEntry() {
  return dispatch => {
    const data = {
      title: '',
      notes: '',
    };
    $.ajax({
      type: 'POST',
      url: '/entry/new/',
      data: data,
      success: function(data) {
        dispatch(receiveNewEntry(data));
        dispatch(editEntryBegin(data.id));
      },
    });
  };
}

function receiveNewEntry(data) {
  return {
    type: types.NEW_ENTRY,
    payload: {
      data: data,
    },
  };
}

export function editEntryBegin(entryId) {
  return {
    type: types.EDIT_ENTRY_BEGIN,
    payload: {
      entryId: entryId,
    },
  };
}

export function editEntryEnd(entryId) {
  return {
    type: types.EDIT_ENTRY_END,
    payload: {
      entryId: entryId,
    },
  };
}

export function editEntrySubmit(entryId, title, notes) {
  return dispatch => {
    let data = {
      entry_id: entryId,
      title: title,
      notes: notes,
    }
    $.ajax({
      type: 'POST',
      url: `/entry/edit/${entryId}/`,
      data: data,
      success: function(data) {
        dispatch(editEntryEnd(entryId));
        return dispatch(receiveNewEntry(data.entry));
      },
    });
  };
}

export function submitDeleteEntry(entryId) {
  return dispatch => {
    $.ajax({
      type: 'POST',
      url: `/entry/delete/${entryId}`,
      success: function(data) {
        // remove from editing and openTabs
        dispatch(deleteEntry(data.entryId));
      },
    });
  };
}

function deleteEntry(entryId) {
  return {
    type: types.DELETE_ENTRY,
    payload: {
      entryId: entryId,
    },
  };
}
