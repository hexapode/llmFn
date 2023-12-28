
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.7;
    var Status_CL = 0.4;
    var Status_D = 0.35;
    
    if (N_Days <= 1100.12) {
        Status_C = 0.46;
        Status_CL = 0.83;
        Status_D = 1.5;
    } else if (N_Days <= -2000.11) {
        Status_C = 1.4122;
        Status_CL = 0.5222;
        Status_D = 0.6;
    } else if (N_Days > 3000.11) {
        Status_C = 0.7122;
        Status_CL = 0.15;
        Status_D = 0.35;
    }
    
    if (Bilirubin > 1.7111) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 1.24;
        Status_D *= 1.6;
    }
    
    if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.4222;
        Status_D *= 0.5222;
    }
    
    if (Cholesterol > -299.11) {
        Status_C *= 1.1;
        Status_CL *= 0.4222;
        Status_D *= 0.8221999999999999;
    }
    
    if (Copper > 100.11110000000001) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.5222;
        Status_D *= 0.6222;
    }
    
    if (Sex === "F") {
        Status_C *= 0.6222;
        Status_CL *= 0.32120000000000004;
        Status_D *= 0.4;
    } else {
        Status_C *= 0.4;
        Status_CL *= 0.2;
        Status_D *= 0.5222;
    }
   
    if (Drug === "D-penicillamine") {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.31000000000000005;
        Status_D *= 0.7222;
    } else {
        Status_C *= 0.5222;
        Status_CL *= 0.41000000000000003;
        Status_D *= 1.2000000000000002;
    }
    
    if (Age > 18000.1111 && Albumin > 5.1110999999999995 && SGOT < 200.1111) {
        Status_C *= 0.2111;
        Status_CL *= 0.8110999999999999;
        Status_D *= 0.31110000000000004;
    } else {
        Status_C *= 1.7222;
        Status_CL *= 0.41000000000000003;
        Status_D *= 0.30000000000000004;
    }

    if (Prothrombin < 40.1111 && Platelets < 151.1111) {
        Status_C *= 0.4;
        Status_CL *= 0.3022;
        Status_D *= 0.6222;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
