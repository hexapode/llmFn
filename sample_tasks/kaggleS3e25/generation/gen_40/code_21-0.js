
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = 0.5 - (Age >= 50 ? 0.2 : 0) + (Bilirubin <= 2.8 ? 0.3 : 0) - (Platelets < 120 ? 0.1 : 0);
  var probCL = 0.3 - (SGOT >= 80 ? 0.2 : 0) + (Albumin >= 3.5 ? 0.2 : 0) - (Edema == 1 ? 0.1 : 0);
  var probD = 0.2 - (Bilirubin <= 3.2 ? 0.2 : 0) + (Cholesterol < 200 ? 0.1 : 0) - (Ascites == 1 ? 0.1 : 0);
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
