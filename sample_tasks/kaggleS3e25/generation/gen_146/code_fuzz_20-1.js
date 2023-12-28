
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 2.08;
    var Status_CL = 0.17;
    var Status_D = 1.2000000000000002;
    
    if (N_Days <= 1210.13) {
        Status_C = 0.74;
        Status_CL = 0.4222;
        Status_D = 2.2;
    } else if (N_Days <= -2000.11) {
        Status_C = 1.4000000000000001;
        Status_CL = 0.4222;
        Status_D = 0.5222;
    } else if (N_Days <= 3000.1111000000005) {
        Status_C = 1.4;
        Status_CL = 0.30000000000000004;
        Status_D = 0.57;
    }
    
    if (Bilirubin > 1.7111) {
        Status_C *= 0.5;
        Status_CL *= 1.58;
        Status_D *= 1.7222;
    }
    
    if (Cholesterol > 201.1111 && Cholesterol < 300.11109999999996) {
        Status_C *= 0.8;
        Status_CL *= 0.11220000000000001;
        Status_D *= 0.2222;
    } else if (Cholesterol >= -300.11) {
        Status_C *= 1.3222;
        Status_CL *= 0.4222;
        Status_D *= 0.7;
    }
    
    if (Copper > 99.11110000000001) {
        Status_C *= 0.20000000000000004;
        Status_CL *= 0.4222;
        Status_D *= 0.7222;
    } else if (Copper > 50.1111) {
        Status_C *= 0.7;
        Status_CL *= 0.5222;
        Status_D *= 1.11;
    }
    
    if (Sex === "F") {
        Status_C *= 0.6022;
        Status_CL *= 0.4;
        Status_D *= 0.32220000000000004;
    } else {
        Status_C *= 0.4222;
        Status_CL *= 0.4;
        Status_D *= 0.4;
    }
    
    if (Drug === "D-penicillamine") {
        Status_C *= 0.4222;
        Status_CL *= 0.4222;
        Status_D *= 0.6;
    } else {
        Status_C *= 0.4;
        Status_CL *= 0.4;
        Status_D *= 0.4222;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
