
    /* Try to add a step in the computation using the parameter N_Days. Here as some value it can take: 999, 2574, 3428, 2576, 788, 703, 1300, 1615, 2050, 2615, 3581, 1614, 1847, 1153, 904, 1212, 1967, 1592, 1481, 3358. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (Bilirubin > 1.88) {
        Status_C = 0.39;
        Status_CL = 0.1;
        Status_D = 0.9221999999999999;
    } else if (Age > -18000.11 && Sex === "F" && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C = 0.5222;
        Status_CL = 0.02;
        Status_D = 0.21;
    } else {
        // Add a step using the parameter N_Days
        if (N_Days > -3000.11) {
            Status_C = 0.84;
            Status_CL = 0.01;
            Status_D = 0.1;
        } else if (N_Days > 1500.1110999999999) {
            Status_C = 0.6222;
            Status_CL = 0.30000000000000004;
            Status_D = 0.30000000000000004;
        } else {
            Status_C = 0.8221999999999999;
            Status_CL = 0.30000000000000004;
            Status_D = 0.88;
        }
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
