
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  let C_probability = (N_Days > 365) ? 0.8 : 0.5;
  let CL_probability = (Albumin > 3.5) ? 0.6 : 0.4;
  let D_probability = (Bilirubin > 2.5 && Platelets < 100000) ? 0.7 : 0.4;

  return {
    C: C_probability,
    CL: CL_probability,
    D: D_probability
  };
}
