
function doesItContainTableOrColumns(text) {
  // Function to calculate the character distribution within a string
  function getCharacterDistribution(str) {
    const distribution = { total: 0, space: 0, nonspace: 0 };
    for (let char of str) {
      if (char === ' ') {
        distribution.space++;
      } else {
        distribution.nonspace++;
      }
      distribution.total++;
    }
    return distribution;
  }

  // Analyze the character distribution of each line in the text
  const lineDistributions = text.split('\n').map(line => getCharacterDistribution(line));

  // Check if the text contains typical table features based on character distribution
  const isTable = lineDistributions.some(distribution => distribution.space > 0 && distribution.nonspace > 0);

  // Check if the text contains typical columnar structure based on character distribution
  const isColumns = lineDistributions.every(distribution => distribution.space > 0 && distribution.nonspace > 0);

  // Determine the classification based on the analysis
  if (isTable && isColumns) {
    return "TABLE_AND_COLUMNS";
  } else if (isTable) {
    return "TABLE";
  } else if (isColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
