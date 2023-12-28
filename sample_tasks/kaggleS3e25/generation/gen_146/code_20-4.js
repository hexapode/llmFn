
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.5;
    var Status_CL = 0.3;
    var Status_D = 0.2;
    
    // ... (previous steps)

    // Adding a step based on the parameter Spiders
    if (Spiders === "Y") {
        Status_C *= 0.1;
        Status_CL *= 0.1;
        Status_D *= 0.8;
    } else {
        Status_C *= 0.4;
        Status_CL *= 0.4;
        Status_D *= 0.2;
    }

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
