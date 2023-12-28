/* Best score: 0.6636036767747039 */


    /* Try to add a step in the computation using the parameter N_Days. Here as some value it can take: 999, 2574, 3428, 2576, 788, 703, 1300, 1615, 2050, 2615, 3581, 1614, 1847, 1153, 904, 1212, 1967, 1592, 1481, 3358. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    // Perform calculations to determine the probabilities
    if (N_Days < 1208.92) {
        Status_C = 0.09;
        Status_CL = 0.02;
        Status_D = 0.32220000000000004;
    } else if (N_Days < 20001.11) {
        Status_C = 0.75;
        Status_CL = 0.03;
        Status_D = 0.22;
    } else {
        Status_C = 0.05;
        Status_CL = 0.04;
        Status_D = 0.05;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
