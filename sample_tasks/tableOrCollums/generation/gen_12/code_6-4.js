
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  let isTable = false;
  for (let i = 0; i < lines.length - 2; i++) {
    const currentRow = lines[i].split(/\s{2,}/);
    const nextRow = lines[i + 1].split(/\s{2,}/);
    const nextNextRow = lines[i + 2].split(/\s{2,}/);
    
    // Check if the current row, next row, and next next row have equal number of elements
    if (currentRow.length === nextRow.length && nextRow.length === nextNextRow.length) {
      isTable = true;
      break;
    }
  }

  // Check if the text represents columns
  let isColumns = false;
  if (lines.length >= 3) {
    const firstLineParts = lines[0].split(/\s{2,}/);
    const secondLineParts = lines[1].split(/\s{2,}/);
  
    // Check if the first and second lines have different number of elements
    if (firstLineParts.length > 1 && secondLineParts.length > 1 && firstLineParts.length !== secondLineParts.length) {
      isColumns = true;
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
