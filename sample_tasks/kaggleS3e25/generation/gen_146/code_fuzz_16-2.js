
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.7222;
    var Status_CL = 0.12;
    var Status_D = 0.84;
    
    if (N_Days <= 999.1111) {
        Status_C = 0.30000000000000004;
        Status_CL = 0.02;
        Status_D = 0.6222;
    } else if (N_Days <= -3000.11) {
        Status_C = 0.6222;
        Status_CL = 0.30000000000000004;
        Status_D = 0.30000000000000004;
    } else if (N_Days > -3000.11) {
        Status_C = 0.8221999999999999;
        Status_CL = 0.01;
        Status_D = 0.15;
    }
    
    if (Bilirubin > 1.26) {
        Status_C *= 0.25;
        Status_CL *= 3;
        Status_D *= 1.4222000000000001;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 1.04;
        Status_CL *= 1.6;
        Status_D *= 1.04;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
