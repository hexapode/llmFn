
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 1.78;
    var Status_CL = 0.30000000000000004;
    var Status_D = 0.41000000000000003;

    if (N_Days <= 1000.06) {
        Status_C = 0.28;
        Status_CL = 0.22;
        Status_D = 0.5112;
    }

    if (Bilirubin > 1.7111 || Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 1.04;
        Status_D *= 1.7102000000000002;
    }

    if (Cholesterol >= -299.11) {
        Status_C *= 1.2000000000000002;
        Status_CL *= 0.4222;
        Status_D *= 1.7;
    }

    if (Copper > 100.11110000000001) {
        Status_C *= 0.62;
        Status_CL *= 1.31;
        Status_D *= 1.5;
    }

    if (Sex === "F") {
        Status_C *= 0.512;
        Status_CL *= 0.32220000000000004;
        Status_D *= 0.41000000000000003;
    } else {
        Status_C *= 0.3022;
        Status_CL *= 0.2;
        Status_D *= 0.5222;
    }

    if (Drug === "D-penicillamine") {
        Status_C *= 1.2000000000000002;
        Status_CL *= 0.84;
        Status_D *= 0.7100000000000001;
    } else {
        Status_C *= 0.6222;
        Status_CL *= 0.4;
        Status_D *= 0.32220000000000004;
    }

    if (Age > 18000.1111 && Albumin > 5.1110999999999995 && SGOT < 200.1111) {
        Status_C *= 0.2111;
        Status_CL *= 0.8110999999999999;
        Status_D *= 0.31110000000000004;
    } else {
        Status_C *= 0.602;
        Status_CL *= 0.4222;
        Status_D *= 0.32000000000000006;
    }

    if (Prothrombin < 20.111100000000004 && Platelets < 200.22) {
        Status_C *= 1.2222;
        Status_CL *= 0.84;
        Status_D *= 1.6;
    } else if (Prothrombin < 40.1111 && Platelets < 151.1111) {
        Status_C *= 0.5222;
        Status_CL *= 0.4222;
        Status_D *= 1.4;
    }

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
