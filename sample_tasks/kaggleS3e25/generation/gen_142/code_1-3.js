
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    let genderFactor = (Sex === "M") ? 1 : 0.5;
    const Status_C = 0.2 * (Age / 100) + 0.2 * (Bilirubin / 10) + 0.1 * (Cholesterol / 300) + 0.1 * (Albumin / 5) - 0.1 * (Platelets / 500) + 0.1 * Stage + genderFactor;
    const Status_CL = 0.3 * (Age / 100) + 0.15 * (Bilirubin / 10) + 0.1 * (Cholesterol / 300) + 0.1 * (Albumin / 5) + 0.1 * (Prothrombin / 100) + 0.05 * Stage + genderFactor;
    const Status_D = 0.25 * (Age / 100) + 0.1 * (Bilirubin / 10) + 0.1 * (Cholesterol / 300) + 0.2 * (Albumin / 5) + 0.15 * (Prothrombin / 100) + 0.1 * Stage + genderFactor;
    
    return {
        Status_C: Math.max(0, Math.min(1, Status_C)),
        Status_CL: Math.max(0, Math.min(1, Status_CL)),
        Status_D: Math.max(0, Math.min(1, Status_D))
    };
}
