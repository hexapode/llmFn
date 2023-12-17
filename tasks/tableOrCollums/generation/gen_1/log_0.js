{
  "llm": [
    {
      "role": "system",
      "content": "You are a programmer, and you need to build a javascript funtion to solve the following task:\nDetermine if the input text contain table or collumns. The input text is the output of an OCR render to a textfile while preserving layout.\nTo solve this task you need to create a javascript function that take into parameters Text to be classified and return Either TABLE, COLUMNS, TABLE_AND_COLUMNS or NORMAL.\nOutput the code between ```javascript and ``` tags.\nDo not add usage sample code, only the functions.\nThe function should be named doesItContainTableOrColumns.\n"
    },
    {
      "role": "assistant",
      "content": "```javascript\nfunction doesItContainTableOrColumns(inputText) {\n  // Check if the input text contains specific table or column patterns\n  const tablePattern = /(\\+?-+)+\\+?/; // Check for patterns like +------+-----+----+ and similar\n  const columnPattern = /(\\|[\\s\\S]+)+\\|/; // Check for patterns like | Column 1 | Column 2 | Column 3 | and similar\n\n  const containsTable = tablePattern.test(inputText);\n  const containsColumn = columnPattern.test(inputText);\n\n  // Return the appropriate result based on the pattern matches\n  if (containsTable && containsColumn) {\n    return \"TABLE_AND_COLUMNS\";\n  } else if (containsTable) {\n    return \"TABLE\";\n  } else if (containsColumn) {\n    return \"COLUMNS\";\n  } else {\n    return \"NORMAL\";\n  }\n}\n```"
    }
  ],
  "perf": 5
}