
function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var featureSum = 0.5*Age - 0.3*SGOT + 0.2*Albumin + 0.2*Platelets - 0.2*Bilirubin;
  var probC = sigmoid(featureSum - 2);
  var probCL = sigmoid(featureSum - 0.5);
  var probD = sigmoid(featureSum + 1);
  
  return {
    C: probC,
    CL: probCL,
    D: probD
  };
}
