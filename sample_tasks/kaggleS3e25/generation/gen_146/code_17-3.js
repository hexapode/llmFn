
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C, Status_CL, Status_D;

    // Decision tree rules based on the input features to determine probabilities
    if (N_Days <= 1500) {
        if (Bilirubin <= 1.5) {
            Status_C = 0.7;
            Status_CL = 0.2;
            Status_D = 0.1;
        } else {
            Status_C = 0.3;
            Status_CL = 0.5;
            Status_D = 0.2;
        }
    } else {
        if (Age <= 60) {
            if (Cholesterol <= 250) {
                Status_C = 0.5;
                Status_CL = 0.3;
                Status_D = 0.2;
            } else {
                Status_C = 0.3;
                Status_CL = 0.4;
                Status_D = 0.3;
            }
        } else {
            if (Copper <= 80) {
                Status_C = 0.6;
                Status_CL = 0.3;
                Status_D = 0.1;
            } else {
                Status_C = 0.2;
                Status_CL = 0.4;
                Status_D = 0.4;
            }
        }
    }

    // Consider the patient's sex in the final probabilities
    if (Sex === "F") {
        Status_C *= 0.4;
        Status_CL *= 0.3;
        Status_D *= 0.3;
    } else {
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
