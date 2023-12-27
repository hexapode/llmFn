{
  "llm": [
    {
      "role": "system",
      "content": "You are a programmer, and you need to build a javascript funtion to solve the following task:\nDetermine if the input text contain table or collumns. The input text is the output of an OCR render to a textfile while preserving layout.\nTo solve this task you need to create a javascript function that take into parameters Text to be classified and return Either TABLE, COLUMNS, TABLE_AND_COLUMNS or NORMAL.\nOutput the code between ```javascript and ``` tags.\nDo not add usage sample code, only the functions.\nThe function should be named doesItContainTableOrColumns.\n"
    },
    {
      "role": "assistant",
      "content": "```javascript\nfunction doesItContainTableOrColumns(inputText) {\n  // Use regular expressions to check for patterns indicating tables or columns\n  const tablePattern = /(^\\|\\s[^\\n]+\\s\\|.*\\n)+/;\n  const columnPattern = /^(\\s*[^\\|\\n]+\\s*\\|\\s*)+\\n/;\n\n  if (tablePattern.test(inputText) && columnPattern.test(inputText)) {\n    return \"TABLE_AND_COLUMNS\";\n  } else if (tablePattern.test(inputText)) {\n    return \"TABLE\";\n  } else if (columnPattern.test(inputText)) {\n    return \"COLUMNS\";\n  } else {\n    return \"NORMAL\";\n  }\n}\n```"
    }
  ],
  "perf": 10
}