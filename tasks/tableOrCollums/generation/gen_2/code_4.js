
function doesItContainTableOrColumns(text) {
  const tableRegex = /\b(\s{2,}[\w\s]+[\s\d.]+\n)+\s{2,}[\w\s]+[\s\d.]+\b/g;
  const columnRegex = /(\b\s{2,}[\w\s]+\s{2,})|([\d.]+(\s{2,}[\w\s]+)?\n)/g;

  if (tableRegex.test(text) && columnRegex.test(text)) {
    return 'TABLE_AND_COLUMNS';
  } else if (tableRegex.test(text)) {
    return 'TABLE';
  } else if (columnRegex.test(text)) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
