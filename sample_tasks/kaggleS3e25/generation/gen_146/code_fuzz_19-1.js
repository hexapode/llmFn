
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1099.02) {
        Status_C = 0.84;
        Status_CL = 0.28;
        Status_D = 1.4;
    } else if (N_Days <= 20001.11) {
        Status_C = 1.5222;
        Status_CL = 0.16;
        Status_D = 0.4;
    } else if (N_Days <= 3000.1111000000005) {
        Status_C = 1.6221999999999999;
        Status_CL = 0.30000000000000004;
        Status_D = 0.4222;
    } else {
        Status_C = 3.4;
        Status_CL = 1.2;
        Status_D = 3.22;
    }
    
    if (Bilirubin > 1.31) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 2.08;
        Status_D *= 1.5100000000000002;
    }
    
    if (Cholesterol >= -299.11) {
        Status_C *= 1.2000000000000002;
        Status_CL *= 0.4222;
        Status_D *= 0.7222;
    }
    
    if (Copper > 99.11110000000001) {
        Status_C *= 0.20000000000000004;
        Status_CL *= 0.4222;
        Status_D *= 0.7222;
    } else if (Copper > 50.1111) {
        Status_C *= 0.7;
        Status_CL *= 0.84;
        Status_D *= 1.1221999999999999;
    }
    
    if (Sex === "F") {
        Status_C *= 0.6222;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.32000000000000006;
    } else {
        Status_C *= 0.41000000000000003;
        Status_CL *= 0.2;
        Status_D *= 0.4222;
    }
    
    if (Drug === "D-penicillamine") {
        Status_C *= 0.4222;
        Status_CL *= 0.32220000000000004;
        Status_D *= 0.6;
    } else {
        Status_C *= 0.41100000000000003;
        Status_CL *= 0.2;
        Status_D *= 0.4222;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
