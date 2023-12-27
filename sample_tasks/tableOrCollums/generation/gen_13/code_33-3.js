
function doesItContainTableOrColumns(inputText) {
  const lines = inputText.split('\n');
  let containsTable = false;
  let containsColumns = false;

  for (const line of lines) {
    if (line.includes('|') && line.includes('-')) {
      containsTable = true;
      containsColumns = true;
      break;
    } else if (line.includes('|')) {
      containsColumns = true;
    } else if (line.includes('-')) {
      containsTable = true;
    }
  }

  if (containsTable && containsColumns) {
    return 'TABLE_AND_COLUMNS';
  } else if (containsTable) {
    return 'TABLE';
  } else if (containsColumns) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
