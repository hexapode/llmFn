
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Function to check if a line represents a table column
  const isTableColumn = (line) => {
    return line.trim().match(/^\s*\|.*\|\s*$/) !== null; // Matches lines enclosed in pipe (|)
  };

  // Check if the text represents a table
  let isTable = false;
  for (let i = 0; i < lines.length; i++) {
    if (isTableColumn(lines[i])) {
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

  // Determine the overall result based on table and columns presence
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
