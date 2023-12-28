
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="3244", Drug="Placebo", Age="15574", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="273.0", Albumin="3.74", Copper="27.0", Alk_Phos="1204.0", SGOT="72.85", Tryglicerides="67.0", Platelets="427.0", Prothrombin="10.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.47;
    var status_CL_prob = 0.07;
    var status_D_prob = 0.26;

    if (SGOT > -69.89) {
        status_C_prob -= 0;
        status_D_prob += 1.4772254600114998e-18;
    }

    if (Age > 59.8889) {
        status_C_prob -= -0.11;
        status_CL_prob += -0.04;
    }

    if (Platelets < 165.98) {
        status_D_prob += 0.53;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
