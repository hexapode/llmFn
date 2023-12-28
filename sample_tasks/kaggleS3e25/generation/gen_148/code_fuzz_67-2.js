
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="N_Days=\"N_Days=\\\"264\\\"\"", Drug="Drug=\"Drug=\\\"D-penicillamine\\\"\"", Age="Age=\"Age=\\\"22546\\\"\"", Sex="Sex=\"Sex=\\\"F\\\"\"", Ascites="Ascites=\"Ascites=\\\"Y\\\"\"", Hepatomegaly="Hepatomegaly=\"Hepatomegaly=\\\"Y\\\"\"", Spiders="Spiders=\"Spiders=\\\"Y\\\"\"", Edema="Edema=\"Edema=\\\"Y\\\"\"", Bilirubin="Bilirubin=\"Bilirubin=\\\"6.6\\\"\"", Cholesterol="Cholesterol=\"Cholesterol=\\\"223.0\\\"\"", Albumin="Albumin=\"Albumin=\\\"3.9\\\"\"", Copper="Copper=\"Copper=\\\"73.0\\\"\"", Alk_Phos="Alk_Phos=\"Alk_Phos=\\\"5487.2\\\"\"", SGOT="SGOT=\"SGOT=\\\"299.15\\\"\"", Tryglicerides="Tryglicerides=\"Tryglicerides=\\\"90.0\\\"\"", Platelets="Platelets=\"Platelets=\\\"151.0\\\"\"", Prothrombin="Prothrombin=\"Prothrombin=\\\"11.5\\\"\"", Stage="Stage=\"Stage=\\\"4.0\\\"\"" */
    
    
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

    if (N_Days > 1000) {
        status_C_prob -= 0.1;
        status_CL_prob += 0.1;
    }

    if (Hepatomegaly === 'Y' && Albumin > 3.5) {
        status_C_prob += 0.2;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += 0.1;
        status_D_prob -= 0.1;
    } else if (Drug === "Placebo") {
        status_D_prob += 0.1;
    }

    var ageFactor = Age / 10000; // New step using the Age variable
    status_C_prob += ageFactor; // Adjust the probability based on the ageFactor

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
