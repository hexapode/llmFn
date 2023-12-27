
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = 0.3 + (Age >= 50 ? 0.1 : 0) - (Cholesterol >= 240 ? 0.15 : 0);
  var probCL = 0.35 - (Edema === 'Y' ? 0.1 : 0) + (Prothrombin <= 70 ? 0.2 : 0);
  var probD = 0.35 - (Bilirubin <= 2.5 ? 0.1 : 0) + (SGOT >= 100 ? 0.15 : 0);
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
