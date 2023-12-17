
function doesItContainTableOrColumns(inputText) {
  // Check for the presence of actual HTML table tags
  const containsHTMLTable = /<\s*table[^>]*>/.test(inputText);

  // Check for patterns that resemble a tabular structure
  const containsTabularPattern = /(\|\s{1,}\||\+\-+\+|\+\-+\+\-+\+|\+-+\+-+|[\s\w]+\s{2,}[\s\w]+(\s{2,}|$))+/.test(inputText);

  if (containsHTMLTable && containsTabularPattern) {
    return "TABLE_AND_COLUMNS";
  } else if (containsHTMLTable) {
    return "TABLE";
  } else if (containsTabularPattern) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
