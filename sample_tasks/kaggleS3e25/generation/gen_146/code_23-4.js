
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.5;
    var Status_CL = 0.3;
    var Status_D = 0.2;
    
    if (N_Days <= 1000) {
        Status_C = 0.2;
        Status_CL = 0.4;
        Status_D = 0.4;
    } else if (N_Days <= 2000) {
        Status_C = 0.3;
        Status_CL = 0.3;
        Status_D = 0.4;
    } else if (N_Days <= 3000) {
        Status_C = 0.4;
        Status_CL = 0.3;
        Status_D = 0.3;
    } else {
        Status_C = 0.6;
        Status_CL = 0.3;
        Status_D = 0.1;
    }
    
    if (Bilirubin > 2.5) {
        Status_C *= 0.5;
        Status_CL *= 0.3;
        Status_D *= 0.2;
    } else if (Age > 15000 && Age < 20000) {
        Status_C *= 0.4;
        Status_CL *= 0.3;
        Status_D *= 0.3;
    }
    
    if (Cholesterol > 300 && Cholesterol < 400) {
        Status_C *= 0.7;
        Status_CL *= 0.2;
        Status_D *= 0.1;
    } else if (Cholesterol >= 400) {
        Status_C *= 0.2;
        Status_CL *= 0.3;
        Status_D *= 0.5;
    }
    
    if (Copper > 50) {
        Status_C *= 0.3;
        Status_CL *= 0.3;
        Status_D *= 0.4;
    } else if (Copper > 20 && Copper <= 50) {
        Status_C *= 0.6;
        Status_CL *= 0.2;
        Status_D *= 0.2;
    }
    
    // Adding a step based on the patient's sex and Drug
    if (Sex === "F" && Drug === "D-penicillamine") {
        Status_C *= 0.3;
        Status_CL *= 0.4;
        Status_D *= 0.3;
    } else {
        Status_C *= 0.4;
        Status_CL *= 0.4;
        Status_D *= 0.2;
    }
    
    // Adding a step based on the combination of Albumin and SGOT
    if (Albumin > 3.5 && SGOT < 150) {
        Status_C *= 0.1;
        Status_CL *= 0.6;
        Status_D *= 0.3;
    } else {
        Status_C *= 0.6;
        Status_CL *= 0.3;
        Status_D *= 0.1;
    }

    if (Prothrombin < 15 && Platelets < 100) {
        Status_C *= 0.1;
        Status_CL *= 0.2;
        Status_D *= 0.7;
    } else if (Prothrombin < 20 && Platelets < 150) {
        Status_C *= 0.3;
        Status_CL *= 0.4;
        Status_D *= 0.3;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
