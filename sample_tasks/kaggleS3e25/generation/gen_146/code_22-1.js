
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.5;
    var Status_CL = 0.3;
    var Status_D = 0.2;
    
    if (N_Days <= 2500) {
        Status_C = 0.6;
        Status_CL = 0.3;
        Status_D = 0.1;
    } else if (N_Days <= 3000) {
        Status_C = 0.4;
        Status_CL = 0.4;
        Status_D = 0.2;
    } else if (N_Days <= 3500) {
        Status_C = 0.3;
        Status_CL = 0.5;
        Status_D = 0.2;
    } else {
        Status_C = 0.2;
        Status_CL = 0.3;
        Status_D = 0.5;
    }
    
    if (Bilirubin > 2) {
        Status_C *= 0.4;
        Status_CL *= 0.4;
        Status_D *= 0.2;
    } else {
        Status_C *= 0.6;
        Status_CL *= 0.3;
        Status_D *= 0.1;
    }
    
    var Alk_Phos_Level = "normal";
    if (Alk_Phos > 1000) {
        Alk_Phos_Level = "high";
    } else if (Alk_Phos > 500) {
        Alk_Phos_Level = "elevated";
    }
    
    switch(Alk_Phos_Level) {
        case "normal":
            Status_C *= 0.7;
            Status_CL *= 0.2;
            Status_D *= 0.1;
            break;
        case "elevated":
            Status_C *= 0.3;
            Status_CL *= 0.4;
            Status_D *= 0.3;
            break;
        case "high":
            Status_C *= 0.1;
            Status_CL *= 0.3;
            Status_D *= 0.6;
            break;
        default:
            Status_C *= 0.5;
            Status_CL *= 0.4;
            Status_D *= 0.1;
    }
    
    if (Copper > 100) {
        Status_C *= 0.1;
        Status_CL *= 0.2;
        Status_D *= 0.7;
    } else if (Copper > 50) {
        Status_C *= 0.3;
        Status_CL *= 0.4;
        Status_D *= 0.3;
    }
    
    if (Drug === "D-penicillamine") {
        Status_C *= 0.2;
        Status_CL *= 0.2;
        Status_D *= 0.6;
    } else {
        Status_C *= 0.4;
        Status_CL *= 0.4;
        Status_D *= 0.2;
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
    
    var AgeFactor = Age > 12000 ? 0.3 : 0.6;
    Status_C *= AgeFactor;
    Status_CL *= (1 - AgeFactor);
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
