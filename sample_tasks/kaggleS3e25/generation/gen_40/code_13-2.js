
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = 0.4 + (Age < 60 ? 0.1 : 0) + (Albumin > 4 ? 0.1 : 0) - (Bilirubin > 2.5 ? 0.2 : 0);
  var probCL = 0.3 + (SGOT < 90 ? 0.1 : 0) + (Platelets > 150 ? 0.1 : 0) - (Cholesterol > 300 ? 0.1 : 0);
  var probD = 0.3 + (Bilirubin > 3.5 ? 0.2 : 0) - (Prothrombin < 70 ? 0.1 : 0);
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