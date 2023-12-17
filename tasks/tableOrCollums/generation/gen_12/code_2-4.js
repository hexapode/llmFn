
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  let isTable = false;
  let isColumns = false;

  // Check if the text represents a table
  if (lines.length >= 3) {
    const dataRows = lines.slice(2, -1); // Exclude the first and last lines
    const columnCounts = dataRows.map(row => row.split(/\s{2,}/).length);
    const distinctColumnCounts = [...new Set(columnCounts)]; // Remove duplicate column counts

    if (distinctColumnCounts.length === 1) {
      isTable = true;
    }
  }

  // Check if the text represents columns
  const columnHeaders = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
  if (columnHeaders.length > 1) {
    isColumns = true;
  }

  // Combine the results
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
