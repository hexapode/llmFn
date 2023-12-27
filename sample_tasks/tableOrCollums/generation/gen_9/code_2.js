
function doesItContainTableOrColumns(inputText) {
  // Check for horizontal and vertical lines to detect a table
  if (inputText.match(/\+[-|+]+\+/g) && inputText.match(/\|/g)) {
    // Check for numerical patterns to detect columns
    if (inputText.match(/\d+\.\d+\s+\d+\.\d+\s+\d+\.\d+/g)) {
      return "TABLE_AND_COLUMNS";
    } else {
      return "TABLE";
    }
  } else {
    // No table detected, check for numerical patterns to detect columns
    if (inputText.match(/\d+\.\d+\s+\d+\.\d+\s+\d+\.\d+/g)) {
      return "COLUMNS";
    } else {
      return "NORMAL";
    }
  }
}
