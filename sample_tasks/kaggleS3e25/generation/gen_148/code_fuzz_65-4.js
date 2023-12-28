
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="N_Days=\"3090\"", Drug="Drug=\"D-penicillamine\"", Age="Age=\"11912\"", Sex="Sex=\"F\"", Ascites="Ascites=\"N\"", Hepatomegaly="Hepatomegaly=\"Y\"", Spiders="Spiders=\"N\"", Edema="Edema=\"N\"", Bilirubin="Bilirubin=\"1.2\"", Cholesterol="Cholesterol=\"279.0\"", Albumin="Albumin=\"3.5\"", Copper="Copper=\"39.0\"", Alk_Phos="Alk_Phos=\"724.0\"", SGOT="SGOT=\"75.95\"", Tryglicerides="Tryglicerides=\"106.0\"", Platelets="Platelets=\"306.0\"", Prothrombin="Prothrombin=\"11.1\"", Stage="Stage=\"3.0\"" */
    
    
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

    // New step using the Age variable
    if (Age > 10000) {
        status_C_prob -= 0.1;
        status_D_prob += 0.1;
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
