
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  let isLikelyTable = false;
  for (let i = 0; i < lines.length; i++) {
    const row = lines[i].split(/\s{2,}/); // Split the line by multiple spaces
    if (row.length > 1) {
      isLikelyTable = true;
      break;
    }
  }

  // Check if the text represents columns
  let isLikelyColumns = false;
  const headerRow = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
  if (headerRow.length > 1) {
    isLikelyColumns = true;
  }

  // Return the appropriate classification based on the analysis
  if (isLikelyTable && isLikelyColumns) {
    return "TABLE_AND_COLUMNS";
  } else if (isLikelyTable) {
    return "TABLE";
  } else if (isLikelyColumns) {
    return "COLUMNS";
  } else {
    return "NONE";
  }
}
