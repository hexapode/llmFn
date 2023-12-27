
function doesItContainTableOrColumns(text) {
  const tableRegex = /(\btable\b|\btb\b|\btr\b|\bth\b|\btd\b)/i;
  const columnRegex = /(\bcolumn\b|\bcol\b|\bcolumn\s1\b|\bcol\s1\b)/i;

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
