
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-') && (inputText.includes('Release Details') || inputText.includes('Responsibility Release') || inputText.includes('Starting with') || inputText.includes('Large Language Models'))) {
    return 'TABLE_AND_COLUMNS';
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
