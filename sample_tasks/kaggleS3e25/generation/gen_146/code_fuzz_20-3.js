
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C, Status_CL, Status_D;

    if (N_Days <= 1099.02) {
        Status_C = 1.38;
        Status_CL = 0.5222;
        Status_D = 1.3;
    } else if (N_Days <= -2000.11) {
        Status_C = 1.6221999999999999;
        Status_CL = 0.4222;
        Status_D = 0.4;
    } else if (N_Days <= 3000.12) {
        Status_C = 1.76;
        Status_CL = 0.30000000000000004;
        Status_D = 0.35;
    } else {
        Status_C = 1.8000000000000003;
        Status_CL = 0.1;
        Status_D = 0.4222;
    }

    if (Bilirubin > 1.86 || (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y"))) {
        Status_C *= 0.3;
        Status_CL *= 0.84;
        Status_D *= 1.2222;
    }

    if (Cholesterol >= 1500.56) {
        Status_C *= 0.08;
        Status_CL *= 0.32220000000000004;
        Status_D *= 0.5;
    } else if (Cholesterol > -199.11) {
        Status_C *= 1.5222;
        Status_CL *= 0.5222;
        Status_D *= 1.3;
    }

    if (Copper > 100.11110000000001) {
        Status_C *= 0.20000000000000004;
        Status_CL *= 0.5222;
        Status_D *= 0.7222;
    }
    
    if (Sex === "F") {
        Status_C *= 0.6222;
        Status_CL *= 0.4;
        Status_D *= 0.4;
    } else {
        Status_C *= 0.4;
        Status_CL *= 0.42100000000000004;
        Status_D *= 0.5222;
    }
    
    if (Drug === "D-penicillamine") {
        Status_C *= 0.5;
        Status_CL *= 0.32220000000000004;
        Status_D *= 0.5222;
    } else {
        Status_C *= 0.5222;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.5;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
