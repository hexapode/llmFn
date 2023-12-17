
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  if (inputText.includes('|') && inputText.includes('-')) {
    if (/\|.*\|/gm.test(inputText) && /-.*-/gm.test(inputText)) {
      return 'TABLE_AND_COLUMNS';
    }
  } else if (inputText.includes('|')) {
    if (/\|.*\|/gm.test(inputText)) {
      return 'COLUMNS';
    }
  } else if (inputText.includes('-')) {
    if (/-.*-/gm.test(inputText)) {
      return 'TABLE';
    }
  }
  return 'NORMAL';
}
