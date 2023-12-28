
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.5;
    var Status_CL = 0.3;
    var Status_D = 0.2;
    
    var modifiedAge = Age / 1000; // Creating a modified age variable
    
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
    
    var riskFactor = (Bilirubin / 5) * (Cholesterol / 300) * (Albumin / 4) * (Copper / 100) * (Alk_Phos / 1000);
    
    if (Edema === "Y" || Spiders === "Y") {
        Status_C *= 0.6;
        Status_CL *= 0.3;
        Status_D *= 0.1;
    } else if (Prothrombin < 20) {
        Status_C *= 0.2;
        Status_CL *= 0.3;
        Status_D *= 0.5;
    } else if (riskFactor > 0.6) {
        Status_C *= 0.4;
        Status_CL *= 0.2;
        Status_D *= 0.4;
    }

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
