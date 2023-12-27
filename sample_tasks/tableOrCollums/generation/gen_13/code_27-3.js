
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters within specific context
  if (inputText.includes('|') && inputText.includes('-') && inputText.includes('Release Details.') && inputText.includes('Large Language Models.')) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|') && inputText.includes('Release Details.')) {
    return 'COLUMNS';
  } else if (inputText.includes('-') && inputText.includes('Large Language Models.')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
