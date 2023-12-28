
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.5;
    var Status_CL = 0.3;
    var Status_D = 0.2;
    var modifier = 1;

    if (N_Days <= 1000) {
        modifier = 1.5;
    } else if (N_Days <= 2000) {
        modifier = 1.3;
    } else if (N_Days <= 3000) {
        modifier = 1.2;
    } else {
        modifier = 0.8;
    }

    Status_C *= modifier;
    Status_CL *= modifier;
    Status_D *= modifier;

    if (Bilirubin > 2.5) {
        modifier = 0.3;
    } else if (Age > 60 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        modifier = 0.5;
    } else {
        modifier = 1;
    }

    Status_C *= modifier;
    Status_CL *= modifier;
    Status_D *= modifier;

    if (Cholesterol > 200 && Cholesterol < 300) {
        modifier = 0.9;
    } else if (Cholesterol >= 300) {
        modifier = 0.8;
    } else {
        modifier = 1;
    }

    Status_C *= modifier;
    Status_CL *= modifier;
    Status_D *= modifier;

    if (Copper > 100) {
        modifier = 0.6;
    } else if (Copper > 50) {
        modifier = 1.5;
    } else {
        modifier = 1;
    }

    Status_C *= modifier;
    Status_CL *= modifier;
    Status_D *= modifier;

    if (Sex === "F") {
        modifier = 0.5;
    } else {
        modifier = 1.5;
    }

    Status_C *= modifier;
    Status_CL *= modifier;
    Status_D *= modifier;

    if (Drug === "D-penicillamine") {
        modifier = 0.8;
    } else {
        modifier = 1.2;
    }

    Status_C *= modifier;
    Status_CL *= modifier;
    Status_D *= modifier;

    if (Age > 18000 && Albumin > 4 && SGOT < 200) {
        modifier = 0.3;
    } else {
        modifier = 1.5;
    }

    Status_C *= modifier;
    Status_CL *= modifier;
    Status_D *= modifier;

    if (Prothrombin < 20 && Platelets < 100) {
        modifier = 0.8;
    } else if (Prothrombin < 40 && Platelets < 150) {
        modifier = 1.2;
    } else {
        modifier = 1;
    }

    Status_C *= modifier;
    Status_CL *= modifier;
    Status_D *= modifier;

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
