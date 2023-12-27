
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains table or columns
  if (inputText.includes('Guidelines Spac') && inputText.includes('Room Name') && inputText.includes('SF')) {
    return "TABLE";
  } else if (inputText.includes('Guidelines Spac') && inputText.includes('Room Name') && inputText.includes('SF') && inputText.includes('District') && inputText.includes('A1 & 2') && inputText.includes('B1 & 2') && inputText.includes('C1 & 2') && inputText.includes('D') && inputText.includes('E1 & 2') && inputText.includes('F') && inputText.includes('O1') && inputText.includes('E3 & 4') && inputText.includes('G1 & 2') && inputText.includes('H1 to 5') && inputText.includes('I') && inputText.includes('J') && inputText.includes('K') && inputText.includes('L') && inputText.includes('M') && inputText.includes('N') && inputText.includes('O2')) {
    return "COLUMNS";
  } else if (inputText.includes('Guidelines Spac') && inputText.includes('Room Name') && inputText.includes('SF') && inputText.includes('District') && inputText.includes('A1 & 2') && inputText.includes('B1 & 2') && inputText.includes('C1 & 2') && inputText.includes('D') && inputText.includes('E1 & 2') && inputText.includes('F') && inputText.includes('O1') && inputText.includes('E3 & 4') && inputText.includes('G1 & 2') && inputText.includes('H1 to 5') && inputText.includes('I') && inputText.includes('J') && inputText.includes('K') && inputText.includes('L') && inputText.includes('M') && inputText.includes('N') && inputText.includes('O2')) {
    return "TABLE_AND_COLUMNS";
  } else {
    return "NORMAL";
  }
}
