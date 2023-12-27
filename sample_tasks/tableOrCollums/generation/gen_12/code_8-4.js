
function doesItContainTableOrColumns(text) {
  const lines = text.split('\n').map(line => line.trim());

  // Check if the text represents a table
  if (lines.length >= 3) {
    const headerRow = lines[1].split(/\s{2,}|\t/).filter(val => val !== ''); // Split the second line by multiple spaces or tabs
    const dataRow = lines[2].split(/\s{2,}|\t/).filter(val => val !== ''); // Split the third line by multiple spaces or tabs
    if (headerRow.length === dataRow.length) {
      return "TABLE";
    }
  }

  // Check if the text represents columns
  const columnHeaders = lines[0].split(/\s{2,}|\t/).filter(val => val !== ''); // Split the first line by multiple spaces or tabs
  if (columnHeaders.length > 1) {
    return "COLUMNS";
  }

  // If the text does not match the table or column structure, return "NORMAL"
  return "NORMAL";
}
