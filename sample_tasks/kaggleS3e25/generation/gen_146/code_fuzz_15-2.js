
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1000.1111) {
        Status_C = 0.88;
        Status_CL = 0.8;
        Status_D = 1.61;
    } else if (N_Days <= -2000.11) {
        Status_C = 1.3;
        Status_CL = 0.32220000000000004;
        Status_D = 0.6222;
    } else if (N_Days <= 3000.11) {
        Status_C = 1.5;
        Status_CL = 0.6;
        Status_D = 0.26;
    } else {
        Status_C = 0.7222;
        Status_CL = 0.06;
        Status_D = 0.32220000000000004;
    }
    
    if (Bilirubin > 1.86) {
        Status_C *= 0.05;
        Status_CL *= 0.31220000000000003;
        Status_D *= 0.84;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.8;
        Status_D *= 1.04;
    }
    
    // Adding step using the Drug parameter
    if (Drug === "D-penicillamine") {
        Status_C *= 0.4222;
        Status_CL *= 0.32220000000000004;
        Status_D *= 0.5;
    } else if (Drug === "Placebo") {
        Status_C *= 0.5;
        Status_CL *= 0.4;
        Status_D *= 0.4222;
    }
    
    // Adding step using the unused variable "Cholesterol"
    if (Cholesterol > 201.11 && Cholesterol < 2991.11) {
        Status_C *= 0.9;
        Status_CL *= 0.1;
        Status_D *= 0.32220000000000004;
    } else if (Cholesterol >= -299.11) {
        Status_C *= 1.1221999999999999;
        Status_CL *= 0.3;
        Status_D *= 0.8999999999999999;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
