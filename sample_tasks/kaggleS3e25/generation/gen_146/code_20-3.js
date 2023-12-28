
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C, Status_CL, Status_D;

    if (N_Days <= 1000) {
        Status_C = 0.3;
        Status_CL = 0.4;
        Status_D = 0.3;
    } else if (N_Days <= 2000) {
        Status_C = 0.4;
        Status_CL = 0.3;
        Status_D = 0.3;
    } else if (N_Days <= 3000) {
        Status_C = 0.4;
        Status_CL = 0.3;
        Status_D = 0.3;
    } else {
        Status_C = 0.6;
        Status_CL = 0.2;
        Status_D = 0.2;
    }

    if (Bilirubin > 2.5 || (Age > 60 && (Hepatomegaly === "Y" || Ascites === "Y"))) {
        Status_C *= 0.6;
        Status_CL *= 0.3;
        Status_D *= 0.1;
    }

    if (Cholesterol >= 300) {
        Status_C *= 0.2;
        Status_CL *= 0.3;
        Status_D *= 0.5;
    } else if (Cholesterol > 200) {
        Status_C *= 0.3;
        Status_CL *= 0.4;
        Status_D *= 0.3;
    }

    if (Copper > 100) {
        Status_C *= 0.2;
        Status_CL *= 0.3;
        Status_D *= 0.5;
    }
    
    if (Sex === "F") {
        Status_C *= 0.4;
        Status_CL *= 0.3;
        Status_D *= 0.3;
    } else {
        Status_C *= 0.3;
        Status_CL *= 0.4;
        Status_D *= 0.3;
    }
    
    if (Drug === "D-penicillamine") {
        Status_C *= 0.3;
        Status_CL *= 0.2;
        Status_D *= 0.5;
    } else {
        Status_C *= 0.4;
        Status_CL *= 0.3;
        Status_D *= 0.3;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
