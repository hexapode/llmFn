
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.5;
    var Status_CL = 0.3;
    var Status_D = 0.2;
    
    if (N_Days <= 2000) {
        Status_C = 0.7;
        Status_CL = 0.2;
        Status_D = 0.1;
    } else if (N_Days > 2000 && N_Days <= 3000) {
        Status_C = 0.6;
        Status_CL = 0.3;
        Status_D = 0.1;
    } else {
        Status_C = 0.5;
        Status_CL = 0.4;
        Status_D = 0.1;
    }
    
    if (Bilirubin > 2.5 || (Age > 60 && (Hepatomegaly === "Y" || Ascites === "Y"))) {
        Status_C *= 0.3;
        Status_CL *= 0.5;
        Status_D *= 0.2;
    }
    
    if (Cholesterol >= 300) {
        Status_C *= 0.2;
        Status_CL *= 0.3;
        Status_D *= 0.5;
    } else if (Cholesterol > 200) {
        Status_C *= 0.4;
        Status_CL *= 0.3;
        Status_D *= 0.3;
    }
    
    if (Copper > 100) {
        Status_C *= 0.2;
        Status_CL *= 0.3;
        Status_D *= 0.5;
    } else if (Copper > 50) {
        Status_C *= 0.5;
        Status_CL *= 0.4;
        Status_D *= 0.1;
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
    
    if (Stage === "III") {
        Status_C *= 0.2;
        Status_CL *= 0.3;
        Status_D *= 0.5;
    } else if (Stage === "II") {
        Status_C *= 0.4;
        Status_CL *= 0.4;
        Status_D *= 0.2;
    }

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
