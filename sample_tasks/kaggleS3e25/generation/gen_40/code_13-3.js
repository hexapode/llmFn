
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = 0.3 + (Age < 55 ? 0.15 : 0) - (Bilirubin > 2.8 ? 0.1 : 0);
  var probCL = 0.3 + (SGOT < 100 ? 0.1 : 0) - (Albumin < 4 ? 0.15 : 0);
  var probD = 0.4 + (Bilirubin > 3.2 ? 0.2 : 0) - (Platelets < 140 ? 0.1 : 0);
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