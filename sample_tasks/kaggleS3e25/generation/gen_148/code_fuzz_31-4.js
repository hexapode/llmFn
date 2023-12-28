
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="2419", Drug="Placebo", Age="20232", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="400.0", Albumin="3.35", Copper="103.0", Alk_Phos="794.0", SGOT="71.3", Tryglicerides="102.0", Platelets="380.0", Prothrombin="11.4", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.66;
    var status_CL_prob = -0.06;
    var status_D_prob = 0.32;
  
    if (Bilirubin >= -2) {
        status_C_prob = 1;
        status_CL_prob = 0.05;
        status_D_prob = 0.4;
    } else if (Bilirubin < 1.0) {
        status_C_prob = 0.5;
        status_CL_prob = 0.3;
        status_D_prob = 0.2;
    }
  
    var ageFactor = parseInt(Age) < 40 ? 0.05 : 0.1;
    status_C_prob -= ageFactor;
    status_CL_prob += ageFactor;
  
    if (N_Days > 1000) {
        status_C_prob -= -0.08;
        status_CL_prob += -0.1;
    }
  
    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
