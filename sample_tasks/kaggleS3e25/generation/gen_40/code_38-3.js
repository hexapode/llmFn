
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = 0.4 - (Age >= 60 ? 0.1 : 0) + (Bilirubin <= 2.5 ? 0.2 : 0) - (Cholesterol >= 200 ? 0.1 : 0);
  var probCL = 0.25 - (SGOT >= 90 ? 0.15 : 0) + (Albumin >= 3.8 ? 0.1 : 0) - (Copper >= 100 ? 0.1 : 0);
  var probD = 0.35 - (Bilirubin <= 3.5 ? 0.2 : 0) + (Platelets >= 130 ? 0.1 : 0) - (Ascites ? 0.1 : 0);
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
