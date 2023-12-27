
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  let columnCount = 0;
  let rowCount = 0;

  // Check for the alignment of data to determine the number of columns
  lines.forEach(line => {
    const columns = line.trim().split(/\s{2,}/);
    // If the line contains multiple columns
    if (columns.length > 1) {
      // If the column count has not been set, set the column count 
      if (columnCount === 0) {
        columnCount = columns.length;
      }
      // If the number of columns on this line matches the count, increment the row count
      if (columns.length === columnCount) {
        rowCount++;
      }
    }
  });

  // If there are both rows and columns
  if (rowCount > 1 && columnCount > 1) {
    return "TABLE_AND_COLUMNS";
  }
  // If there are only multiple rows without multiple columns, it's a table
  else if (rowCount > 1) {
    return "TABLE";
  }
  // If there are only multiple columns without multiple rows, it's columns
  else if (columnCount > 1) {
    return "COLUMNS";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
