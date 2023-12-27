
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  // Your prediction code here
  // Calculate probabilities for each outcome (C, CL, D)
  // Return the outcome with the highest probability as a string
  var probabilities = {
    C: 0.5,
    CL: 0.3,
    D: 0.2
  };
  var highestOutcome = Object.keys(probabilities).reduce(function(a, b){ return probabilities[a] > probabilities[b] ? a : b });
  return highestOutcome;
}
