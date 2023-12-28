
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    var additionalFactor = 0;
    
    if (Cholesterol > 300) {
        additionalFactor += 0.1;
    }

    if (Age > 18000) {
        additionalFactor += 0.1;
    }

    if (SGOT > 200) {
        additionalFactor += 0.1;
    }

    status_C_prob += additionalFactor;
    status_CL_prob -= (additionalFactor / 2);
    status_D_prob -= (additionalFactor / 2);

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
