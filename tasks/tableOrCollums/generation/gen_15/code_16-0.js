
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);

  // Check for specific patterns to differentiate between table and columns
  if (containsTable && containsColumns) {
    // Check if there are more instances of "||" compared to "===" to determine if it's mainly columns
    const columnCount = (inputText.match(/\|\|/g) || []).length;
    const equalCount = (inputText.match(/===/g) || []).length;
  
    // Additionally check for specific keywords related to columns
    const containsColumnsKeywords = /(VP|Environment|Policy|Social Initiatives|CEO|offices|energy|power|operations|data center|retail store|corporate office|colocation facility)/i.test(inputText)

    if (containsColumnsKeywords) {
      return "COLUMNS";
    } else if (columnCount > equalCount) {
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
