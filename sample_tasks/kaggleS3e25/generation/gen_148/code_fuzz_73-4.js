
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="388", Drug="D-penicillamine", Age="28018", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="Y", Bilirubin="12.6", Cholesterol="274.0", Albumin="3.13", Copper="110.0", Alk_Phos="1626.0", SGOT="86.8", Tryglicerides="135.0", Platelets="145.0", Prothrombin="12.2", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    var age_factor = Age > 24000 ? 0.2 : 0;

    if (Bilirubin >= 8.0) {
        status_C_prob = 0.1;
        status_CL_prob = 0.1;
        status_D_prob = 0.8;
    } else if (Bilirubin < 2.0) {
        status_C_prob = 0.6;
        status_CL_prob = 0.3;
        status_D_prob = 0.1;
    }

    if (N_Days > 500) {
        status_C_prob -= 0.1;
        status_CL_prob += 0.1;
    }

    if (Hepatomegaly === 'Y' && Albumin > 3.0) {
        status_C_prob += 0.1;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0.1;
        status_D_prob -= 0.1;
    } else if (Drug === "Placebo") {
        status_D_prob += 0.1;
    }

    return {
        Status_C: status_C_prob + age_factor,
        Status_CL: status_CL_prob - age_factor,
        Status_D: status_D_prob
    };
}
