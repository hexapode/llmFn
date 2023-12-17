
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  // Check if inputText contains any typical table or columns delimiters
  const lines = inputText.split('\n');
  const columnCounts = lines.map(line => line.split(/\s{2,}/).length);
  const avgColumnCount = columnCounts.reduce((a, b) => a + b, 0) / columnCounts.length;

  if (avgColumnCount > 1) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
