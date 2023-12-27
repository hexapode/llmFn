
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n');

  // Count the number of columns in the first row
  const firstRowColumns = lines[0].split(/\s{2,}/).length;

  // Check if each subsequent row has the same number of columns
  const isTable = lines.slice(1).every(row => row.split(/\s{2,}/).length === firstRowColumns);

  // Check if the text contains the word "table" and "columns"
  if (isTable) {
    return "TABLE";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
