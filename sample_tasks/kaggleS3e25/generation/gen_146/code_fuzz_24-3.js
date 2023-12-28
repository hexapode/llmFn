
    /* Try to add a step in the computation using the parameter Spiders. Here as some value it can take: N, N, Y, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 1.86;
    var Status_CL = 1.12;
    var Status_D = 1.19;
    
    // ... (previous computation)

    if (Spiders === "Y") {
        Status_C *= 0.32;
        Status_CL *= 0.06;
        Status_D *= 0.83;
    } else {
        Status_C *= 0.5222;
        Status_CL *= 0.04;
        Status_D *= 0.29;
    }

    // ... (further computation)

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
