
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  const lines = inputText.split('\n').map(line => line.trim());

  // Check if any line contains only '|'
  const containsOnlyPipes = lines.some(line => /^( *\|)+$/g.test(line));

  // Check if any line contains '-'
  const containsHyphen = lines.some(line => line.includes('-'));

  if (containsOnlyPipes && containsHyphen) {
    return 'TABLE_AND_COLUMNS';
  } else if (containsOnlyPipes) {
    return 'COLUMNS';
  } else if (containsHyphen) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
