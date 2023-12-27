
function doesItContainTableOrColumns(inputText) {
  // Check for patterns indicating the presence of tables or columns
  const lines = inputText.split('\n').filter(line => line.trim() !== '');
  const firstLineLength = lines[0].trim().length;
  const isColumnBased = lines.every(line => line.trim().length === firstLineLength);

  if (isColumnBased) {
    return "COLUMNS";
  }

  // Check for table patterns based on consistent spacing and alignments
  const lineLengths = lines.map(line => line.trim().length);
  const isTableBased = lineLengths.every((length, index) => index === 0 || length === lineLengths[0]);

  if (isTableBased) {
    return "TABLE";
  }

  return "NORMAL";
}
