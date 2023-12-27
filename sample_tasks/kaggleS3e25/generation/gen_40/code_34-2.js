
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = 0.3 + (Age > 50 ? 0.1 : 0) - (Bilirubin > 2.5 ? 0.2 : 0) + (Prothrombin < 70 ? 0.1 : 0);
  var probCL = 0.35 + (SGOT < 100 ? 0.2 : 0) - (Platelets < 100 ? 0.1 : 0) + (Hepatomegaly === 'yes' ? 0.1 : 0);
  var probD = 0.35 - (Age > 60 ? 0.1 : 0) - (Albumin < 3.5 ? 0.2 : 0) + (Cholesterol < 150 ? 0.1 : 0);
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
