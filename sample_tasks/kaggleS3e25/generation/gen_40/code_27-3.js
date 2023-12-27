
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = 0.2 + (Age >= 50 ? 0.1 : 0) - (Cholesterol >= 250 ? 0.1 : 0);
  var probCL = 0.3 - (Bilirubin <= 3.2 ? 0.2 : 0) + (Prothrombin >= 70 ? 0.1 : 0);
  var probD = 0.5 - (Bilirubin <= 4.0 ? 0.2 : 0) - (Platelets <= 100 ? 0.1 : 0);
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
