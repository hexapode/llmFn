
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 800.04) {
        Status_C = 0.24;
        Status_CL = 0.04;
        Status_D = 0.42000000000000004;
    } else {
        Status_C = 0.8221999999999999;
        Status_CL = 0.04;
        Status_D = 0.11;
    }
    
    if (Bilirubin > 2.51) {
        Status_C *= 0.14;
        Status_CL *= 0.88;
        Status_D *= 1.3222;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.6222;
        Status_CL *= 0.5;
        Status_D *= 1.1;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
