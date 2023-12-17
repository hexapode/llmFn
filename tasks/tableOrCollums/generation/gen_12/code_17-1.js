
function doesItContainTableOrColumns(text) {
  // Split the text into lines
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  if (lines.length >= 3) {
    const headerRow = lines[1].split(/\s{2,}/); // Split the second line by multiple spaces
    const dataRow = lines[2].split(/\s{2,}/); // Split the third line by multiple spaces
    if (headerRow.length === dataRow.length) {
      return "TABLE";
    }
  }

  // Check if the text represents columns
  const nonEmptyLines = lines.filter(line => line.trim() !== ""); // Remove empty lines
  const hasSeparatorLine = nonEmptyLines.some(line => line.match(/^-+$/)); // Check for a separator line
  if (nonEmptyLines.every(line => line.includes("\t") || line.includes("  "))) {
    return "COLUMNS";
  } else if (nonEmptyLines.length >= 2 && !hasSeparatorLine) {
    const firstRowEntries = nonEmptyLines[0].split(/\s{2,}/);
    const secondRowEntries = nonEmptyLines[1].split(/\s{2,}/);
    if (firstRowEntries.length > 1 && firstRowEntries.length === secondRowEntries.length) {
      return "COLUMNS";
    }
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
