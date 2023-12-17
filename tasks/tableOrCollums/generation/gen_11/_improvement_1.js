/* Best score: 9 */


function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains any table-related patterns
  const tableRegex = /(\w+\s+){2,}\w+/; // Matches rows with at least two words separated by spaces
  const containsTable = tableRegex.test(inputText);

  // Check if the input text contains any column-related patterns
  const columnRegex = /\w+(\s+\w+)+/; // Matches columns with at least two words in each row
  const containsColumns = columnRegex.test(inputText);

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
