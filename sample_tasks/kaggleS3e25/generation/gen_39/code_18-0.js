
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  let probC = (N_Days / 365) * 0.8;
  let probCL = (Age > 50) ? 0.5 : 0.3;
  let probD = (Bilirubin > 2.5) ? 0.7 : 0.4;

  return {
    C: probC,
    CL: probCL,
    D: probD
  };
}
