
function doesItContainTableOrColumns(text) {
  const tableRegex = /(\bproject name\b)|(\bcountry\b)|(\bproject type\b)|(\bproject benefits\b)|(\bvendor\b)|(\btonnes\b)/i;
  const columnRegex = /(\b(paula garcas|korede azeez|mirwais sarwary|aditi sharma)\b)|(\b(graudate from the netflix series directors|winner of the african folktales|participant in the new producers academy|graduate of the netflix x film companion)\b)/i;

  if (tableRegex.test(text) && columnRegex.test(text)) {
    return 'TABLE_AND_COLUMNS';
  } else if (tableRegex.test(text)) {
    return 'TABLE';
  } else if (columnRegex.test(text)) {
    return 'COLUMNS';
  } else {
    return 'NORMAL';
  }
}
