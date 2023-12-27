
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains any table-related keywords
  const tableKeywords = ['<table>', '<tr>', '<th>', '<td>', 'border', 'cellpadding', 'cellspacing'];
  const containsTable = tableKeywords.some(keyword => inputText.includes(keyword));

  // Check if the input text contains any column-related keywords
  const columnKeywords = ['<th>', '<td>', 'colspan', 'rowspan'];
  const containsColumns = columnKeywords.some(keyword => inputText.includes(keyword));

  // Check if the input contains the structure of columns
  const columnStructure = inputText.split('\n').every(row => (
    row.trim().startsWith(' ') || row.trim() === ''
  ));

  if (containsTable && containsColumns) {
    return 'TABLE_AND_COLUMNS';
  } else if (containsTable) {
    return 'TABLE';
  } else if (containsColumns || columnStructure) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
