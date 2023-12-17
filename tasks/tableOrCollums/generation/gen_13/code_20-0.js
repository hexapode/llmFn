
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns delimiters
  var lines = inputText.split('\n').filter(Boolean); // Split the inputText by new line and remove empty lines
  if (lines.length > 2) {
    var line1 = lines[0].trim();
    var line2 = lines[1].trim();
    if (line1.length === line2.length && line1.replace(/\s+/g, '') === line2.replace(/\s+/g, '')) {
      return 'TABLE';
    } else {
      return 'NORMAL';
    }
  }
  return 'NORMAL';
}
