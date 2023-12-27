
function doesItContainTableOrColumns(inputText) {
  let lines = inputText.split('\n');
  let tableLinesCount = 0;
  let columnsLinesCount = 0;

  for (let line of lines) {
    if (line.includes('|') && line.includes('-')) {
      tableLinesCount++;
      columnsLinesCount++;
    } else if (line.includes('|')) {
      columnsLinesCount++;
    } else if (line.includes('-')) {
      tableLinesCount++;
    }
  }

  if (tableLinesCount > 0 && columnsLinesCount > 0) {
    return 'TABLE_AND_COLUMNS';
  } else if (tableLinesCount > 0) {
    return 'TABLE';
  } else if (columnsLinesCount > 0) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
