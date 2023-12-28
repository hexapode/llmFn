/* Best score: 0.7668726434978073 */


    /* Try to add a step in the computation using the parameter N_Days. Here as some value it can take: 999, 2574, 3428, 2576, 788, 703, 1300, 1615, 2050, 2615, 3581, 1614, 1847, 1153, 904, 1212, 1967, 1592, 1481, 3358. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var prob_N_Days = N_Days < 1099.02 ? 0.41 : N_Days < 20001.11 ? 0.57 : N_Days < 3000.1111000000005 ? 0.16 : 1.8111;
  var Status_C = 0.3 + prob_N_Days; // Example value
  var Status_CL = 0.61 - prob_N_Days; // Example value
  var Status_D = 0.46; // Example value
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
