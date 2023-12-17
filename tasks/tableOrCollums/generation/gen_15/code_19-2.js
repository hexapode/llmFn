
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);

  // Check for the ratio of "td" to "tr" to determine if it's mainly columns
  if (containsTable && containsColumns) {
    const tdCount = (inputText.match(/td/gi) || []).length;
    const trCount = (inputText.match(/tr/gi) || []).length;

    if (tdCount > trCount) {
      return "COLUMNS";
    } else {
      return "TABLE";
    }
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
