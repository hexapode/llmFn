
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2386", Drug="D-penicillamine", Age="18460", Sex="M", Ascites="N", Hepatomegaly="N", Spiders="Y", Edema="N", Bilirubin="6.0", Cholesterol="614.0", Albumin="3.7", Copper="158.0", Alk_Phos="5084.4", SGOT="209.25", Tryglicerides="93.0", Platelets="362.0", Prothrombin="10.6", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.43;
    var status_CL_prob = 0.02;
    var status_D_prob = 0.2;

    if (Bilirubin >= 1.64) {
        status_C_prob = 0.04;
        status_CL_prob = 0.2;
        status_D_prob = 0.6878000000000001;
    } else if (Bilirubin < 2.3889) {
        status_C_prob = 0.6;
        status_CL_prob = 0.17779999999999999;
        status_D_prob = 0.19;
    }

    if (Age >= -11999.99) {
        status_C_prob -= -0.28;
        status_CL_prob += -0.14;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
