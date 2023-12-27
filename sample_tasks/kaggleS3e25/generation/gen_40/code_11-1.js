
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = (Age < 50 ? 0.3 : 0.2) + (Bilirubin > 2 ? 0.1 : 0.2) - (Cholesterol > 240 ? 0.1 : 0);
  var probCL = (SGOT < 80 ? 0.2 : 0.1) + (Albumin < 3.5 ? 0.2 : 0.1) - (Edema === "YES" ? 0.1 : 0);
  var probD = (Bilirubin > 3 ? 0.4 : 0.3) - (Platelets < 120 ? 0.2 : 0.1) + (Prothrombin < 70 ? 0.1 : 0);

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
