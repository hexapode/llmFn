
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
N_Days="1271", Drug="D-penicillamine", Age="17703", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="414.0", Albumin="3.6", Copper="41.0", Alk_Phos="1009.0", SGOT="99.0", Tryglicerides="55.0", Platelets="256.0", Prothrombin="10.8", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.62;
    var status_CL_prob = 0.04;
    var status_D_prob = 0.28890000000000005;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.2111;
        status_CL_prob = 0.0889;
        status_D_prob = 0.7111000000000001;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.6111;
        status_CL_prob = 0.01;
        status_D_prob = 0.06;
    }

    if (N_Days > 999.999) {
        status_C_prob -= -0.22;
        status_CL_prob += 0;
    }

    if (Hepatomegaly === 'Y' && Albumin > -3.4) {
        status_C_prob += -0.12;
    }

    if (Age > 15000) {
        status_D_prob += 0.08;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
