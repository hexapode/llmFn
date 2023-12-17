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
      "content": "To solve the problem in a novel way, we can use a combination of regular expressions and string manipulation to identify the structure of the text. We can look for patterns that are common in tables and columns, such as vertical and horizontal lines, as well as consistent spacing between columns.\n\nThis approach makes sense because it allows us to search for specific patterns in the text that are indicative of tables or columns. By using regular expressions, we can define the structure of a table or columns and check for their presence in the input text.\n\nNow, let's implement this approach in the function:\n\n```javascript\nfunction doesItContainTableOrColumns(text) {\n  // Define regular expressions to match table and column structures\n  const tableRegex = /[\\-\\+|]+\\s*[\\-\\+|]+\\s*[\\-\\+|]+/; // Matches horizontal lines in tables\n  const columnRegex = /(?:(?:\\s{2,}\\S.*)+)/; // Matches multiple columns in a row\n\n  // Check if the text contains a table structure\n  if (tableRegex.test(text)) {\n    return \"TABLE\";\n  }\n\n  // Check if the text contains a columnar structure\n  if (text.split('\\n').every(row => columnRegex.test(row))) {\n    return \"COLUMNS\";\n  }\n\n  // If it contains both table and column structure\n  if (tableRegex.test(text) && text.split('\\n').every(row => columnRegex.test(row))) {\n    return \"TABLE_AND_COLUMNS\";\n  }\n\n  // If none of the above conditions is met, classify as normal text\n  return \"NORMAL\";\n}\n```"
    }
  ],
  "perf": 9
}