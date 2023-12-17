
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents columns
  if (lines.length >= 3) {
    const firstRow = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
    const secondRow = lines[1].split(/\s{2,}/); // Split the second line by multiple spaces
    if (firstRow.length === secondRow.length) {
      return "COLUMNS";
    }
  }

  // Check if the text represents a table
  const headerRow = lines[1].split(/\s{2,}/); // Split the second line by multiple spaces
  const dataRow = lines[2].split(/\s{2,}/); // Split the third line by multiple spaces
  if (headerRow.length === dataRow.length) {
    return "TABLE";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
