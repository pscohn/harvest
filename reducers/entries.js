import * as types from '../constants/ActionTypes';

export default function entries(state = {
  isFetching: false,
  editing: [],
  recent: [],
  items: {},
}, action) {
  switch (action.type) {
  case types.REQUEST_ENTRIES:
    return Object.assign({}, state, {
      isFetching: true,
    });
  case types.RECEIVE_ENTRIES:
    return Object.assign({}, state, {
      isFetching: false,
      items: Object.assign({}, state.items, action.payload.entries),
      lastUpdated: action.payload.receivedAt,
    });
  case types.NEW_ENTRY:
    return Object.assign({}, state, {
      items: Object.assign({}, state.items, {[action.payload.data.id]: action.payload.data}),
    });
  case types.EDIT_ENTRY_BEGIN:
    return Object.assign({}, state, {
      editing: [
        ...state.editing,
        action.payload.entryId,
      ],
    });
  case types.EDIT_ENTRY_END:
    const idx = state.editing.indexOf(action.payload.entryId);
    return Object.assign({}, state, {
      editing: [
        ...state.editing.slice(0, idx),
        ...state.editing.slice(idx + 1),
      ],
    });
  case types.DELETE_ENTRY:
    const entriesDeleted = Object.assign({}, state.items);
    delete entriesDeleted[action.payload.entryId];
    return Object.assign({}, state, {items: entriesDeleted});
  default:
    return state;
  }
}
