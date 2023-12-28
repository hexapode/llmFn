
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
