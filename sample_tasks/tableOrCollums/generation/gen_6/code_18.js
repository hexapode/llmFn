
function levenshteinDistance(a, b){
  if(a.length == 0) return b.length; 
  if(b.length == 0) return a.length;
  
  var matrix = [];

  // Increment along the first column of each row
  var i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }

  // Increment each column in the first row
  var j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // Substitution
                               Math.min(matrix[i][j-1] + 1, // Insertion
                                        matrix[i-1][j] + 1)); // Deletion
      }
    }
  }

  return matrix[b.length][a.length];
};

function doesItContainTableOrColumns(text) {
  var lines = text.split('\n');
  var distanceSum = 0;
  for (var i = 1; i < lines.length; i++) {
    distanceSum += levenshteinDistance(lines[i - 1], lines[i]);
  }

  var averageDistance = distanceSum / (lines.length - 1);

  // If the lines are similar, consider it as a table
  if (averageDistance < 10) {
    return "TABLE";
  }

  // If the lines are different, consider it as a columnar structure
  if (averageDistance > 30) {
    return "COLUMNS";
  }

  // If the lines vary within a certain range, consider it as a mix of table and columns
  return "TABLE_AND_COLUMNS";
}
