
function doesItContainTableOrColumns(inputText) {
  const rows = inputText.split('\n').map(row => row.trim()); // Split input into rows and trim whitespace

  // Count the number of columns in each row
  const columnCounts = rows.map(row => row.split(/\s+/).length);

  const distinctColumnCounts = [...new Set(columnCounts)]; // Get unique column counts

  if (distinctColumnCounts.length === 1) {
    if (distinctColumnCounts[0] > 1) {
      return "TABLE";
    } else {
      return "NORMAL";
    }
  } else {
    return "COLUMNS";
  }
}
