
function doesItContainTableOrColumns(inputText) {
  // Checking if the input includes typical table-related words
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);

  // Checking if the input includes typical column-related words
  const containsColumns = /(column|col|row|cell)/i.test(inputText);

  // If the input includes typical table words and does not include typical column words
  if (containsTable && !containsColumns) {
    return "TABLE";
  }
  // If the input includes typical column words and does not include typical table words
  if (!containsTable && containsColumns) {
    return "COLUMNS";
  }
  // If the input includes both typical table and column words
  if (containsTable && containsColumns) {
    // If there are more instances of "td" compared to "tr", it's mainly columns
    const tdCount = (inputText.match(/td/gi) || []).length;
    const trCount = (inputText.match(/tr/gi) || []).length;
    if (tdCount > trCount) {
      return "COLUMNS";
    } else {
      return "TABLE";
    }
  }
  // If none of the conditions are met, it's a normal text
  return "NORMAL";
}
