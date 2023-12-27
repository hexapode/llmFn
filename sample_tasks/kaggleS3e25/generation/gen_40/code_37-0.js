
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = 0.3 + (Sex === 'male' ? 0.05 : 0) - (Age >= 50 ? 0.1 : 0) + (Bilirubin <= 3.0 ? 0.15 : 0);
  var probCL = 0.35 - (Edema === 'yes' ? 0.1 : 0) + (Albumin >= 4.0 ? 0.2 : 0);
  var probD = 0.35 - (Bilirubin <= 3.5 ? 0.2 : 0) + (Platelets >= 120 ? 0.1 : 0);
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
