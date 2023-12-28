
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    const Status_C = (0.5 * Age / 100 + 0.1 * Bilirubin / 10 + 0.1 * Albumin / 5 + 0.1 * Prothrombin / 10) / 3;
    const Status_CL = (0.1 * Age / 100 + 0.1 * Bilirubin / 10 + 0.1 * Albumin / 5 + 0.1 * Prothrombin / 10 + 0.1 * Stage) / 3;
    const Status_D = (0.2 * Age / 100 + 0.2 * Bilirubin / 10 + 0.2 * Albumin / 5 + 0.2 * Prothrombin / 10 + 0.1 * Stage) / 3;
    
    return {
        Status_C: Math.max(0, Math.min(1, Status_C)),
        Status_CL: Math.max(0, Math.min(1, Status_CL)),
        Status_D: Math.max(0, Math.min(1, Status_D))
    };
}
