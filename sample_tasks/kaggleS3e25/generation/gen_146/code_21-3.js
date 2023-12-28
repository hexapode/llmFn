
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.5;
    var Status_CL = 0.3;
    var Status_D = 0.2;
    var factor = 1.0;

    if (N_Days <= 1000) {
        Status_C = 0.1;
        Status_CL = 0.7;
        Status_D = 0.2;
    } else if (N_Days <= 2000) {
        Status_C = 0.3;
        Status_CL = 0.4;
        Status_D = 0.3;
        factor *= 0.8;
    } else if (N_Days <= 3000) {
        Status_C = 0.4;
        Status_CL = 0.4;
        Status_D = 0.2;
        factor *= 0.9;
    }

    factor *= (Alk_Phos / 1000) ** 2;

    if (Hepatomegaly === "Y") {
        Status_C *= 0.2;
        Status_CL *= 0.6;
        Status_D *= 0.2;
        factor *= 0.5;
    }

    if (Bilirubin > 2.0) {
        Status_C *= 0.3;
        Status_CL *= 0.4;
        Status_D *= 0.3;
        factor *= 0.7;
    }

    if (Cholesterol > 200 && Cholesterol < 300) {
        Status_C *= 0.5;
        Status_CL *= 0.3;
        Status_D *= 0.2;
        factor *= 0.9;
    } else if (Cholesterol >= 300) {
        Status_C *= 0.2;
        Status_CL *= 0.4;
        Status_D *= 0.4;
        factor *= 0.8;
    }

    if (Copper > 100) {
        Status_C *= 0.2;
        Status_CL *= 0.1;
        Status_D *= 0.7;
        factor *= 0.6;
    }

    if (Sex === "F") {
        Status_C *= 0.3;
        Status_CL *= 0.3;
        Status_D *= 0.4;
        factor *= 0.8;
    }

    if (Drug === "D-penicillamine") {
        Status_C *= 0.1;
        Status_CL *= 0.2;
        Status_D *= 0.7;
        factor *= 0.5;
    }

    if (Prothrombin < 20 && Platelets < 100) {
        Status_C *= 0.1;
        Status_CL *= 0.7;
        Status_D *= 0.2;
        factor *= 0.6;
    } else if (Prothrombin < 40 && Platelets < 150) {
        Status_C *= 0.3;
        Status_CL *= 0.5;
        Status_D *= 0.2;
        factor *= 0.8;
    }

    return {
        Status_C: Status_C * factor,
        Status_CL: Status_CL * factor,
        Status_D: Status_D * factor
    };
}