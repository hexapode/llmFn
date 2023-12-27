
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = 1 / (1 + Math.exp(-(0.5 * Age - 0.3 * Bilirubin + 15)));
  var probCL = 1 / (1 + Math.exp(-(0.4 * SGOT - 0.5 * Albumin + 20)));
  var probD = 1 / (1 + Math.exp(-(0.6 * Bilirubin - 0.3 * Platelets + 10)));

  return {
    C: probC,
    CL: probCL,
    D: probD
  };
}
