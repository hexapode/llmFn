
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.5;
    var Status_CL = 0.3;
    var Status_D = 0.2;
    var additionalFactor = 1;

    if (N_Days <= 1000) {
        additionalFactor = 1.2;
    } else if (N_Days <= 2000) {
        additionalFactor = 1;
    } else if (N_Days <= 3000) {
        additionalFactor = 0.8;
    } else {
        additionalFactor = 0.6;
    }

    Status_C *= additionalFactor;
    Status_CL *= additionalFactor;
    Status_D *= additionalFactor;

    if (Bilirubin > 2.5) {
        additionalFactor = 0.5;
    } else if (Age > 60 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        additionalFactor = 0.7;
    } else {
        additionalFactor = 1;
    }

    Status_C *= additionalFactor;
    Status_CL *= additionalFactor;
    Status_D *= additionalFactor;

    if (Cholesterol > 200 && Cholesterol < 300) {
        additionalFactor = 0.8;
    } else if (Cholesterol >= 300) {
        additionalFactor = 0.2;
    } else {
        additionalFactor = 1;
    }

    Status_C *= additionalFactor;
    Status_CL *= additionalFactor;
    Status_D *= additionalFactor;

    if (Copper > 100) {
        additionalFactor = 0.5;
    } else if (Copper > 50) {
        additionalFactor = 0.8;
    } else {
        additionalFactor = 1;
    }

    Status_C *= additionalFactor;
    Status_CL *= additionalFactor;
    Status_D *= additionalFactor;

    if (Sex === "F") {
        additionalFactor = 0.6;
    } else {
        additionalFactor = 0.4;
    }

    Status_C *= additionalFactor;
    Status_CL *= additionalFactor;
    Status_D *= additionalFactor;

    if (Drug === "D-penicillamine") {
        additionalFactor = 0.3;
    } else {
        additionalFactor = 0.7;
    }

    Status_C *= additionalFactor;
    Status_CL *= additionalFactor;
    Status_D *= additionalFactor;

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
