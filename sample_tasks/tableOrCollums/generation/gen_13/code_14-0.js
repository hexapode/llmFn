
function doesItContainTableOrColumns(inputText) {
  if (/\|.*\|/g.test(inputText) && /-.*-/g.test(inputText)) {
    return 'TABLE_AND_COLUMNS';
  } else if (/\|.*\|/g.test(inputText)) {
    return 'COLUMNS';
  } else if (/-.*-/g.test(inputText)) {
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
