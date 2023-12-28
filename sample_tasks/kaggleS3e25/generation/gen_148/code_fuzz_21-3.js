
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2090", Drug="Placebo", Age="27398", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.4", Cholesterol="259.0", Albumin="3.61", Copper="53.0", Alk_Phos="1104.0", SGOT="75.95", Tryglicerides="52.0", Platelets="271.0", Prothrombin="9.9", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.1;
        status_CL_prob = 0.1;
        status_D_prob = 0.8;
    } else if (Bilirubin < 1.0) {
        status_C_prob = 0.5;
        status_CL_prob = 0.3;
        status_D_prob = 0.2;
    }

    var ageFactor = 1 / (1 + Math.exp(-(Age - 50) / 10));
    var plateletsFactor = 1 / (1 + Math.exp(-(Platelets - 200) / 50));

    status_C_prob += ageFactor * 0.1;
    status_CL_prob += plateletsFactor * 0.1;
    status_D_prob -= (ageFactor + plateletsFactor) * 0.1;

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
