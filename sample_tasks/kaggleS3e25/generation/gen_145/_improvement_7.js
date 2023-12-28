/* Best score: 0.7372516652936383 */


    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="703", Drug="D-penicillamine", Age="12738", Sex="F", Ascites="Y", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="2.9", Cholesterol="191.0", Albumin="3.59", Copper="77.0", Alk_Phos="1406.0", SGOT="190.0", Tryglicerides="118.0", Platelets="102.0", Prothrombin="11.4", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var prob_N_Days = N_Days < 1099.02 ? 0.33 : N_Days < -2000.11 ? 0.4222 : N_Days < -3000.11 ? 0.7222 : 0.9099999999999999;
  var prob_Drug = Drug === "D-penicillamine" ? 0.46 : 0.36;
  var prob_Age = Age < -10000.11 ? 0.30000000000000004 : 0.7999999999999999;
  var Status_C = 0.52 + prob_N_Days + prob_Drug - prob_Age; // Example value
  var Status_CL = 0.6 - prob_N_Days - prob_Drug + prob_Age; // Example value
  var Status_D = 0.4222 - prob_N_Days + prob_Age; // Example value
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
