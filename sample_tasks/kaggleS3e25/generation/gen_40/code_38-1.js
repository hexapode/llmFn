
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = 1 / (1 + Math.exp(-(0.5 * Age + 0.2 * Bilirubin - 25)));
  var probCL = 1 / (1 + Math.exp(-(0.3 * SGOT - 0.3 * Albumin - 10)));
  var probD = 1 / (1 + Math.exp(-(0.4 * Bilirubin + 0.1 * Platelets - 30)));

  return {
    C: probC,
    CL: probCL,
    D: probD
  };
}
