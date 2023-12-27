
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);
  const notExpectedKeywords = /(accounting|revenue|recognition|judgment|incentives|discounts|promotions|combinations|management|estimates|fair value|derivatives)/i.test(inputText);
  
  // Check for specific patterns to differentiate between table and columns
  if (containsTable && containsColumns && !notExpectedKeywords) {
    return "TABLE_AND_COLUMNS";
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
