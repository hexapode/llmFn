
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = 0.2 + (Age < 60 ? 0.3 : 0.1) - (Bilirubin > 2.5 ? 0.2 : 0);
  var probCL = 0.3 - (Albumin < 3.8 ? 0.1 : 0) + (Prothrombin < 75 ? 0.4 : 0);
  var probD = 0.5 + (Bilirubin > 3.0 ? 0.3 : 0) - (Albumin < 3.5 ? 0.2 : 0);

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
