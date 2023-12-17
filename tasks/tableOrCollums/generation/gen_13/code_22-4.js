
function doesItContainTableOrColumns(inputText) {
  // Split the input text into lines
  const lines = inputText.trim().split('\n');

  // Check if the inputText resembles a table or columns
  if (lines.length > 1) {
    // Check for consistent separator lines
    const separatorLine = lines[1].trim();
    const isTable = lines.every(line => line.trim() === separatorLine);
    if (isTable) {
      return 'TABLE';
    }

    // Check for consistent spacing and alignment within lines
    const columnWidths = lines[0].match(/\S+/g).map(col => col.length);
    const isColumns = lines.every(line => {
      const cols = line.match(/\S+/g) || [];
      return cols.length === columnWidths.length && cols.every((col, i) => col.length === columnWidths[i]);
    });
    if (isColumns) {
      return 'COLUMNS';
    }
  }

  return 'NORMAL';
}
