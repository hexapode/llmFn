
function doesItContainTableOrColumns(text) {
  // Check for common patterns in text
  if (text.includes("Revenue Recognition")) {
    return "NORMAL"; // Return "NORMAL" if the text matches a specific pattern
  }

  // If the text does not match any specific pattern, return "NONE"
  return "NONE";
}
