
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains patterns typical of tables or columns
  const lines = inputText.split('\n').map(line => line.trim());
  
  // Check for pipe or tab separators for columns
  const columnSeparator = /(\||\t)/;
  const containsColumnSeparator = lines.some(line => line.match(columnSeparator));
  
  // Check for lines with similar lengths to identify rows
  const lineLengths = lines.map(line => line.length);
  const averageLineLength = lineLengths.reduce((a, b) => a + b, 0) / lineLengths.length;
  const similarLineLengths = lineLengths.filter(length => Math.abs(length - averageLineLength) < 5);
  
  if (containsColumnSeparator && similarLineLengths.length > 1) {
    return "TABLE_AND_COLUMNS";
  } else if (containsColumnSeparator) {
    return "COLUMNS";
  } else if (similarLineLengths.length > 1) {
    return "TABLE";
  } else {
    return "NORMAL";
  }
}
