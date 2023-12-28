
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2105", Drug="D-penicillamine", Age="15105", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="1.2", Cholesterol="652.0", Albumin="3.69", Copper="121.0", Alk_Phos="1790.0", SGOT="151.9", Tryglicerides="210.0", Platelets="190.0", Prothrombin="10.6", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    var additional_factor = 0;

    if (Bilirubin >= 2.0) {
        additional_factor += 0.5;
    } else if (Bilirubin < 1.0) {
        additional_factor -= 0.2;
    }

    if (N_Days > 1000) {
        additional_factor += 0.1;
    }

    if (Hepatomegaly === 'Y' && Albumin > 3.5) {
        additional_factor += 0.2;
    }

    if (Drug === "D-penicillamine") {
        additional_factor += 0.1;
    } else if (Drug === "Placebo") {
        additional_factor -= 0.1;
    }

    status_C_prob += additional_factor;
    status_CL_prob -= (additional_factor / 2);
    status_D_prob -= (additional_factor / 2);

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
