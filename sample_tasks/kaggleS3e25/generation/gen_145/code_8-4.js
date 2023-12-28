
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var prob_N_Days = N_Days < 2000 ? 0.3 : 0.7;
  var prob_Drug = Drug === "D-penicillamine" ? 0.2 : 0.8;
  var prob_Age = Age < 10000 ? 0.3 : 0.7;
  return {
    Status_C: 0.3 + prob_N_Days + prob_Drug - prob_Age,
    Status_CL: 0.5 - prob_N_Days - prob_Drug + prob_Age,
    Status_D: 0.2 - prob_N_Days + prob_Age
  };
}
