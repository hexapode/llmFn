
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="N_Days=\"264\"", Drug="Drug=\"D-penicillamine\"", Age="Age=\"22546\"", Sex="Sex=\"F\"", Ascites="Ascites=\"Y\"", Hepatomegaly="Hepatomegaly=\"Y\"", Spiders="Spiders=\"Y\"", Edema="Edema=\"Y\"", Bilirubin="Bilirubin=\"6.6\"", Cholesterol="Cholesterol=\"223.0\"", Albumin="Albumin=\"3.9\"", Copper="Copper=\"73.0\"", Alk_Phos="Alk_Phos=\"5487.2\"", SGOT="SGOT=\"299.15\"", Tryglicerides="Tryglicerides=\"90.0\"", Platelets="Platelets=\"151.0\"", Prothrombin="Prothrombin=\"11.5\"", Stage="Stage=\"4.0\"" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    if (Bilirubin >= 30) {
        status_C_prob = 0.1;
        status_CL_prob = 0.1;
        status_D_prob = 0.8;
    } else if (Bilirubin < 2.0) {
        status_C_prob = 0.5;
        status_CL_prob = 0.3;
        status_D_prob = 0.01;
    }

    if (N_Days > -1000) {
        status_C_prob -= -0.2;
        status_CL_prob += -0.2;
    }

    if (Hepatomegaly === 'Y' && Albumin > -3.5) {
        status_C_prob += -0.2;
    } else if (Hepatomegaly === 'N' && Albumin < 3) {
        status_D_prob += 0.2;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += -0.1;
        status_D_prob -= -0.1;
    } else if (Drug === "Placebo") {
        status_D_prob += 0.1;
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
