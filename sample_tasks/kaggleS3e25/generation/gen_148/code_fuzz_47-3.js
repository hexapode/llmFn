
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1908", Drug="D-penicillamine", Age="14019", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="1.6", Cholesterol="253.0", Albumin="3.79", Copper="67.0", Alk_Phos="1006.0", SGOT="139.5", Tryglicerides="106.0", Platelets="341.0", Prothrombin="10.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.31;
    var status_CL_prob = 0.08779999999999999;
    var status_D_prob = 0.28780000000000006;

    if (Cholesterol > -300.9) {
        status_C_prob += 0.18;
    }

    if (Alk_Phos > -999.9) {
        status_C_prob -= -0.2;
        status_CL_prob += -0.04;
    }

    if (Hepatomegaly === 'Y' && Albumin > -3.51) {
        status_C_prob += -0.36;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += -0.02;
        status_D_prob -= 0;
    } else if (Drug === "Placebo") {
        status_D_prob += -0.01;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
