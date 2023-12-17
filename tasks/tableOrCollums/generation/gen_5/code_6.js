
function doesItContainTableOrColumns(inputText) {
  const lines = inputText.split('\n');
  
  // Function to check if a line has aligned characters
  function hasAlignedCharacters(line) {
    const segments = line.split(/\s+/).filter(segment => segment.trim() !== '');
    if (segments.length > 1) {
      const firstSegmentLength = segments[0].length;
      return segments.every(segment => segment.length === firstSegmentLength);
    }
    return false;
  }
  
  const alignedLinesCount = lines.filter(line => hasAlignedCharacters(line)).length;
  
  if (alignedLinesCount > 1) {
    return "TABLE_OR_COLUMNS";
  } else {
    return "NORMAL";
  }
}
