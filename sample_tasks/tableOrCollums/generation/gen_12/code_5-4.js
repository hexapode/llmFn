
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());

  // Pattern to match a column header and data row
  const columnDataPattern = /^(\s*\w+\s+){2,}\s*$/;

  let containsTable = false;
  let containsColumns = false;

  for (let i = 0; i < lines.length; i++) {
    if (columnDataPattern.test(lines[i])) {
      if (i < lines.length - 1 && columnDataPattern.test(lines[i + 1])) {
        containsTable = true;
      } else {
        containsColumns = true;
      }
    }
  }

  if (containsTable && containsColumns) {
    return "TABLE_AND_COLUMNS";
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
