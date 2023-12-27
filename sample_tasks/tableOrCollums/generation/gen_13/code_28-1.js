
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  let lines = inputText.split('\n');
  let containsPipe = false;
  let containsDash = false;
  for (let line of lines) {
    if (line.includes('|')) {
      containsPipe = true;
    }
    if (line.includes('-')) {
      containsDash = true;
    }
  }
  if (containsPipe && containsDash) {
    return 'TABLE_AND_COLUMNS';
  } else if (containsPipe) {
    return 'COLUMNS';
  } else if (containsDash) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
