
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters

  // Remove white spaces and new lines to make the search more accurate
  const processedText = inputText.replace(/\s/g, "");

  if (processedText.includes('|') && processedText.includes('-')) {
    // Check if the '|' and '-' characters are likely to be used as table or columns delimiters
    // We can add more specific checks here to make the detection more accurate
    return 'TABLE_AND_COLUMNS';
  } else if (processedText.includes('|')) {
    // If only '|' is found, it's likely to be columns
    return 'COLUMNS';
  } else if (processedText.includes('-')) {
    // If only '-' is found, it's likely to be part of a table
    return 'TABLE';
  } else {
    return 'NORMAL';
  }
}
