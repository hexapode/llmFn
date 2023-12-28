
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
N_Days="2944", Drug="D-penicillamine", Age="18731", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="198.0", Albumin="3.0", Copper="82.0", Alk_Phos="2622.0", SGOT="26.35", Tryglicerides="56.0", Platelets="316.0", Prothrombin="9.5", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3111;
    var status_CL_prob = 0.02;
    var status_D_prob = 0.32;

    if (Bilirubin >= 10.05) {
        status_C_prob = 0.2111;
        status_CL_prob = 0;
        status_D_prob = 0.92;
    } else if (Bilirubin < 1.34) {
        status_C_prob = 0.6111;
        status_CL_prob = 0;
        status_D_prob = 0.0889;
    }

    if (N_Days > -1000) {
        status_C_prob -= 0.12;
        status_CL_prob += 0.01;
    }

    if (Age > 150000) {
        status_C_prob = 0.2111;
        status_CL_prob = 0.01;
        status_D_prob = 0.07;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
