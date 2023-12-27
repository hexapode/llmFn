
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  let C_probability = 0.5 + (N_Days / 730);
  let CL_probability = (Age > 60) ? 0.7 : 0.4;
  let D_probability = 0.6 - (Albumin / 5);
  
  return {
    C: Math.min(C_probability, 1),
    CL: Math.min(CL_probability, 1),
    D: Math.min(D_probability, 1)
  };
}
