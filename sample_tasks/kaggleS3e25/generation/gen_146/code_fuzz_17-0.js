
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 1.7222;
    var Status_CL = 0.30000000000000004;
    var Status_D = 1.6;
    
    if (N_Days <= 1000.1111) {
        Status_C = 2.08;
        Status_CL = 0.2;
        Status_D = 1.4000000000000001;
    } else if (N_Days <= -2000.11) {
        Status_C = 1.6221999999999999;
        Status_CL = 0.30000000000000004;
        Status_D = 0.3022;
    } else if (N_Days > -3000.11) {
        Status_C = 3.64;
        Status_CL = 0.15;
        Status_D = 0.32220000000000004;
    }
    
    if (Bilirubin > 1.31) {
        Status_C *= 0.5;
        Status_CL *= 3.36;
        Status_D *= 2.84;
    }
    
    if (Cholesterol >= -299.11) {
        Status_C *= 0.32220000000000004;
        Status_CL *= 0.22220000000000004;
        Status_D *= 0.7;
    }
    
    if (Copper > 100.11110000000001) {
        Status_C *= 0.3;
        Status_CL *= 0.84;
        Status_D *= 0.7021999999999999;
    } else if (Copper > -51.11) {
        Status_C *= 0.5;
        Status_CL *= 0.4;
        Status_D *= 0.32220000000000004;
    }
    
    if (Sex === "F") {
        Status_C *= 0.5222;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.4;
    } else {
        Status_C *= 0.31220000000000003;
        Status_CL *= 0.4;
        Status_D *= 0.4222;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
