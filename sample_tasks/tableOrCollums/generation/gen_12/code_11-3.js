
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  if (lines.length >= 3) {
    const firstRow = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
    const secondRow = lines[1].split(/\s{2,}/); // Split the second line by multiple spaces
    const thirdRow = lines[2].split(/\s{2,}/); // Split the third line by multiple spaces
    if (firstRow.length === secondRow.length && secondRow.length === thirdRow.length) {
      return "TABLE";
    }
  }

  // Check if the text represents columns
  const columnHeaders = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
  if (columnHeaders.length > 1) {
    // Check if the remaining lines also have the same number of columns
    const columnCounts = lines.map(line => line.split(/\s{2,}/).length);
    if (columnCounts.every(count => count === columnHeaders.length)) {
      return "COLUMNS";
    }
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
