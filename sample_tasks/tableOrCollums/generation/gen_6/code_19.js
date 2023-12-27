
function doesItContainTableOrColumns(text) {
  // Removing non-alphanumeric characters
  let cleanedText = text.replace(/[^a-zA-Z0-9\s]/g, "");

  // Check if the text contains typical table features such as rows and columns
  if (cleanedText.includes('|') || cleanedText.includes('+') || cleanedText.includes('-')) {
    return "TABLE";
  }

  // Check if the text contains typical columnar structure
  if (cleanedText.split('\n').every(row => row.trim().split(/\s{2,}/).length > 1)) {
    return "COLUMNS";
  }

  // If none of the above conditions is met, classify as normal text
  return "NORMAL";
}
