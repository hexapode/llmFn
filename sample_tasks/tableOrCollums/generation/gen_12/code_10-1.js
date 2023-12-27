
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  let isTable = false;
  for (let i = 0; i < lines.length - 1; i++) {
    const currentRowData = lines[i].split(/\s{2,}/);
    const nextRowData = lines[i + 1].split(/\s{2,}/);
    if (currentRowData.length === nextRowData.length) {
      isTable = true;
      break;
    }
  }

  // Check if the text represents columns
  let isColumns = false;
  const columnHeaders = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
  if (columnHeaders.length > 1) {
    isColumns = true;
  }

  // Determine the output based on the findings
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
