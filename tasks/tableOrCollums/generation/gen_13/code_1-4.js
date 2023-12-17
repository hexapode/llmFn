
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains a more complex table structure
  if (/\s+\d+(\.\d+)?\s+\d+(\.\d+)?\s+\d+(\.\d+)?(\s+\d+(\.\d+)?)*\s+/.test(inputText)) {
    return 'TABLE_AND_COLUMNS';
  }

  // Check if inputText contains typical table delimiter
  if (inputText.includes('|')) {
    return 'COLUMNS';
  }

  // Check if inputText contains typical column delimiter
  if (inputText.includes('-')) {
    return 'TABLE';
  }

  // Default to normal text if none of the above conditions are met
  return 'NORMAL';
}
