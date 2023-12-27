
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains typical table or columns delimiters in context
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if '|' is used to separate columns and '-' is used to create the table structure
    if (inputText.indexOf('|') < inputText.indexOf('-')) {
      return 'TABLE_AND_COLUMNS';
    }
    // Check if '-' is only used without '|'
    for(let line of inputText.split('\n')) {
      if (line.trim().startsWith('-')) {
        return "TABLE";
      }
    }
    // Check if '|' is only used without '-'
    return 'COLUMNS';
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
