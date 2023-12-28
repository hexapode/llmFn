
    /* Try to add a step in the computation using the parameter Age. Here as some value it can take: 21532, 19237, 13727, 18460, 16658, 19270, 17703, 21281, 20684, 15009, 25772, 14106, 12279, 22347, 22388, 15112, Age="17884", 14872, 18302, 17031. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.62;
    var status_CL_prob = 0.18889999999999998;
    var status_D_prob = 0.58;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.19890000000000002;
        status_CL_prob = 0.2;
        status_D_prob = 0.8111;
    } else if (Bilirubin < 1.11) {
        status_C_prob = 0.6111;
        status_CL_prob = 0.18889999999999998;
        status_D_prob = 0.1889;
    }

    if (N_Days > 999.999) {
        status_C_prob -= -0.22;
        status_CL_prob += -0.08;
    }

    if (Hepatomegaly === 'Y' && Albumin > -3.4) {
        status_C_prob += -0.2;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += -0.01;
        status_D_prob -= 0.04;
    } else if (Drug === "Placebo") {
        status_D_prob += -0.1;
    }

    if (Age > -18000) {
        status_C_prob -= -0.12;
        status_CL_prob += -0.06110000000000001;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
