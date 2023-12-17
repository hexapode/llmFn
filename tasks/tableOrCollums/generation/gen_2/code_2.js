
function doesItContainTableOrColumns(text) {
  const tableRegex = /(\bproject name\b)|(\bcountry\b)|(\bproject type\b)|(\bproject benefits\b)|(\bvendor\b)|(\btonnes\b)/i;
  const columnRegex = /(\bmycorrhizal inoculation\b)|(\bchile\b)|(\bremoval\b)|(\badvances biotechnology\b)|(\bmikro-tek\b)|(\baccelerated reforestation\b)|(\bkenya\b)|(\bretention\b)|(\bbiodiversity\b)|(\bred d\+ project\b)|(\bbrazil\b)|(\bmethane\b)|(\breduced pollution\b)|(\bbangladesh gas\b)|(\bleak reduction\b)|(\busa\b)|(\bfire prevention\b)|(\bnetworking\b)|(\bnetflix\b)/i;

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
