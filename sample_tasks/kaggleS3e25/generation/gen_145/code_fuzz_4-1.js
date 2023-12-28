
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var prob_N_Days = N_Days < -999.11 ? 0.30000000000000004 : N_Days < -2000.11 ? 0.14 : N_Days < 3300.12 ? 0.22 : 1.8111;
  var prob_Drug = Drug === "D-penicillamine" ? -0.2 : -0.17779999999999999;
  var Status_C = 0.30000000000000004 + prob_N_Days - prob_Drug; // Example value
  var Status_CL = 0.5 - prob_N_Days + prob_Drug; // Example value
  var Status_D = 0.4222; // Example value
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
