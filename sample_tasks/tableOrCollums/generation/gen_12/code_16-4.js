
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  if (lines.length >= 3) {
    const firstLine = lines[0].replace(/\s{2,}/g, ' ').trim(); // Replace multiple spaces with single space
    const secondLine = lines[1].replace(/\s{2,}/g, ' ').trim(); // Replace multiple spaces with single space
    const columnHeaders = firstLine.split(' '); // Split the first line by single space
    const dataRow = secondLine.split(' '); // Split the second line by single space
    if (columnHeaders.length === dataRow.length) {
      return "COLUMNS";
    }
  }

  // Check if the text contains the word "TABLE"
  if (text.includes("TABLE")) {
    return "TABLE";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
