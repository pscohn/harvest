export function getRecent(entries) {
  // returns 10 keys of most recently modified entries

  if (entries === null || entries.length === 0) {
    return [];
  } else if (entries.length === 1) {
    return entries;
  }

  let sorted = [];
  for (var key in entries) {
    if (entries.hasOwnProperty(key)) {
      sorted.push(key);
    }
  }

  sorted.sort(function(a, b) {
    if (entries[a].date_modified > entries[b].date_modified) {
      return -1;
    } else {
      return 1;
    }
  });

  return sorted.slice(0,10);
}
