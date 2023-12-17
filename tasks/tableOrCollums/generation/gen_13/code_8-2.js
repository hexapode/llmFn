
function doesItContainTableOrColumns(inputText) {
  // Check for common delimiters and patterns for tables and columns
  if (/\|\s*[^\|\n]+\s*(?:\|\s*[^\|\n]+\s*)+\|/.test(inputText)) {
    return 'TABLE';
  } else if (/^.+\|((\s*[^|\n]+\s*)+-)+\s*[^|\n]+\s*(?:\|.*)*$/m.test(inputText)) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
