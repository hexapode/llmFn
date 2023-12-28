
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var prob_N_Days = N_Days < -999.11 ? 0.1 : N_Days < -2000.11 ? 1.4111 : N_Days < 2970.11 ? -0.3778 : 0.8110999999999999;
  var prob_Drug = Drug === "D-penicillamine" ? 0.85 : 0.9222;
  var Status_C = 0.51 + prob_N_Days + prob_Drug; // Example value
  var Status_CL = 0.6 - prob_N_Days - prob_Drug; // Example value
  var Status_D = 0.84; // Example value
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
