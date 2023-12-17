
function doesItContainTableOrColumns(text) {
  // Count the number of lines with multiple words separated by spaces
  const lines = text.split('\n');
  const linesWithColumns = lines.filter(line => line.trim().split(/\s+/).length > 1).length;
  
  // Check if the total number of lines with columns is less than 3
  if (linesWithColumns < 3) {
    return "NONE";
  }
  
  // Check for the presence of rows with consistent number of columns
  const columnCounts = lines.filter(line => line.trim().split(/\s+/).length > 1).map(line => line.trim().split(/\s+/).length);
  const uniqueColumnCounts = Array.from(new Set(columnCounts));
  
  // If there is only one unique column count, it's considered as a table
  if (uniqueColumnCounts.length === 1) {
    return "TABLE";
  }
  
  // If there are multiple unique column counts, it's considered as columns
  else {
    return "COLUMNS";
  }
}
