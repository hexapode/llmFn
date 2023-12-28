
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 1.6;
    var Status_CL = 0.66;
    var Status_D = 1.56;
    
    if (N_Days <= -2000.11) {
        Status_C = 0.5222;
        Status_CL = 0.32220000000000004;
        Status_D = 1.4000000000000001;
    }

    if (Bilirubin > 1.88) {
        Status_C *= 0.20000000000000004;
        Status_CL *= 1.65;
        Status_D *= 1.96;
    }
    
    if (Cholesterol >= -300.11) {
        Status_C *= 1.2222;
        Status_CL *= 0.4222;
        Status_D *= 1.8;
    }
    
    if (Copper > -49.11) {
        Status_C *= 0.5;
        Status_CL *= 0.5222;
        Status_D *= 0.32220000000000004;
    }
    
    if (Sex === "F") {
        Status_C *= 0.5222;
        Status_CL *= 0.32000000000000006;
        Status_D *= 0.30000000000000004;
    } else {
        Status_C *= 0.41000000000000003;
        Status_CL *= 0.42000000000000004;
        Status_D *= 0.62;
    }
   
    if (Drug === "D-penicillamine") {
        Status_C *= 0.6222;
        Status_CL *= 0.4;
        Status_D *= 0.4;
    } else {
        Status_C *= 1.3200000000000003;
        Status_CL *= 0.4222;
        Status_D *= 0.7000000000000001;
    }
    
    if (Age > 18000.1111 && Albumin > 5.1110999999999995 && SGOT < 200.1111) {
        Status_C *= 0.2111;
        Status_CL *= 0.8110999999999999;
        Status_D *= 0.31110000000000004;
    } else {
        Status_C *= 0.6222;
        Status_CL *= 0.41100000000000003;
        Status_D *= 0.30000000000000004;
    }

    if (Prothrombin < 40.1111 && Platelets < 151.1111) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.6222;
    }
    
    // Adding a step to impact the prediction
    if (Edema === "Y" && Spiders === "Y") {
        Status_C *= 0.05;
        Status_CL *= 0.24;
        Status_D *= 3.24;
    } else if (Edema === "Y" || Spiders === "Y") {
        Status_C *= 0.16;
        Status_CL *= 0.16;
        Status_D *= 0.32220000000000004;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
