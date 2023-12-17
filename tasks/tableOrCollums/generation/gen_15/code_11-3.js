
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);

  // Check for specific patterns related to renewable energy and emissions data
  const isRenewableEnergyRelated = /renewable energy|energy consumption|carbon footprint|emissions|metric tons CO2e|Scope 1 and 2 CO2e emissions/i.test(inputText);

  if (containsTable && containsColumns) {
    if (isRenewableEnergyRelated) {
      return "NORMAL";
    } else {
      const tdCount = (inputText.match(/td/gi) || []).length;
      const trCount = (inputText.match(/tr/gi) || []).length;
      
      if (tdCount > trCount) {
        return "COLUMNS";
      } else {
        return "TABLE";
      }
    }
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
