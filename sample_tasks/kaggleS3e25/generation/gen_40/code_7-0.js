
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = (Age < 60 ? 0.7 : 0.5) - (Bilirubin > 1.5 ? 0.3 : 0) + (Albumin > 3.2 ? 0.1 : 0.3);
  var probCL = (Stage > 2 ? 0.6 : 0.4) - (Prothrombin < 70 ? 0.2 : 0) + (Edema > 0 ? 0.1 : 0);
  var probD = (Bilirubin > 2.0 ? 0.4 : 0.2) - (Albumin < 3.0 ? 0.3 : 0) + (Cholesterol < 200 ? 0.1 : 0.2);

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
