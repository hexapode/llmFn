
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  // Check for columns delimiter first before the table delimiter
  if (inputText.includes('|')) {
    // If inputText contains |, it indicates columns
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    // If inputText contains -, it indicates table
    return 'TABLE';
  } else {
    // If neither columns nor table delimiters are found, return NORMAL
    return 'NORMAL';
  }
}
