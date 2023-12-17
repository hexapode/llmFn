
function doesItContainTableOrColumns(text) {
  // Calculate average line length and standard deviation
  const lines = text.split('\n').map(line => line.trim());
  const totalChars = lines.reduce((acc, line) => acc + line.length, 0);
  const averageLineLength = totalChars / lines.length;
  const standardDeviation = Math.sqrt(lines.reduce((acc, line) => acc + Math.pow(line.length - averageLineLength, 2), 0) / lines.length);

  // Check if the text contains a table based on statistical analysis
  if (standardDeviation < 10 && averageLineLength > 50) {
    return "TABLE_OR_COLUMNS";
  }

  // If the statistical analysis does not indicate a table or columns, classify as normal text
  return "NORMAL";
}
