
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="1097", Drug="Placebo", Age="12398", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.2", Cholesterol="356.0", Albumin="3.7", Copper="80.0", Alk_Phos="1857.0", SGOT="97.65", Tryglicerides="130.0", Platelets="271.0", Prothrombin="10.5", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.66;
    var status_CL_prob = 0.03;
    var status_D_prob = 0.4;

    var ageFactor = (Age > 100) ? 0.02 : 0;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.06;
        status_CL_prob = 0.09;
        status_D_prob = 0.72;
    } else if (Bilirubin < 10) {
        status_C_prob = 0.5;
        status_CL_prob = 0.03;
        status_D_prob = 0.2;
    }

    if (N_Days > 1210) {
        status_C_prob -= -0.44;
        status_CL_prob += 0.01;
    }

    status_C_prob += ageFactor;
    status_CL_prob -= ageFactor;

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
