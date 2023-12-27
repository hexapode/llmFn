
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = 0.45 - (Age >= 65 ? 0.2 : 0) + (Bilirubin <= 2.2 ? 0.1 : 0);
  var probCL = 0.28 - (SGOT >= 100 ? 0.15 : 0) + (Albumin >= 4.0 ? 0.1 : 0);
  var probD = 0.27 - (Bilirubin <= 3.8 ? 0.2 : 0) + (Platelets >= 120 ? 0.1 : 0);
  var totalProb = probC + probCL + probD;
  probC /= totalProb;
  probCL /= totalPro;``b;
  probD /= totalProb;

  return {
    C: probC,
    CL: probCL,
    D: probD
  };
}
