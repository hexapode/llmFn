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
      "content": "To think outside the box, we can use a statistical approach to determine whether the input text contains a table or columns. We can calculate the average number of characters per line and the standard deviation of line lengths. If the standard deviation is low and the average line length is significantly higher than the overall text length, it may indicate the presence of a table or columns.\n\nThis approach makes sense because tables and columns typically have consistent line lengths and distinct patterns, which would result in low standard deviation and higher average line length compared to normal text.\n\n```javascript\nfunction doesItContainTableOrColumns(text) {\n  // Calculate average line length and standard deviation\n  const lines = text.split('\\n').map(line => line.trim());\n  const totalChars = lines.reduce((acc, line) => acc + line.length, 0);\n  const averageLineLength = totalChars / lines.length;\n  const standardDeviation = Math.sqrt(lines.reduce((acc, line) => acc + Math.pow(line.length - averageLineLength, 2), 0) / lines.length);\n\n  // Check if the text contains a table based on statistical analysis\n  if (standardDeviation < 10 && averageLineLength > 50) {\n    return \"TABLE_OR_COLUMNS\";\n  }\n\n  // If the statistical analysis does not indicate a table or columns, classify as normal text\n  return \"NORMAL\";\n}\n```"
    }
  ],
  "perf": 10
}