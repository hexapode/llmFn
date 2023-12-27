
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains any table-related keywords
  const tableKeywords = ['<table>', '<tr>', '<th>', '<td>', 'border', 'cellpadding', 'cellspacing'];
  const containsTable = tableKeywords.some(keyword => inputText.includes(keyword));

  // Check if the input text contains columns based on layout structure
  const lines = inputText.split('\n').map(line => line.trim());
  const columnCounts = lines.map(line => line.split(/\s{2,}/).length);
  const containsColumns = columnCounts.some(count => count > 1);

  if (containsTable && containsColumns) {
    return 'TABLE_AND_COLUMNS';
  } else if (containsTable) {
    return 'TABLE';
  } else if (containsColumns) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
