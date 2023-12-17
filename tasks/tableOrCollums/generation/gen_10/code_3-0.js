
function doesItContainTableOrColumns(text) {
  // Check for the presence of vertical lines '|' to indicate columns
  if (text.includes("|")) {
    return "TABLE";
  }

  // You can also add other patterns based on the specific structure of the input text

  // If none of the above conditions are met, return "NORMAL"
  return "NORMAL";
}
