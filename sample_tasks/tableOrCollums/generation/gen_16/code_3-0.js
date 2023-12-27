
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains table or columns
  if (inputText.includes('Proposed') && inputText.includes('Floor') && inputText.includes('Proposed Space Description') && inputText.includes('Guidelines') && inputText.includes('SF') && inputText.includes('Classroom') && inputText.includes('Room Name') && inputText.includes('Plan')) {
    return "TABLE";
  } else if (inputText.includes('Proposed') && inputText.includes('Floor') && inputText.includes('Proposed Space Description') && inputText.includes('Guidelines') && inputText.includes('SF') && inputText.includes('Classroom') && inputText.includes('Room Name') && inputText.includes('Plan') && inputText.includes('Unique to') && inputText.includes('District')) {
    return "COLUMNS";
  } else if (inputText.includes('Proposed') && inputText.includes('Floor') && inputText.includes('Proposed Space Description') && inputText.includes('Guidelines') && inputText.includes('SF') && inputText.includes('Classroom') && inputText.includes('Room Name') && inputText.includes('Plan') && inputText.includes('Unique to') && inputText.includes('District')) {
    return "TABLE_AND_COLUMNS";
  } else {
    return "NORMAL";
  }
}
