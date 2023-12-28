
    /* Try to add a step in the computation using the parameter Spiders. Here as some value it can take: N, N, Y, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 1.69;
    var Status_CL = 0.14;
    var Status_D = 1.18;
    
    // ... (previous logic remains unchanged)

    // Adding a step based on the presence of Spiders
    if (Spiders === "Y") {
        Status_C *= 0.28;
        Status_CL *= 0.4;
        Status_D *= 0.67;
    } else {
        Status_C *= 0.59;
        Status_CL *= 0.33;
        Status_D *= 0.30000000000000004;
    }

    // ... (remaining logic remains unchanged)

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
