
function doesItContainTableOrColumns(text) {
  // Check if the text contains any table-related keywords or specific structure
  const isLikelyTable = /description\s+of\s+business/i.test(text) && /significant\s+accounting\s+policies/i.test(text);
  // If the text does not contain explicit table-related keywords or structure, return "NORMAL"
  if (!isLikelyTable) {
    return "NORMAL";
  }
  // Otherwise, return "TABLE"
  else {
    return "TABLE";
  }
}
