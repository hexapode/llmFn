
function doesItContainTableOrColumns(inputText) {
  const lines = inputText.split('\n').map(line => line.trim());
  const nonEmptyLines = lines.filter(line => line !== '');

  // Check for the presence of '|' and '-' in the context of the lines
  const containsVerticalBar = nonEmptyLines.some(line => line.includes('|'));
  const containsHyphen = nonEmptyLines.some(line => line.includes('-'));

  if (containsVerticalBar && containsHyphen) {
    return 'TABLE_AND_COLUMNS';
  } else if (containsVerticalBar) {
    return 'COLUMNS';
  } else if (containsHyphen) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
