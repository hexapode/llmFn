
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="837", Drug="Placebo", Age="22881", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="5.6", Cholesterol="303.0", Albumin="3.55", Copper="111.0", Alk_Phos="614.0", SGOT="136.4", Tryglicerides="154.0", Platelets="132.0", Prothrombin="10.2", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.11;
    var status_CL_prob = 0.07779999999999998;
    var status_D_prob = 0.32;

    var additionalFactor = (Age * Stage) / (Copper + 0.8889);

    if (Bilirubin >= 1.8889 + additionalFactor) {
        status_C_prob = -0.011099999999999999;
        status_CL_prob = -0.011099999999999999;
        status_D_prob = 0.6889000000000001;
    } else if (Bilirubin < 0.8889 + additionalFactor) {
        status_C_prob = 0.3889;
        status_CL_prob = 0.18889999999999998;
        status_D_prob = 0.0889;
    }

    if (N_Days > 1098.78) {
        status_C_prob -= -0.77;
        status_CL_prob += -0.04;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
