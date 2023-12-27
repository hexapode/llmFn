
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  let isTable = false;
  for (let i = 0; i < lines.length; i++) {
    const row = lines[i].trim().split(/\s{2,}/); // Split the row by multiple spaces
    if (row.length > 1 && !isNaN(row[0])) {
      isTable = true;
      break;
    }
  }

  // Check if the text represents columns
  let isColumns = false;
  if (lines.length >= 3) {
    const headerRow = lines[1].split(/\s{2,}/); // Split the second line by multiple spaces
    const dataRow = lines[2].split(/\s{2,}/); // Split the third line by multiple spaces
    if (headerRow.length === dataRow.length) {
      isColumns = true;
    }
  }

  // Determine the classification based on the analysis
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
