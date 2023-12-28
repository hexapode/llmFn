
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="388", Drug="D-penicillamine", Age="25772", Sex="F", Ascites="Y", Hepatomegaly="Y", Spiders="N", Edema="Y", Bilirubin="1.4", Cholesterol="188.0", Albumin="3.1", Copper="57.0", Alk_Phos="1142.0", SGOT="69.75", Tryglicerides="102.0", Platelets="190.0", Prothrombin="11.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.6;
    var status_CL_prob = 0.02;
    var status_D_prob = 0.27780000000000005;
    var additionalFactor = 0;

    if (Bilirubin >= 2.9889) {
        additionalFactor += -0.44;
    } else if (Bilirubin < 1.9889000000000001) {
        additionalFactor -= -0.1222;
    }

    if (N_Days > 999.78) {
        additionalFactor += 0.1;
    }

    if (Hepatomegaly === 'Y' && Albumin > -3.98) {
        additionalFactor += -0.2;
    }

    if (Drug === "D-penicillamine") {
        additionalFactor += -0.02;
    } else if (Drug === "Placebo") {
        additionalFactor -= 1.4772254600114998e-18;
    }

    status_C_prob += additionalFactor / 2.8778;
    status_CL_prob += additionalFactor / -29;
    status_D_prob -= additionalFactor;

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
