
function doesItContainTableOrColumns(text) {
  // Check if the text contains any typical table elements
  if (text.includes('table') || text.includes('tb') || text.includes('tr') || text.includes('th') || text.includes('td')) {
    // Check if the text also includes typical column elements
    if (text.includes('column') || text.includes('col') || text.includes('column 1') || text.includes('col 1')) {
      return 'TABLE_AND_COLUMNS';
    } else {
      return 'TABLE';
    }
  } else if (text.includes('column') || text.includes('col') || text.includes('column 1') || text.includes('col 1')) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
