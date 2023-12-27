
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if there are enough delimiters to define a table structure
    let lines = inputText.split('\n');
    let delimiterCount = 0;
    for (let line of lines) {
      delimiterCount += line.split('|').length - 1;
      delimiterCount += line.split('-').length - 1;
    }
    // If the total number of delimiters is less than a threshold, consider as normal text
    if (delimiterCount < lines.length * 4) {
      return 'NORMAL';
    } else {
      return 'TABLE_AND_COLUMNS';
    }
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
