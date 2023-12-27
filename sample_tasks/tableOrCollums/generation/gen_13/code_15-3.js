
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  // First, let's split the inputText into lines
  const lines = inputText.split('\n');
  // Then, let's check each line for the presence of multiple space-separated words
  for (const line of lines) {
    const words = line.trim().split(/\s+/); // Split by one or more spaces
    if (words.length > 1) {
      return 'COLUMNS';
    }
  }
  return 'NORMAL';
}
