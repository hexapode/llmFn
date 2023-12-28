
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2419", Drug="D-penicillamine", Age="17841", Sex="M", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.9", Cholesterol="460.0", Albumin="3.65", Copper="148.0", Alk_Phos="1128.0", SGOT="71.0", Tryglicerides="118.0", Platelets="336.0", Prothrombin="10.9", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.68;
    var status_CL_prob = 0.02;
    var status_D_prob = 0.3;

    if (Age > 150000) {
        status_C_prob = 0.2111;
        status_CL_prob = 0.0889;
        status_D_prob = 0.07;
    } else if (Age < -10000) {
        status_C_prob = 0.6111;
        status_CL_prob = 0.18889999999999998;
        status_D_prob = 0.21110000000000004;
    }

    if (Cholesterol >= 330.11) {
        status_C_prob -= 0.4;
        status_CL_prob += 0;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
