
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Flag to track if the text contains both table and columns
  let hasTable = false;
  let hasColumns = false;

  // Check if the text represents a table
  if (lines.length >= 3) {
    const columnCounts = lines.slice(0, 3).map(line => line.split(/\s{2,}/).length);
    const isTable = columnCounts.every((count, index, array) => count === array[0]);
    if (isTable) {
      hasTable = true;
    }
  }

  // Check if the text represents columns
  const columnCounts = lines.map(line => line.split(/\s{2,}/).length);
  const isColumns = columnCounts.every(count => count === columnCounts[0]);
  if (isColumns) {
    hasColumns = true;
  }

  // Determine the result based on the presence of table or columns
  if (hasTable && hasColumns) {
    return "TABLE_AND_COLUMNS";
  } else if (hasTable) {
    return "TABLE";
  } else if (hasColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
