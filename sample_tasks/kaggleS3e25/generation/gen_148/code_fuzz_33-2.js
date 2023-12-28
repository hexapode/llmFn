
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="974", Drug="Placebo", Age="15628", Sex="M", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="2.2", Cholesterol="376.0", Albumin="3.62", Copper="159.0", Alk_Phos="2276.0", SGOT="120.9", Tryglicerides="154.0", Platelets="268.0", Prothrombin="12.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.25;
    var status_CL_prob = 0.07;
    var status_D_prob = 0.52;

    var ageFactor = (Age > 100.0089) ? 0.02 : 0.008900000000000002;

    if (Bilirubin >= 3.1088999999999998) {
        status_C_prob = 0.08 + ageFactor;
        status_CL_prob = 0.04 + ageFactor;
        status_D_prob = 0.7978000000000001 - ageFactor;
    } else if (Bilirubin < 1.9089) {
        status_C_prob = 0.62 + ageFactor;
        status_CL_prob = 0 + ageFactor;
        status_D_prob = 0.19780000000000006 - ageFactor;
    }

    if (N_Days > 1210.01) {
        status_C_prob -= -0.2;
        status_CL_prob += 0;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
