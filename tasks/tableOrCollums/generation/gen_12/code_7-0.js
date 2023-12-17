
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents columns
  const columnHeaders = lines[0].split(/\s{2,}/); // Split the first line by multiple spaces
  if (columnHeaders.length > 1) {
    // Check if subsequent lines have consistent indentation and content
    const indentations = lines.map(line => line.match(/^\s*/)[0].length);
    const uniqueIndentations = [...new Set(indentations)];
    if (uniqueIndentations.length === 1) {
      return "COLUMNS";
    }
  }

  // If the text does not match the column structure, check for the presence of a table
  if (lines.length >= 3) {
    const headerRow = lines[1].split(/\s{2,}/);
    const dataRow = lines[2].split(/\s{2,}/);
    if (headerRow.length === dataRow.length) {
      return "TABLE";
    }
  }

  // If the text does not match the column or table structure, return "NORMAL"
  return "NORMAL";
}
