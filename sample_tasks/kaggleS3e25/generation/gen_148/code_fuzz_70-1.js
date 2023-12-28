
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2689", Drug="D-penicillamine", Age="22897", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.1", Cholesterol="347.0", Albumin="3.53", Copper="90.0", Alk_Phos="1166.0", SGOT="141.05", Tryglicerides="87.0", Platelets="95.0", Prothrombin="11.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;
    
    var ageFactor = Math.min(Math.max((Age - 18) / 100, 0), 1);
    var bilirubinFactor = Math.min(Bilirubin / 2.0, 1);
    var albuminFactor = Math.min((Albumin - 2.5) / 1, 1);
    var prothrombinFactor = Math.min((14 - Prothrombin) / 3, 1);

    status_C_prob -= ageFactor * 0.1;
    status_CL_prob += bilirubinFactor * 0.2;
    status_D_prob += albuminFactor * 0.3;
    status_D_prob += prothrombinFactor * 0.2;

    if (Hepatomegaly === 'Y' && Ascites === 'N') {
        status_C_prob += 0.1;
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
