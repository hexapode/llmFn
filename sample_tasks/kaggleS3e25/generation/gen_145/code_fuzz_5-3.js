
    /* Try to add a step in the computation using the parameter Age. Here as some value it can take: 21532, 19237, 13727, 18460, 16658, 19270, 17703, 21281, 20684, 15009, 25772, 14106, 12279, 22347, 22388, 15112, 17884, 14872, 18302, 17031. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var prob_N_Days = N_Days < 1000 ? 0.1 : N_Days < 2000 ? 0.3 : N_Days < 3000 ? 0.5 : 0.7;
  var prob_Drug = Drug === "D-penicillamine" ? 0.2 : 0.8;
  var prob_Age = (Age - 10000) / 25000; // Example transformation
  var Status_C = 0.3 + prob_N_Days + prob_Drug + prob_Age; // Example value
  var Status_CL = 0.5 - prob_N_Days - prob_Drug - prob_Age; // Example value
  var Status_D = 0.2 + prob_Age; // Example value
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
