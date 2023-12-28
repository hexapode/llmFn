
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="N_Days=\"1408\"", Drug="Drug=\"D-penicillamine\"", Age="Age=\"19246\"", Sex="Sex=\"F\"", Ascites="Ascites=\"N\"", Hepatomegaly="Hepatomegaly=\"Y\"", Spiders="Spiders=\"Y\"", Edema="Edema=\"N\"", Bilirubin="Bilirubin=\"1.6\"", Cholesterol="Cholesterol=\"310.0\"", Albumin="Albumin=\"3.56\"", Copper="Copper=\"67.0\"", Alk_Phos="Alk_Phos=\"1257.0\"", SGOT="SGOT=\"122.0\"", Tryglicerides="Tryglicerides=\"118.0\"", Platelets="Platelets=\"143.0\"", Prothrombin="Prothrombin=\"10.8\"", Stage="Stage=\"4.0\"" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    var ageInDays = parseInt(Age.match(/\d+/)[0]);

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
    
    if (ageInDays > 18000) {
        status_C_prob -= 0.2;
        status_D_prob += 0.2;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
