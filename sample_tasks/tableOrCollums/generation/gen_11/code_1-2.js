
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains any table-related keywords
  const tableKeywords = ['<table>', '<tr>', '<th>', '<td>', 'border', 'cellpadding', 'cellspacing'];
  const containsTable = tableKeywords.some(keyword => inputText.includes(keyword));

  // Check if the input text contains column-like structure
  const containsColumns = inputText.split('\n').some(line => {
    // Check if the line contains multiple words separated by spaces, indicating potential columns
    return line.trim().split(/\s+/).length > 1;
  });

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
