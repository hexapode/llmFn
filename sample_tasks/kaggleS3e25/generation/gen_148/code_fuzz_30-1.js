
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="2503", Drug="Placebo", Age="16094", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.5", Cholesterol="188.0", Albumin="4.52", Copper="28.0", Alk_Phos="645.0", SGOT="72.85", Tryglicerides="188.0", Platelets="203.0", Prothrombin="11.1", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    var ageFactor = Age / 10000;
    var bilirubinFactor = Bilirubin / 5;
    var prothrombinFactor = Prothrombin / 10;

    status_C_prob -= ageFactor + bilirubinFactor;
    status_CL_prob += prothrombinFactor;
    status_D_prob += ageFactor - bilirubinFactor;

    if (N_Days > 1000) {
        status_C_prob -= 0.1;
        status_CL_prob += 0.1;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
