
function doesItContainTableOrColumns(text) {
  // Check if the text contains any tabular structure indicators
  if (/\|/.test(text) || /&\w+;/g.test(text) || /(\s{2,}[\w\s]+)+\s{2,}/.test(text)) {
    // If the text contains indicators of both table and columns, return "TABLE_AND_COLUMNS"
    if (/\|/.test(text) && /(\s{2,}[\w\s]+)+\s{2,}/.test(text)) {
      return "TABLE_AND_COLUMNS";
    }
    // If the text contains indicators of a table, return "TABLE"
    else if (/\|/.test(text)) {
      return "TABLE";
    }
    // If the text contains indicators of columns, return "COLUMNS"
    else if (/(\s{2,}[\w\s]+)+\s{2,}/.test(text)) {
      return "COLUMNS";
    }
  }

  // If the text does not contain any tabular structure indicators, return "NORMAL"
  return "NORMAL";
}
