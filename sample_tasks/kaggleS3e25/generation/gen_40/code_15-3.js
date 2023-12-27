
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = (Age < 50 ? 0.3 : 0.2) + (Sex === 'Male' ? 0.1 : 0) - (Bilirubin > 2.7 ? 0.15 : 0);
  var probCL = (Hepatomegaly === 'Present' ? 0.1 : 0) + (SGOT < 100 ? 0.2 : 0) - (Albumin < 4.0 ? 0.1 : 0);
  var probD = (Bilirubin > 3.0 ? 0.25 : 0.15) + (Platelets < 120 ? 0.15 : 0) - (Prothrombin < 70 ? 0.1 : 0);
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
