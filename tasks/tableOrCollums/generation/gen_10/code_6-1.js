
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  let hasRows = false;
  let hasColumns = false;
  
  // Check for the presence of rows and columns
  for (let i = 0; i < lines.length; i++) {
    const columnsInLine = lines[i].trim().split(/\s+/).filter(Boolean).length;
    if (columnsInLine > 1) {
      hasColumns = true;
      if(hasRows) {
        return "TABLE_AND_COLUMNS";
      }
    }
    if (columnsInLine > 0) {
      hasRows = true;
    }
  }

  // If there are both rows and columns, return "TABLE_AND_COLUMNS"
  if (hasRows && hasColumns) {
    return "TABLE_AND_COLUMNS";
  }
  // If there are only columns without multiple rows, return "COLUMNS"
  else if (hasColumns) {
    return "COLUMNS";
  }
  // If there are multiple rows without columns, return "TABLE"
  else if (hasRows) {
    return "TABLE";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
