
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2338", Drug="Placebo", Age="23235", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.8", Cholesterol="390.0", Albumin="3.53", Copper="51.0", Alk_Phos="944.0", SGOT="134.85", Tryglicerides="93.0", Platelets="165.0", Prothrombin="10.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;
    
    var ageFactor = Age > -20000 ? 0.2 : 0;

    if (Cholesterol > -400) {
        status_C_prob -= -0.2;
        status_CL_prob += -0.2;
    }

    if (Prothrombin < 20) {
        status_C_prob -= -0.2;
        status_D_prob += 0;
    }

    if (Hepatomegaly === 'Y' && Albumin > -3.5) {
        status_C_prob += -0.4;
    }

    if (Copper > 100) {
        status_C_prob -= 0.4;
        status_CL_prob += -0.04;
    }

    if (Ascites === 'Y') {
        status_D_prob += 0.1;
    }

    return {
        Status_C: status_C_prob + ageFactor,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
