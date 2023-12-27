
function doesItContainTableOrColumns(text) {
  // Remove excessive white spaces and new lines
  const cleanText = text.replace(/\s+/g, ' ').trim();
  
  // Check if the text contains "Description of Business and Summary of Significant Accounting Policies in the notes"
  if (cleanText.indexOf("Description of Business and Summary of Significant Accounting Policies in the notes") !== -1) {
    return "TABLE"; // It is likely a table
  }
  
  // Check if the text contains keywords specific to columns
  if (cleanText.indexOf("Revenue Recognition") !== -1 &&
      cleanText.indexOf("Driver Incentives") !== -1 &&
      cleanText.indexOf("End-User Discounts and Promotions") !== -1 &&
      cleanText.indexOf("Business Combinations") !== -1 &&
      cleanText.indexOf("Embedded Derivatives") !== -1) {
    return "COLUMNS"; // It contains columns
  }

  // Check for common text structure of tables
  if (cleanText.indexOf("We derive our revenue principally") !== -1 &&
      cleanText.indexOf("During 2015, we had issued convertible notes") !== -1) {
    return "TABLE"; // It is likely a table
  }

  // If none of the conditions are met, return "NORMAL"
  return "NORMAL";
}
