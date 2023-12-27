{
  "llm": [
    {
      "role": "system",
      "content": "You are a programmer, and you need to build a javascript funtion to solve the following task:\nDetermine if the input text contain table or collumns. The input text is the output of an OCR render to a textfile while preserving layout.\nTo solve this task you need to create a javascript function that take into parameters Text to be classified and return Either TABLE, COLUMNS, TABLE_AND_COLUMNS or NORMAL.\nOutput the code between ```javascript and ``` tags.\nDo not add usage sample code, only output the functions.\nYour are not allow to use any external library or call any external service/library/function.\nThe function should be named doesItContainTableOrColumns.\n"
    },
    {
      "role": "assistant",
      "content": "```javascript\nfunction doesItContainTableOrColumns(text) {\n  // Check if the text contains typical table features such as rows and columns\n  if (text.includes('|') || text.includes('+') || text.includes('-')) {\n    return \"TABLE\";\n  }\n\n  // Check if the text contains typical columnar structure\n  if (text.split('\\n').every(row => row.trim().split(/\\s{2,}/).length > 1)) {\n    return \"COLUMNS\";\n  }\n\n  // Check if the text contains both table and columnar structure\n  if (text.includes('|') && text.split('\\n').every(row => row.trim().split(/\\s{2,}/).length > 1)) {\n    return \"TABLE_AND_COLUMNS\";\n  }\n\n  // If none of the above conditions is met, classify as normal text\n  return \"NORMAL\";\n}\n```\n"
    },
    {
      "role": "user",
      "content": "Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then implement it in the function."
    },
    {
      "role": "assistant",
      "content": "One novel approach to determine if the input text contains a table or columns is to analyze the distribution of spaces and non-space characters in the text. In typical table structures, the spacing between columns is consistent and there are vertical alignment patterns due to the presence of pipe (|) or plus (+) symbols. On the other hand, in columnar structures, the spacing between columns is irregular, but there is a consistent distribution of non-space characters in each row.\n\nThis approach makes sense because it leverages the inherent structure of tables and columns, and can provide a more pattern-based analysis of the text.\n\nHere's how we can implement this approach in the function:\n\n```javascript\nfunction doesItContainTableOrColumns(text) {\n  let lines = text.split('\\n');\n  let isTable = true;\n  let isColumns = true;\n\n  // Check for table structure\n  for (let i = 1; i < lines.length; i++) {\n    if (lines[i].length !== lines[0].length) {\n      isTable = false;\n      break;\n    }\n    if (lines[i].match(/[^\\s\\|+-]/g)) {\n      isTable = false;\n      break;\n    }\n  }\n\n  // Check for columnar structure\n  let columnWidths = lines[0].trim().split(/\\s+/).map(col => col.length);\n  for (let i = 1; i < lines.length; i++) {\n    let rowColumns = lines[i].trim().split(/\\s+/);\n    if (rowColumns.length !== columnWidths.length) {\n      isColumns = false;\n      break;\n    }\n    for (let j = 0; j < rowColumns.length; j++) {\n      if (rowColumns[j].length !== columnWidths[j]) {\n        isColumns = false;\n        break;\n      }\n    }\n  }\n\n  if (isTable && isColumns) {\n    return \"TABLE_AND_COLUMNS\";\n  } else if (isTable) {\n    return \"TABLE\";\n  } else if (isColumns) {\n    return \"COLUMNS\";\n  } else {\n    return \"NORMAL\";\n  }\n}\n```"
    }
  ],
  "perf": 10
}