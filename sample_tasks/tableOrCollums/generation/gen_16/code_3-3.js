
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains table or columns
  if (/^\|(.*?)\|(.*?)\|(.*?)\|(.*?)\|(.*?)\|(.*?)$/m.test(inputText)) {
    return "COLUMNS";
  } else if (/^\+(?:-+\+)+$/m.test(inputText)) {
    return "TABLE";
  } else if (/^\|(.*?)\|(.*?)\|(.*?)\|(.*?)\|(.*?)\|(.*?)$/m.test(inputText) && /^\+(?:-+\+)+$/m.test(inputText)) {
    return "TABLE_AND_COLUMNS";
  } else {
    return "NORMAL";
  }
}
