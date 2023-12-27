
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    let lines = inputText.split('\n');
    let countPipe = 0;
    let countDash = 0;
    for (let line of lines) {
      if (line.includes('|')) {
        countPipe++;
      }
      if (line.includes('-')) {
        countDash++;
      }
    }
    if (countPipe > 1 && countDash > 1) {
      return 'TABLE_AND_COLUMNS';
    } else if (countPipe > 1) {
      return 'COLUMNS';
    } else if (countDash > 1) {
      return 'TABLE';
    } else {
      return 'NORMAL';
    }
  } else {
    return 'NORMAL';
  }
}
