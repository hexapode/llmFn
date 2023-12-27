
function doesItContainTableOrColumns(inputText) {
  // Check if inputText contains any typical table or columns patterns
  const lines = inputText.split('\n').map(line => line.trim());
  const isTableLike = lines.some(line => line.includes('|') && line.includes('-'));
  const isColumnsLike = lines.some(line => line.includes('|') && !line.includes('-'));
  
  if (isTableLike && isColumnsLike) {
    return 'TABLE_AND_COLUMNS';
  } else if (isTableLike) {
    return 'TABLE';
  } else if (isColumnsLike) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
