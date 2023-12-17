
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');
  
  const columnsByRow = lines.map(line => line.split(/\s{2,}/)); // Split each line into columns
  
  // Check if there are at least 3 columns in each row and the number of columns is consistent among rows
  const consistentColumns = columnsByRow.every((row, index, array) => 
    index === 0 ? true : row.length === array[0].length);
  
  // If the text has consistent columns and at least 3 columns, it is classified as a table
  if (consistentColumns && columnsByRow[0].length >= 3) {
    return "TABLE";
  }
  
  // Check if there are multiple lines with more than 1 word separated by spaces
  const hasColumns = lines.some(line => line.trim().split(/\s+/).length > 1);
  
  // If there are only columns without multiple rows, it is classified as "COLUMNS"
  if (hasColumns) {
    return "COLUMNS";
  }
  
  // If none of the above conditions are met, return "NORMAL"
  return "NORMAL";
}
