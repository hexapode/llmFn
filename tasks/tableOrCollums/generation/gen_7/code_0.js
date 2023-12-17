
function doesItContainTableOrColumns(inputText) {
  // Remove all whitespace and new lines
  const text = inputText.replace(/\s/g, "");

  // Check if the text contains the common table or column delimiters
  const containsTable = text.includes("<table>") || text.includes("</table>") || text.includes("<tr>") || text.includes("</tr>") || text.includes("<td>") || text.includes("</td>");
  const containsColumns = text.includes("|") || text.includes("||") || text.includes("----") || text.includes("------");

  // Return the appropriate classification
  if (containsTable && containsColumns) {
    return "TABLE_AND_COLUMNS";
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}
