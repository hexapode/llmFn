
function doesItContainTableOrColumns(inputText) {
  // Check for patterns indicative of a table
  const rows = inputText.split("\n").map(row => row.trim()); // Split text into rows
  const columnCounts = rows.map(row => row.split(/\s{2,}/).length); // Count column-like sections in each row

  // Check for consistent column-like sections across rows
  const consistentColumnCount = columnCounts.every(count => count === columnCounts[0]);

  if (consistentColumnCount) {
    const maxColumns = Math.max(...columnCounts);
    if (maxColumns > 1) {
      return "TABLE";
    } else {
      return "COLUMNS";
    }
  } else {
    return "NORMAL";
  }
}
