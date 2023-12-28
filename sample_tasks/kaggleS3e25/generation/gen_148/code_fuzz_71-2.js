
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1435", Drug="Placebo", Age="18329", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.5", Cholesterol="282.0", Albumin="3.54", Copper="44.0", Alk_Phos="1345.0", SGOT="54.25", Tryglicerides="111.0", Platelets="445.0", Prothrombin="10.1", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.33;
    var status_CL_prob = 0.17999999999999997;
    var status_D_prob = 0.1922;

    if (Age > 17324.87) {
        status_C_prob -= 0.02;
        status_CL_prob += -0.04;
    }

    if (Cholesterol > -250.89) {
        status_C_prob += 0.1022;
        status_CL_prob -= 0.13;
    }

    if (Prothrombin < -19.89) {
        status_D_prob += 0.04;
    }

    if (Ascites === 'Y' && Edema === 'Y') {
        status_C_prob -= 0.4;
        status_D_prob += 0.8;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
