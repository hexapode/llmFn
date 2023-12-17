
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column patterns
  const lines = inputText.split("\n");
  
  for (let line of lines) {
    // Check for tabular structure based on line length and content
    if (line.includes("|") && line.length > 30) {
      return "TABLE";
    }
    
    // Check for column-like structure based on indentation
    if (line.startsWith("  ") || line.startsWith("\t")) {
      return "COLUMNS";
    }
  }

  return "NORMAL";
}
