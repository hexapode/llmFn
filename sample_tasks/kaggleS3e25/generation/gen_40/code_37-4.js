
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = 0.3 + (Hepatomegaly === 'Yes' ? 0.1 : 0) - (Prothrombin <= 70 ? 0.1 : 0);
  var probCL = 0.4 + (Ascites === 'Yes' ? 0.1 : 0) - (Bilirubin > 3 ? 0.2 : 0);
  var probD = 0.3 + (Edema === 'Yes' ? 0.1 : 0) - (Cholesterol < 150 ? 0.1 : 0);
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
