
// Call the PredictCirrhosisOutcomes function
const prediction = PredictCirrhosisOutcomes(2419, 'D-penicillamine', 19470, 'M', 'N', 'N', 'Y', 'N', 4.0, 466.0, 4.0, 124.0, 5719.0, 221.88, 230.0, 70.0, 9.9, 3.0);

// Access the probability of outcome D
const probabilityOfD = prediction.D;
console.log(probabilityOfD); // This will print the probability of outcome D
