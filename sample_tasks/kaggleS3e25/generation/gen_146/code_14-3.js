
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.5;
    var Status_CL = 0.3;
    var Status_D = 0.2;
    
    if (N_Days <= 1000) {
        if (Bilirubin > 2.5) {
            Status_C = 0.1;
            Status_CL = 0.1;
            Status_D = 0.8;
        } else if (Age > 60) {
            Status_C = 0.2;
            Status_CL = 0.3;
            Status_D = 0.5;
        } else {
            Status_C = 0.4;
            Status_CL = 0.4;
            Status_D = 0.2;
        }
    } else if (N_Days <= 2000) {
        if (Cholesterol > 200) {
            Status_C = 0.7;
            Status_CL = 0.2;
            Status_D = 0.1;
        } else {
            Status_C = 0.3;
            Status_CL = 0.4;
            Status_D = 0.3;
        }
    } else {
        if (Hepatomegaly === "Y") {
            Status_C = 0.2;
            Status_CL = 0.5;
            Status_D = 0.3;
        } else {
            Status_C = 0.6;
            Status_CL = 0.3;
            Status_D = 0.1;
        }
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
