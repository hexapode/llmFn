
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = 0.3 + (Age < 50 ? 0.2 : 0.1) - (Bilirubin > 1.2 ? 0.1 : 0.2);
  var probCL = 0.3 + (SGOT < 80 ? 0.1 : 0.2) - (Albumin < 3.5 ? 0.2 : 0.1);
  var probD = 0.4 + (Bilirubin > 2.0 ? 0.2 : 0.1) - (Platelets < 120 ? 0.2 : 0.1);
  
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
