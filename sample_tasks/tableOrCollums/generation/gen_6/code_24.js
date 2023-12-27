
function doesItContainTableOrColumns(text) {
  let lines = text.split('\n');
  let isTable = true;
  let isColumns = true;

  // Check for table structure
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].length !== lines[0].length) {
      isTable = false;
      break;
    }
    if (lines[i].match(/[^\s\|+-]/g)) {
      isTable = false;
      break;
    }
  }

  // Check for columnar structure
  let columnWidths = lines[0].trim().split(/\s+/).map(col => col.length);
  for (let i = 1; i < lines.length; i++) {
    let rowColumns = lines[i].trim().split(/\s+/);
    if (rowColumns.length !== columnWidths.length) {
      isColumns = false;
      break;
    }
    for (let j = 0; j < rowColumns.length; j++) {
      if (rowColumns[j].length !== columnWidths[j]) {
        isColumns = false;
        break;
      }
    }
  }

  if (isTable && isColumns) {
    return "TABLE_AND_COLUMNS";
  } else if (isTable) {
    return "TABLE";
  } else if (isColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
