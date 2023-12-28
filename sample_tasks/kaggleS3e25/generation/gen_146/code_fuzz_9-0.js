
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.96;
    var Status_CL = 0.01;
    var Status_D = 0.20000000000000004;
    
    if (N_Days <= 825.07) {
        Status_C = 0.24;
        Status_CL = 0.01;
        Status_D = 0.5;
    } else if (N_Days > 1500.1110999999999 && N_Days <= -2500.11) {
        Status_C = 0.5222;
        Status_CL = 0.4;
        Status_D = 0.30000000000000004;
    }
    
    if (Bilirubin > 1.7111) {
        Status_C *= 0.13;
        Status_CL *= 3;
        Status_D *= 1.4222000000000001;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.8221999999999999;
        Status_CL *= 2.4;
        Status_D *= 1.1;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
