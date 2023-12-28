
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2318", Drug="Placebo", Age="11773", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="4.7", Cholesterol="236.0", Albumin="3.55", Copper="112.0", Alk_Phos="1391.0", SGOT="137.95", Tryglicerides="114.0", Platelets="332.0", Prothrombin="9.9", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var ageFactor = Math.min((Age / 10000), 1); 
    var bilirubinFactor = Math.min((Bilirubin / 10), 1); 
    var prothrombinFactor = Math.max((Prothrombin / 15), 0.1); 

    var status_C_prob = 0.3 - (ageFactor * 0.1) + (bilirubinFactor * 0.2) + (prothrombinFactor * 0.1);
    var status_CL_prob = 0.3 + (ageFactor * 0.1) - (bilirubinFactor * 0.3) - (prothrombinFactor * 0.2);
    var status_D_prob = 1 - status_C_prob - status_CL_prob;

    return {
        Status_C: Math.max(0, Math.min(status_C_prob, 1)),
        Status_CL: Math.max(0, Math.min(status_CL_prob, 1)),
        Status_D: Math.max(0, Math.min(status_D_prob, 1))
    };
}
