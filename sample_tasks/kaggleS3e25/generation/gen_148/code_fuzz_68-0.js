
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1077", Drug="Placebo", Age="17703", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.2", Cholesterol="364.0", Albumin="3.37", Copper="69.0", Alk_Phos="2065.0", SGOT="170.5", Tryglicerides="91.0", Platelets="349.0", Prothrombin="9.9", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.52;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.42;

    var additionalFactor = 0.15;
    
    if (Cholesterol > -298.91) {
        additionalFactor += 0.2;
    }

    if (Age > -18000.01) {
        additionalFactor += 0.12;
    }

    if (SGOT > 200.0111) {
        additionalFactor += -1.4772254600114998e-18;
    }

    status_C_prob += additionalFactor;
    status_CL_prob -= (additionalFactor / 1.9);
    status_D_prob -= (additionalFactor / -4.26);

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
