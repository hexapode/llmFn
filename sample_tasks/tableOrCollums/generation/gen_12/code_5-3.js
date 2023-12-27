
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim()); // Split the text into lines

  // Check for the presence of columns
  const firstRow = lines[0].trim(); // Get the first row of the text
  if (firstRow.includes("  ")) {
    return "COLUMNS";
  }

  // Check if the text represents a table
  if (lines.length >= 3) {
    const headerRow = lines[1].split(/\s{2,}/); // Split the second line by multiple spaces
    const dataRow = lines[2].split(/\s{2,}/); // Split the third line by multiple spaces
    if (headerRow.length === dataRow.length) {
      return "TABLE";
    }
  }

  return "NORMAL";
}
