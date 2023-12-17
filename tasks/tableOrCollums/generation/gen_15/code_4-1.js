
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);

  // Check for specific patterns to differentiate between table and columns
  if (containsTable && containsColumns) {
    // Check if there are more instances of "td" compared to "tr" to determine if it's mainly columns
    const tdCount = (inputText.match(/td/gi) || []).length;
    const trCount = (inputText.match(/tr/gi) || []).length;
    if (tdCount > trCount) {
      return "COLUMNS";
    } else {
      return "TABLE";
    }
  } else if (containsTable) {
    // Check if the text contains "td" and "tr" but in a non-table related context
    if(/(we)|(how)|(the)|(and)|(is)|(we’re)|(to)|(for)|(on)|(our)|(of)|(in)|(by)|(that)|(a)|(or)|(an)/i.test(inputText)){
        return "NORMAL";
    }
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
