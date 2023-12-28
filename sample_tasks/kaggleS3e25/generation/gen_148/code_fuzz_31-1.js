
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="1614", Drug="D-penicillamine", Age="15712", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.8", Cholesterol="310.0", Albumin="3.42", Copper="33.0", Alk_Phos="1052.0", SGOT="80.6", Tryglicerides="105.0", Platelets="307.0", Prothrombin="10.2", Stage="3.0" */
    
    
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

    var ageFactor = Math.exp(-Age / 150000);
    var stageFactor = Stage / 10.0;
    var albuminFactor = Albumin / 4.0;
    var bilirubinFactor = Bilirubin / 3.0;

    var combinedFactor = ageFactor * stageFactor * albuminFactor * bilirubinFactor;

    if (N_Days > 1000) {
        status_C_prob -= 0.1;
        status_CL_prob += 0.1;
    }

    return {
        Status_C: status_C_prob * combinedFactor,
        Status_CL: status_CL_prob * combinedFactor,
        Status_D: status_D_prob * combinedFactor
    };
}
