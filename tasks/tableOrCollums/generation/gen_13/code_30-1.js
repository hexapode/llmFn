
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if there are more columns than rows to determine if it's a table or columns
    const rows = inputText.split('\n');
    const firstRowColumnsCount = rows[0].split('|').length - 1;
    let columnsCount = 0;
    for (let i = 1; i < rows.length; i++) {
      const currentColumnsCount = rows[i].split('|').length - 1;
      if (currentColumnsCount > columnsCount) {
        columnsCount = currentColumnsCount;
      }
    }
    if (columnsCount > firstRowColumnsCount) {
      return 'COLUMNS';
    } else {
      return 'TABLE';
    }
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
