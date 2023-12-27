
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = (Age >= 50 ? 0.6 : 0.4) - (Bilirubin >= 1.5 ? 0.2 : 0) + (Albumin >= 3.5 ? 0.1 : 0);
  var probCL = (SGOT >= 100 ? 0.4 : 0.3) - (Platelets <= 150 ? 0.2 : 0) + (Prothrombin >= 70 ? 0.1 : 0);
  var probD = (Bilirubin >= 3 ? 0.5 : 0.4) - (Cholesterol >= 200 ? 0.2 : 0) + (Age >= 60 ? 0.1 : 0);
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
