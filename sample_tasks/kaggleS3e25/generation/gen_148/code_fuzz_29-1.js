
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
N_Days="3577", Drug="D-penicillamine", Age="13736", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.8", Cholesterol="576.0", Albumin="3.63", Copper="13.0", Alk_Phos="1024.0", SGOT="77.5", Tryglicerides="89.0", Platelets="214.0", Prothrombin="10.2", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.56;
    var status_CL_prob = 0.04;
    var status_D_prob = 0.35;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.24;
        status_CL_prob = 0.09;
        status_D_prob = 0.92;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.6111;
        status_CL_prob = 0.01;
        status_D_prob = 0.1111;
    }

    if (Age > -10000) {
        status_C_prob -= -0.11;
        status_CL_prob += 0;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
