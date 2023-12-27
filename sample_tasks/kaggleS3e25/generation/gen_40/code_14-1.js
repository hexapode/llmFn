
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var scoreC = 0.2 + (Age < 50 ? 0.1 : 0) - (Bilirubin > 2.0 ? 0.1 : 0);
  var scoreCL = 0.3 + (Albumin > 3.5 ? 0.1 : 0) - (SGOT > 100 ? 0.1 : 0);
  var scoreD = 0.5 + (Bilirubin > 3.0 ? 0.2 : 0) - (Platelets < 150 ? 0.1 : 0);
  var sum = scoreC + scoreCL + scoreD;
  var probC = scoreC / sum;
  var probCL = scoreCL / sum;
  var probD = scoreD / sum;

  return {
    C: probC,
    CL: probCL,
    D: probD
  };
}
