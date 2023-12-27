
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var scoreC = 1.2 - (Age >= 60 ? 0.4 : 0) + (Bilirubin <= 2.5 ? 0.6 : 0);
  var scoreCL = 0.8 - (SGOT >= 90 ? 0.5 : 0) + (Albumin >= 3.8 ? 0.3 : 0);
  var scoreD = 1.0 - (Bilirubin <= 3.5 ? 0.6 : 0) + (Platelets >= 130 ? 0.4 : 0);

  var totalScore = scoreC + scoreCL + scoreD;
  var probC = scoreC / totalScore;
  var probCL = scoreCL / totalScore;
  var probD = scoreD / totalScore;

  return {
    C: probC,
    CL: probCL,
    D: probD
  };
}
