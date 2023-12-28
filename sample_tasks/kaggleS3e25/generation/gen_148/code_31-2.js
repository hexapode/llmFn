
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var status_C_prob = 0.3;
    var status_CL_prob = 0.3;
    var status_D_prob = 0.4;

    var age_factor = Age / 10000;
    var bilirubin_factor = Bilirubin / 4;
    var cholesterol_factor = Cholesterol / 200;
    var prothrombin_factor = 1 - (Prothrombin / 15);
    
    var total_factor = (age_factor + bilirubin_factor + cholesterol_factor + prothrombin_factor) / 4;

    status_C_prob -= total_factor * 0.1;
    status_CL_prob += total_factor * 0.05;
    status_D_prob += total_factor * 0.05;

    return {
        Status_C: status_C_prob,
        Status_CL: status_CL_prob,
        Status_D: status_D_prob
    };
}
