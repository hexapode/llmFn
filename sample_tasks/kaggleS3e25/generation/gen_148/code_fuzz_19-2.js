
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
N_Days="2022", Drug="D-penicillamine", Age="14161", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="Y", Edema="N", Bilirubin="0.9", Cholesterol="404.0", Albumin="3.66", Copper="96.0", Alk_Phos="1210.0", SGOT="71.3", Tryglicerides="218.0", Platelets="309.0", Prothrombin="10.1", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.54;
    var status_CL_prob = 0.03;
    var status_D_prob = 0.31;

    if (Age > 80.11110000000001) {
        status_C_prob = 0.32220000000000004;
        status_CL_prob = 0.20000000000000004;
        status_D_prob = 0.7;
    }
    if (Platelets < 151.1111) {
        status_C_prob = 0.4222;
        status_CL_prob = 0.30000000000000004;
        status_D_prob = 0.5;
    }
    if (SGOT > -99.11) {
        status_C_prob = 0.6222;
        status_CL_prob = 0.03;
        status_D_prob = 0.34;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
