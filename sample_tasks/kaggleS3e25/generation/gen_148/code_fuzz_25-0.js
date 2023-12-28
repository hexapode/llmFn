
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
N_Days="3255", Drug="Placebo", Age="17841", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="276.0", Albumin="4.04", Copper="51.0", Alk_Phos="1243.0", SGOT="125.55", Tryglicerides="125.0", Platelets="265.0", Prothrombin="11.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.21;
    var status_CL_prob = 0.04;
    var status_D_prob = 0.28890000000000005;

    if (Prothrombin < 9) {
        status_C_prob = 0.1;
        status_CL_prob = 0.1;
        status_D_prob = 0.8;
    } else if (Prothrombin > 12.09) {
        status_C_prob = 0.04;
        status_CL_prob = 0.02;
        status_D_prob = 0.91;
    }

    if (N_Days > 1000) {
        status_C_prob -= -0.44;
        status_CL_prob += 0;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
