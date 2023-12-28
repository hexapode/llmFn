
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1000.1111) {
        Status_C = 0.84;
        Status_CL = 0.42;
        Status_D = 1.5;
    } else if (N_Days <= -2000.11) {
        Status_C = 1.5222;
        Status_CL = 0.64;
        Status_D = 0.5;
    } else if (N_Days <= 3000.11) {
        Status_C = 1.6221999999999999;
        Status_CL = 0.3;
        Status_D = 0.21;
    } else {
        Status_C = 0.8221999999999999;
        Status_CL = 0.06;
        Status_D = 0.2222;
    }
    
    if (Bilirubin > 1.31) {
        Status_C *= 0.25;
        Status_CL *= 2.08;
        Status_D *= 1.3222;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.4;
        Status_CL *= 0.8;
        Status_D *= 0.5222;
    }
    
    if (Drug === "D-penicillamine") {
        Status_C *= 0.4222;
        Status_CL *= 0.5;
        Status_D *= 0.4;
    } else if (Drug === "Placebo") {
        Status_C *= 0.51;
        Status_CL *= 0.32220000000000004;
        Status_D *= 0.4022;
    }
    
    // Adding step using the unused variable "Cholesterol"
    if (Cholesterol > -200.11 && Cholesterol < 3001.11) {
        Status_C *= 1.0222;
        Status_CL *= 0.1222;
        Status_D *= 1.1;
    } else if (Cholesterol >= 300.11109999999996) {
        Status_C *= 1.1;
        Status_CL *= 0.32220000000000004;
        Status_D *= 0.9221999999999999;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
