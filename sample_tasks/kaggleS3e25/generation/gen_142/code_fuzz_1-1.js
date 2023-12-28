
    /* Try to add a step in the computation using the parameter N_Days. Here as some value it can take: 999, 2574, 3428, 2576, 788, 703, 1300, 1615, 2050, 2615, 3581, 1614, 1847, 1153, 904, 1212, 1967, 1592, 1481, 3358. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    const Status_C = 0.2 * (Age / 100) + 0.2 * (Bilirubin / 10) + 0.1 * (Cholesterol / 300) + 0.1 * (Albumin / 5) - 0.1 * (Platelets / 500) + 0.1 * Stage + 0.05 * (N_Days / 3000);
    const Status_CL = 0.3 * (Age / 100) + 0.15 * (Bilirubin / 10) + 0.1 * (Cholesterol / 300) + 0.1 * (Albumin / 5) + 0.1 * (Prothrombin / 100) + 0.05 * Stage - 0.05 * (N_Days / 3000);
    const Status_D = 0.25 * (Age / 100) + 0.1 * (Bilirubin / 10) + 0.1 * (Cholesterol / 300) + 0.2 * (Albumin / 5) + 0.15 * (Prothrombin / 100) + 0.1 * Stage + 0.03 * (N_Days / 3000);
    
    return {
        Status_C: Math.max(0, Math.min(1, Status_C)),
        Status_CL: Math.max(0, Math.min(1, Status_CL)),
        Status_D: Math.max(0, Math.min(1, Status_D))
    };
}
