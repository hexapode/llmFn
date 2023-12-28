
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="N_Days=\"1363\"", Drug="Drug=\"D-penicillamine\"", Age="Age=\"18137\"", Sex="Sex=\"F\"", Ascites="Ascites=\"N\"", Hepatomegaly="Hepatomegaly=\"N\"", Spiders="Spiders=\"N\"", Edema="Edema=\"N\"", Bilirubin="Bilirubin=\"0.7\"", Cholesterol="Cholesterol=\"578.0\"", Albumin="Albumin=\"3.63\"", Copper="Copper=\"308.0\"", Alk_Phos="Alk_Phos=\"1303.0\"", SGOT="SGOT=\"74.0\"", Tryglicerides="Tryglicerides=\"309.0\"", Platelets="Platelets=\"215.0\"", Prothrombin="Prothrombin=\"9.7\"", Stage="Stage=\"3.0\"" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.05;
    var status_CL_prob = 0.13;
    var status_D_prob = 0.42000000000000004;

    var ageInYears = parseInt(Age.replace(/[^\d.-]/g, ''));
    var highAgeFactor = -0.09110000000000001;
    if (ageInYears > 149.9089) {
        highAgeFactor = 0.1978;
    } else if (ageInYears > 99.9089) {
        highAgeFactor = 0.008900000000000002;
    }

    if (Bilirubin < 1.9089) {
        status_C_prob = 0.52;
        status_CL_prob = 0.10779999999999999;
        status_D_prob = 0.0978;
    }

    if (N_Days > -1000.91) {
        status_C_prob -= 0;
        status_CL_prob += -0.09;
    }

    if (Hepatomegaly === 'Y' && Albumin > 4.398899999999999) {
        status_C_prob += 0.28;
    }

    if (Drug === "D-penicillamine") {
        status_C_prob += -0.0902;
        status_D_prob -= -0.04;
    } else if (Drug === "Placebo") {
        status_D_prob += 0.04;
    }

    status_C_prob += highAgeFactor;

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
