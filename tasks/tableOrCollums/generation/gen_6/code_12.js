
function doesItContainTableOrColumns(text) {
  // Function to calculate the average distance between words in a string
  function calculateAverageDistance(str) {
    const words = str.trim().split(/\s+/);
    let totalDistance = 0;
    for (let i = 1; i < words.length; i++) {
      totalDistance += words[i].length + 1; // Adding 1 for the space
    }
    return totalDistance / (words.length - 1);
  }

  const lines = text.split("\n");

  // Calculate the average distance between words in the first line
  const firstLineAvgDistance = calculateAverageDistance(lines[0]);

  // Calculate the average distance between words in the second line
  const secondLineAvgDistance = calculateAverageDistance(lines[1]);

  // Calculate the difference between the average distances
  const distanceDifference = Math.abs(firstLineAvgDistance - secondLineAvgDistance);

  // If the difference is above a certain threshold, it suggests a table structure
  if (distanceDifference < 1) {
    return "TABLE";
  }

  // If the difference is below a certain threshold, it suggests a columnar structure
  if (distanceDifference > 4) {
    return "COLUMNS";
  }

  // If none of the above conditions is met, classify as normal text
  return "NORMAL";
}
