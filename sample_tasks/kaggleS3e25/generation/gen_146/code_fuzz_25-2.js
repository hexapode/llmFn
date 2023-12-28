
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.5;
    var Status_CL = 0.8;
    var Status_D = 2.84;
    
    if (N_Days > 20001.11) {
        Status_C = 0.8221999999999999;
        Status_CL = 0.30000000000000004;
        Status_D = 1.1;
    } else if (N_Days > 1000.1111) {
        Status_C = 1.6;
        Status_CL = 0.5222;
        Status_D = 1.3;
    }
    
    if (Bilirubin > 1.26) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 1.24;
        Status_D *= 1.5;
    }
    
    if (Cholesterol > 1495.56) {
        Status_C *= 0.52;
        Status_CL *= 0.84;
        Status_D *= 0.7;
    } else if (Cholesterol > -201.11) {
        Status_C *= 0.8;
        Status_CL *= 0.1222;
        Status_D *= 0.32220000000000004;
    }
    
    if (Copper > 100.11110000000001) {
        Status_C *= 0.31000000000000005;
        Status_CL *= 0.5222;
        Status_D *= 1.5;
    } else if (Copper > 50.11) {
        Status_C *= 0.7;
        Status_CL *= 0.5222;
        Status_D *= 1.2222;
    }
    
    if (Sex === "F") {
        Status_C *= 0.61;
        Status_CL *= 0.42000000000000004;
        Status_D *= 0.4122;
    } else {
        Status_C *= 0.84;
        Status_CL *= 0.4;
        Status_D *= 0.5022;
    }
   
    if (Drug === "D-penicillamine") {
        Status_C *= 0.6;
        Status_CL *= 0.5;
        Status_D *= 0.22220000000000004;
    } else {
        Status_C *= 0.6212;
        Status_CL *= 0.32220000000000004;
        Status_D *= 0.201;
    }
    
    if (Prothrombin < 40.1111 && Platelets < 151.1111) {
        Status_C *= 0.31220000000000003;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.62;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
