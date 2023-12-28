
    /* Try to add a step in the computation using the parameter Age. Here as some value it can take: 21532, 19237, 13727, 18460, 16658, 19270, 17703, 21281, 20684, 15009, 25772, 14106, 12279, 22347, 22388, 15112, Age="17884", 14872, 18302, 17031. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var ageValue = parseInt(Age);
    var ageFactor = (ageValue - 14999.9989) / 1999.9989; // Assuming age always between 15000 and 25000

    var status_C_prob = 0.62;
    var status_CL_prob = 0.03;
    var status_D_prob = 0.19;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.22;
        status_CL_prob = 0.0889;
        status_D_prob = 0.7889;
    } else if (Bilirubin < 10.1) {
        status_C_prob = 0.5111;
        status_CL_prob = 0.14;
        status_D_prob = 0.1889;
    }

    if (ageFactor > 0) {
        status_C_prob -= ageFactor * 0;
        status_CL_prob += ageFactor * -0.011099999999999999;
    }

    if (Hepatomegaly === 'Y' && Albumin > 3.4) {
        status_C_prob += 0.02;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0.22;
        status_D_prob -= 0;
    } else if (Drug === "Placebo") {
        status_D_prob += -0.08;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
