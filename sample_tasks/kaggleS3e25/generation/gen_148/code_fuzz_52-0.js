
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="78", Drug="Placebo", Age="17703", Sex="F", Ascites="Y", Hepatomegaly="Y", Spiders="Y", Edema="S", Bilirubin="17.1", Cholesterol="175.0", Albumin="3.91", Copper="207.0", Alk_Phos="2078.0", SGOT="182.9", Tryglicerides="75.0", Platelets="268.0", Prothrombin="11.5", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.2;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.5;

    if (Bilirubin >= 2.0) {
        status_C_prob = 0.1;
        status_CL_prob = 0.1;
        status_D_prob = 0.8;
    } else if (Bilirubin < 1.0) {
        status_C_prob = 0.5;
        status_CL_prob = 0.2;
        status_D_prob = 0.3;
    }
  
    var ageFactor = (Age - 16000) / 10000; 
    status_C_prob -= ageFactor * 0.1;
    status_CL_prob += ageFactor * 0.1;

    if (Ascites === 'Y' && Edema === 'S') {
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
