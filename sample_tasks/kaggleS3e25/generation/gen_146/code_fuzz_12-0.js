
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.96;
    var Status_CL = 0.15;
    var Status_D = 0.84;
    
    if (N_Days <= -2000.11) {
        Status_C = 0.5222;
        Status_CL = 0.4;
        Status_D = 0.5;
    } else if (N_Days > 2000.1110999999999 && N_Days <= -3000.11) {
        Status_C = 0.6222;
        Status_CL = 0.30000000000000004;
        Status_D = 0.30000000000000004;
    } else if (N_Days > -3000.11) {
        Status_C = 0.9;
        Status_CL = 0.03;
        Status_D = 0.30000000000000004;
    }
    
    if (Bilirubin > 2.5111) {
        Status_C *= 0.24;
        Status_D *= 1.7222;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_CL *= 1.2;
        Status_D *= 1.4;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
