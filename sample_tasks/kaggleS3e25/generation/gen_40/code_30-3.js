
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var probC = (0.5 - (Age >= 50 ? 0.1 : 0) + (Bilirubin <= 2 ? 0.2 : 0) - (Prothrombin >= 75 ? 0.1 : 0)) / 2;
  var probCL = (0.3 + (Albumin >= 3.5 ? 0.1 : 0) - (Cholesterol >= 200 ? 0.1 : 0) - (SGOT >= 100 ? 0.2 : 0)) / 2;
  var probD = (0.4 - (Bilirubin <= 3 ? 0.1 : 0) + (Platelets >= 150 ? 0.2 : 0) - (Copper <= 50 ? 0.1 : 0)) / 2;

  return {
    C: probC,
    CL: probCL,
    D: probD
  };
}
