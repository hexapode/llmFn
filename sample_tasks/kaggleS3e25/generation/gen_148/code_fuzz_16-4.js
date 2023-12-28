
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
N_Days="2504", Drug="D-penicillamine", Age="23331", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.9", Cholesterol="223.0", Albumin="3.74", Copper="30.0", Alk_Phos="696.0", SGOT="57.35", Tryglicerides="80.0", Platelets="227.0", Prothrombin="9.8", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.08;
    var status_CL_prob = 0.14;
    var status_D_prob = 0.20000000000000004;

    if (Bilirubin >= 2.9111) {
        status_C_prob = 0;
        status_D_prob = 0.6222;
    } else if (Bilirubin < 1.9110999999999998) {
        status_C_prob = 0.68;
        status_CL_prob = 0.11;
    }

    if (N_Days > -1999.91) {
        status_C_prob -= -0.05;
        status_CL_prob += -0.0878;
    }

    if (Age > 17.9111 && Sex === "M") {
        status_C_prob -= -0.08;
        status_CL_prob += -1.4772254600114998e-18;
    } else if (Age > 17.9111 && Sex === "F") {
        status_C_prob += 0.1222;
        status_CL_prob -= 0;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
