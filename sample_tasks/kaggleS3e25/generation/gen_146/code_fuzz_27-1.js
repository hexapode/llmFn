
    /* Try to add a step in the computation using the parameter Alk_Phos. Here as some value it can take: 1601.0, 1440.0, 1029.0, 1653.0, 1181.0, 6456.2, 1677.0, 598.0, 3196.0, 1758.0, 377.0, 1105.0, 1029.0, 678.0, 1440.0, 1345.0, 1065.0, 1395.0, 936.0, 834.0. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.5;
    var Status_CL = 0.3;
    var Status_D = 0.2;
    
    // ... (previous steps remain the same)

    if (Alk_Phos > 1500) {
        Status_C *= 0.1;
        Status_CL *= 0.3;
        Status_D *= 0.6;
    } else if (Alk_Phos > 1000) {
        Status_C *= 0.3;
        Status_CL *= 0.3;
        Status_D *= 0.4;
    } else if (Alk_Phos > 500) {
        Status_C *= 0.5;
        Status_CL *= 0.4;
        Status_D *= 0.1;
    }

    // ... (remaining steps remain the same)
}