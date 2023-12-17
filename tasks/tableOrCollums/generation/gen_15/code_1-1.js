
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(\btable\b|\bthead\b|\btbody\b|\bth\b|\btr\b|\btd\b)/i.test(inputText);
  const containsColumns = /(\bcolumn\b|\bcol\b|\brow\b|\bcell\b)/i.test(inputText);

  if (containsTable && !containsColumns) {
    return "TABLE";
  } else if (containsColumns && !containsTable) {
    return "COLUMNS";
  } else if (containsTable && containsColumns) {
    return "TABLE_AND_COLUMNS";
  } else {
    return "NORMAL";
  }
}
