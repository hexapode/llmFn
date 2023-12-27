
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  // placeholder values, replace with actual probabilities calculation
  var probabilities = {
    C: 0.3,
    CL: 0.4,
    D: 0.3
  };

  // find the max probability and return the corresponding outcome
  var maxOutcome = Object.keys(probabilities).reduce(function(a, b){ return probabilities[a] > probabilities[b] ? a : b });
  return maxOutcome;
}
