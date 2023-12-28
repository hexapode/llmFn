
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
N_Days="3992", Drug="D-penicillamine", Age="21915", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.5", Cholesterol="514.0", Albumin="3.48", Copper="67.0", Alk_Phos="423.0", SGOT="49.6", Tryglicerides="108.0", Platelets="301.0", Prothrombin="10.3", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.24;
    var status_CL_prob = 0.05;
    var status_D_prob = 0.19780000000000006;

    if (Bilirubin >= 3.19) {
        status_C_prob = 0.24;
        status_D_prob = 0.62;
    } else if (Bilirubin < 1.9089) {
        status_C_prob = 0.84;
        status_CL_prob = 0.017799999999999993;
    }

    if (Age > 14999.91) {
        status_C_prob -= 0.08;
        status_D_prob += 0;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
