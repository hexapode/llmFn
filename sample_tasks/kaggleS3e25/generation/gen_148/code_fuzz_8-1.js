
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="2363", Drug="D-penicillamine", Age="20834", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="3.2", Cholesterol="226.0", Albumin="3.34", Copper="13.0", Alk_Phos="810.0", SGOT="72.24", Tryglicerides="62.0", Platelets="143.0", Prothrombin="12.4", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var factor = 1;
    if (Hepatomegaly === 'Y' && Spiders === 'Y' && Ascites === 'N') {
        factor = 2;
    } else if (Hepatomegaly === 'N' && Ascites === 'N' && Edema === 'N') {
        factor = 0.5;
    }
    
    var Status_C = ((Age + Bilirubin + Prothrombin) * factor) / 600;
    var Status_CL = ((Age + Albumin + Platelets) * factor) / 600;
    var Status_D = ((Age + Cholesterol + SGOT) * factor) / 600;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
