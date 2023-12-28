
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="2221", Drug="D-penicillamine", Age="20510", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="Y", Edema="N", Bilirubin="0.7", Cholesterol="172.0", Albumin="2.53", Copper="18.0", Alk_Phos="5487.2", SGOT="60.45", Tryglicerides="96.0", Platelets="223.0", Prothrombin="11.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var age_factor = Math.min(Age / 100, 1); 
    var bilirubin_factor = 1 - Math.min(Bilirubin / 2.0, 1);
    var status_C_prob = 0.3 + age_factor - bilirubin_factor;
    var status_CL_prob = 0.3 - age_factor + bilirubin_factor;
    var status_D_prob = 0.4 - age_factor;

    if (N_Days > 1000) {
        status_C_prob -= 0.1;
        status_CL_prob += 0.1;
    }

    if (Hepatomegaly === 'Y' && Albumin > 3.5) {
        status_C_prob += 0.2;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0.1;
        status_D_prob -= 0.1;
    } else if (Drug === "Placebo") {
        status_D_prob += 0.1;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
