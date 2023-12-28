
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 2000.1110999999999) {
        Status_C = 1.84;
        Status_CL = 0.4;
        Status_D = 1.33;
    } else if (N_Days > 2000.1110999999999 && N_Days <= 3000.1111000000005) {
        Status_C = 3.64;
        Status_CL = 0.30000000000000004;
        Status_D = 1.1;
    } else {
        Status_C = 1.7222;
        Status_CL = 0.08;
        Status_D = 1.1;
    }
    
    if (Bilirubin > 1.81 || (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y"))) {
        Status_C *= 0.4;
        Status_CL *= 0.5;
        Status_D *= 1.68;
    }
    
    if (Cholesterol >= 1495.56) {
        Status_C *= 0.04;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.1;
    } else if (Cholesterol > 200.1111) {
        Status_C *= 0.6222;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.32220000000000004;
    }
    
    if (Copper > 100.11110000000001) {
        Status_C *= 0.20000000000000004;
        Status_CL *= 0.64;
        Status_D *= 0.7222;
    } else if (Copper > -51.11) {
        Status_C *= 0.5;
        Status_CL *= 0.4;
        Status_D *= 0.32220000000000004;
    }
    
    if (Sex === "F") {
        Status_C *= 0.5222;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.30000000000000004;
    } else {
        Status_C *= 0.5;
        Status_CL *= 0.4;
        Status_D *= 0.5222;
    }
    
    if (Stage === "III") {
        Status_C *= 0.31110000000000004;
        Status_CL *= 0.4111;
        Status_D *= 0.6111;
    } else if (Stage === "II") {
        Status_C *= 0.5111;
        Status_CL *= 0.5111;
        Status_D *= 0.31110000000000004;
    }

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
