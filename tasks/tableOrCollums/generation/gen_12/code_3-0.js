
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table based on content
  // We can look for patterns such as rows of data with consistent column separators or headers for each column to identify a table
  let isTable = false;
  for (let i = 0; i < lines.length; i++) {
    const row = lines[i].split(/\s{2,}/); // Split the line by multiple spaces
    if (i === 1) {
      const dataRow = lines[2].split(/\s{2,}/); // Split the third line by multiple spaces
      if (row.length === dataRow.length && row.length > 1) {
        isTable = true;
        break;
      }
    }
  }

  // Check if the text represents columns based on content
  // We can look for patterns such as headers for each column to identify columns
  let isColumns = false;
  const firstLine = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
  if (firstLine.length > 1) {
    isColumns = true;
  }

   // Determine the result based on the presence of table and/or columns
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
