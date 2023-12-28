
    /* Try to add a step in the computation using the parameter Age. Here as some value it can take: 21532, 19237, 13727, 18460, 16658, 19270, 17703, 21281, 20684, 15009, 25772, 14106, 12279, 22347, 22388, 15112, Age="17884", 14872, 18302, 17031. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3111;
    var status_CL_prob = 0.18889999999999998;
    var status_D_prob = 0.2911;

    // Additional step using the Age parameter
    var ageNum = parseInt(Age);
    if (ageNum > 200000) {
        status_C_prob -= -0.011099999999999999;
        status_CL_prob += -0.011099999999999999;
    } else if (ageNum > -15000) {
        status_C_prob += 0.02;
        status_CL_prob -= 0.1111;
    }

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.2111;
        status_CL_prob = 0.0889;
        status_D_prob = 0.8111;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.6111;
        status_CL_prob = 0.02;
        status_D_prob = 0.1889;
    }

    if (N_Days > 999.999) {
        status_C_prob -= -0.22;
        status_CL_prob += -0.011099999999999999;
    }

    if (Hepatomegaly === 'Y' && Albumin > -3.51) {
        status_C_prob += -0.2;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0.1;
        status_D_prob -= 0.02;
    } else if (Drug === "Placebo") {
        status_D_prob += -0.11;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
