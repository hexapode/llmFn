
function doesItContainTableOrColumns(text) {
  // Check if the text contains a table heading and structured data
  if (text.includes("Num.") && text.includes("Batch") && text.includes("Comparisons") &&
      text.includes("Avg. # Turns") && text.includes("Avg. # Tokens")) {
    return "TABLE";
  }
  // Check if the text contains the word "table" and table-related content
  else if (text.toLowerCase().includes("table")) {
    return "TABLE";
  }
  // If none of the above conditions are met, return "NORMAL"
  else {
    return "NORMAL";
  }
}
