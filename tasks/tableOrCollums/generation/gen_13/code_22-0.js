
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    // Check if the appearance of table or columns delimiters is accidental or actually part of a structure
    let lines = inputText.split('\n');
    let countPipe = 0;
    let countDash = 0;
    for (let line of lines) {
      countPipe += (line.split('|').length - 1);
      countDash += (line.split('-').length - 1);
    }
    // If the appearance of delimiters is found in a structured manner, then return TABLE_AND_COLUMNS
    if (countPipe > 3 && countDash > 3) {
      return 'TABLE_AND_COLUMNS';
    }
  } else if (inputText.includes('|')) {
    return 'COLUMNS';
  } else if (inputText.includes('-')) {
    return 'TABLE';
  }
  return 'NORMAL';
}
