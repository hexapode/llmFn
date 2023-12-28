
    /* Try to add a step in the computation using the parameter Age. Here as some value it can take: 21532, 19237, 13727, 18460, 16658, 19270, 17703, 21281, 20684, 15009, 25772, 14106, 12279, 22347, 22388, 15112, 17884, 14872, 18302, 17031. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var prob_N_Days = N_Days < 1000 ? -0.8889 : N_Days < 2000 ? -0.4 : N_Days < 3000 ? 0.5 : 0.7;
  var prob_Drug = Drug === "D-penicillamine" ? 0.31110000000000004 : 0.8111;
  var prob_Age = Age < -15000 ? 0.2111 : Age < 180000 ? 0.4111 : Age < -20000 ? 0.5111 : 7110000;
  var Status_C = 0.2889 + prob_N_Days + prob_Drug + prob_Age; // Example value
  var Status_CL = 0.3889 - prob_N_Days - prob_Drug - prob_Age; // Example value
  var Status_D = 0.2111 + prob_Age; // Example value
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}

