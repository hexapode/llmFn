{
  "llm": [
    {
      "role": "system",
      "content": "You are a programmer, and you need to build a javascript funtion to solve the following task:\nDetermine if the input text contain table or collumns. The input text is the output of an OCR render to a textfile while preserving layout.\nTo solve this task you need to create a javascript function that take into parameters Text to be classified and return Either TABLE, COLUMNS, TABLE_AND_COLUMNS or NORMAL.\nOutput the code between ```javascript and ``` tags.\nDo not add usage sample code, only output the functions.\nYour are not allow to use any external library or call any external service/library/function.\nThe function should be named doesItContainTableOrColumns.\n"
    },
    {
      "role": "assistant",
      "content": "```javascript\nfunction doesItContainTableOrColumns(inputText) {\n  // Check if the input text contains common table or column related keywords\n  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);\n  const containsColumns = /(column|col|row|cell)/i.test(inputText);\n\n  if (containsTable && containsColumns) {\n    return \"TABLE_AND_COLUMNS\";\n  } else if (containsTable) {\n    return \"TABLE\";\n  } else if (containsColumns) {\n    return \"COLUMNS\";\n  } else {\n    return \"NORMAL\";\n  }\n}\n```"
    }
  ],
  "perf": 9
}