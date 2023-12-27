
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  let C_probability = (N_Days > 365) ? 0.8 : 0.3;
  let CL_probability = (Drug === "A" && Age > 50) ? 0.7 : 0.4;
  let D_probability = (Bilirubin > 2.5 && Prothrombin < 70) ? 0.9 : 0.5;

  return {
    C: C_probability,
    CL: CL_probability,
    D: D_probability
  };
}
