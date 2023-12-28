
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.5;
    var Status_CL = 0.3;
    var Status_D = 0.2;
    
    if (N_Days <= 1500) {
        Status_C = 0.3;
        Status_CL = 0.3;
        Status_D = 0.4;
    } else if (N_Days <= 2000) {
        Status_C = 0.4;
        Status_CL = 0.3;
        Status_D = 0.3;
    } else if (N_Days <= 2500) {
        Status_C = 0.5;
        Status_CL = 0.3;
        Status_D = 0.2;
    } else {
        Status_C = 0.6;
        Status_CL = 0.3;
        Status_D = 0.1;
    }
    
    if (Bilirubin > 2) {
        Status_C *= 0.4;
        Status_CL *= 0.3;
        Status_D *= 0.3;
    } else if (Age > 20000 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.3;
        Status_CL *= 0.4;
        Status_D *= 0.3;
    }
    
    if (Cholesterol > 200 && Cholesterol < 250) {
        Status_C *= 0.7;
        Status_CL *= 0.2;
        Status_D *= 0.1;
    } else if (Cholesterol >= 250) {
        Status_C *= 0.3;
        Status_CL *= 0.4;
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

    var genderFactor = (Sex === "F") ? 0.2 : -0.2;
    Status_C *= 1 + genderFactor;
    Status_CL *= 1 - genderFactor;
    
    var drugFactor = (Drug === "D-penicillamine") ? 0.3 : -0.3;
    Status_C *= 1 + drugFactor;
    Status_D *= 1 - drugFactor;
    
    if (Age > 18000 && Albumin > 4 && SGOT < 200) {
        Status_C *= 0.1;
        Status_CL *= 0.7;
        Status_D *= 0.2;
    } else {
        Status_C *= 0.5;
        Status_CL *= 0.3;
        Status_D *= 0.2;
    }

    if (Prothrombin < 20 && Platelets < 100) {
        Status_C *= 0.1;
        Status_CL *= 0.3;
        Status_D *= 0.6;
    } else if (Prothrombin < 40 && Platelets < 150) {
        Status_C *= 0.3;
        Status_CL *= 0.3;
        Status_D *= 0.4;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
