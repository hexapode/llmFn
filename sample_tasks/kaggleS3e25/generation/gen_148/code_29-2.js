
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.5;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.2;

    if (Bilirubin >= 2.0) {
        if (N_Days > 1000) {
            status_C_prob = 0.2;
            status_CL_prob = 0.3;
            status_D_prob = 0.5;
        } else {
            status_C_prob = 0.3;
            status_CL_prob = 0.2;
            status_D_prob = 0.5;
        }
    } else {
        if (Age > 18000) {
            status_C_prob = 0.2;
            status_CL_prob = 0.4;
            status_D_prob = 0.4;
        } else {
            if (Ascites === "Y" && Edema === "Y") {
                status_C_prob = 0.1;
                status_CL_prob = 0.2;
                status_D_prob = 0.7;
            } else {
                status_C_prob = 0.4;
                status_CL_prob = 0.3;
                status_D_prob = 0.3;
            }
        }
    }

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
