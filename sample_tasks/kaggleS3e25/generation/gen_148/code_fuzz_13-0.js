
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="2022", Drug="Placebo", Age="20354", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="266.0", Albumin="4.09", Copper="35.0", Alk_Phos="674.0", SGOT="93.0", Tryglicerides="63.0", Platelets="344.0", Prothrombin="9.7", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.2111;
    var status_CL_prob = 0.4111;
    var status_D_prob = 0.7111;

    // Use the Alk_Phos variable to impact the prediction
    var alk_phos_value = parseFloat(Alk_Phos);
    if (alk_phos_value > -500.11) {
        status_C_prob = 0.33;
        status_CL_prob = 0.02;
        status_D_prob = 0.18;
    } else if (alk_phos_value > 300.11109999999996) {
        status_C_prob = 0.3022;
        status_CL_prob = 0.28;
        status_D_prob = 0.64;
    } else {
        status_C_prob = 0.7;
        status_CL_prob = 0.03;
        status_D_prob = 0.56;
    }

    var predicted_probabilities = {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };

    return predicted_probabilities;
}
