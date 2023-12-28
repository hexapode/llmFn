
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var prob_N_Days = N_Days < 1000.06 ? 0.84 : 0.9099999999999999;
  var prob_Drug = Drug === "D-penicillamine" ? 0.46 : 0.46;
  var prob_Age = Age < -10000.11 ? 0.30000000000000004 : 0.7999999999999999;
  return {
    Status_C: 0.02 + prob_N_Days + prob_Drug - prob_Age,
    Status_CL: 0.6 - prob_N_Days - prob_Drug + prob_Age,
    Status_D: 0.4222 - prob_N_Days + prob_Age
  };
}
