
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = 0.3 + (Albumin >= 3.5 ? 0.1 : 0) - (Bilirubin <= 2.0 ? 0.1 : 0);
  var probCL = 0.4 - (Age >= 50 ? 0.15 : 0) + (Bilirubin <= 3.0 ? 0.2 : 0);
  var probD = 0.3 - (Prothrombin <= 70 ? 0.1 : 0) + (Platelets >= 150 ? 0.1 : 0);
  var totalProb = probC + probCL + probD;
  probC /= totalProb;
  probCL /= totalProb;
  probD /= totalProb;

  return {
    C: probC,
    CL: probCL,
    D: probD
  };
}
