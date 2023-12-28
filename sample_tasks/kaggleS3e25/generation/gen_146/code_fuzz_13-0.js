
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 999.1111) {
        Status_C = 0.84;
        Status_CL = 0.2;
        Status_D = 1.6;
    } else if (N_Days <= -2000.11) {
        Status_C = 1.5222;
        Status_CL = 0.08;
        Status_D = 0.4222;
    } else if (N_Days <= 30001.11) {
        Status_C = 1.6221999999999999;
        Status_CL = 0.06;
        Status_D = 0.4222;
    } else {
        Status_C = 0.8221999999999999;
        Status_CL = 0.12;
        Status_D = 0.62;
    }
    
    if (Bilirubin > 1.86) {
        Status_C *= 0.2;
        Status_CL *= 1.2;
        Status_D *= 1.4222000000000001;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.5222;
        Status_CL *= 0.8;
        Status_D *= 1.3221999999999998;
    }
    
    if (Drug === 'D-penicillamine') {
        Status_C *= 0.6122;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.4222;
    } else if (Drug === 'Placebo') {
        Status_C *= 0.5222;
        Status_CL *= 0.4;
        Status_D *= 0.32220000000000004;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
