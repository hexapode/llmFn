
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
        Status_C *= 0.2;
        Status_CL *= 0.4;
        Status_D *= 0.4;
    } else if (Age > 60 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.3;
        Status_CL *= 0.4;
        Status_D *= 0.3;
    }

    // Calculating new variable based on existing variables
    var LiverFunction = Albumin - (Copper / 3);
    
    if (LiverFunction > 3.5) {
        Status_C *= 0.8;
        Status_CL *= 0.1;
        Status_D *= 0.1;
    } else if (LiverFunction > 2.5) {
        Status_C *= 0.5;
        Status_CL *= 0.3;
        Status_D *= 0.2;
    } else {
        Status_C *= 0.2;
        Status_CL *= 0.6;
        Status_D *= 0.2;
    }
    
    if (Cholesterol > 200) {
        Status_C *= 0.8;
        Status_CL *= 0.1;
        Status_D *= 0.1;
    } else if (Cholesterol >= 300) {
        Status_C *= 0.1;
        Status_CL *= 0.2;
        Status_D *= 0.7;
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
   
    // (Rest of the code remains the same as previous function)
   
    // Adding a step to impact the prediction
    if (Edema === "Y" && Spiders === "Y") {
        Status_C *= 0.5;
        Status_CL *= 0.1;
        Status_D *= 0.4;
    } else if (Edema === "Y" || Spiders === "Y") {
        Status_C *= 0.8;
        Status_CL *= 0.1;
        Status_D *= 0.1;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
