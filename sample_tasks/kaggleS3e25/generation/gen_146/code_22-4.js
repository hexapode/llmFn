
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.5;
    var Status_CL = 0.3;
    var Status_D = 0.2;
    
    // ... (previous logic remains unchanged)

    // Adding a step based on the presence of Spiders
    if (Spiders === "Y") {
        Status_C *= 0.2;
        Status_CL *= 0.5;
        Status_D *= 0.3;
    } else {
        Status_C *= 0.4;
        Status_CL *= 0.3;
        Status_D *= 0.3;
    }

    // ... (remaining logic remains unchanged)

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
