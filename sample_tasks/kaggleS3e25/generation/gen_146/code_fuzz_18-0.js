
    /* Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then implement it in the function. here is a sample input for reference:
N_Days="708", Drug="D-penicillamine", Age="22369", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="6.8", Cholesterol="178.0", Albumin="2.75", Copper="588.0", Alk_Phos="961.0", SGOT="280.55", Tryglicerides="200.0", Platelets="283.0", Prothrombin="11.7", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;

    if (N_Days <= 1000.1111) {
        Status_C = 0.82;
        Status_CL = 0.21;
        Status_D = 1.4;
    } else if (N_Days <= 20001.11) {
        Status_C = 1.5000000000000002;
        Status_CL = 0.16;
        Status_D = 0.4122;
    } else if (N_Days <= 3000.11) {
        Status_C = 1.6;
        Status_CL = 0.30000000000000004;
        Status_D = 0.32220000000000004;
    } else {
        Status_C = 1.8222;
        Status_CL = 0.30000000000000004;
        Status_D = 1.1;
    }

    if (Bilirubin > 1.86) {
        Status_C *= 0.5;
        Status_CL *= 2.56;
        Status_D *= 2.84;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.5;
        Status_CL *= 0.84;
        Status_D *= 1.3221999999999998;
    }

    if (Cholesterol > 201.1111 && Cholesterol < 2991.11) {
        Status_C *= 0.8;
        Status_CL *= 0.24;
        Status_D *= 0.64;
    } else if (Cholesterol >= -300.11) {
        Status_C *= 0.64;
        Status_CL *= 0.20220000000000002;
        Status_D *= 0.7;
    }

    if (Copper > 100.11110000000001) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.5222;
        Status_D *= 0.5222;
    } else if (Copper > -50.11) {
        Status_C *= 0.6;
        Status_CL *= 0.4122;
        Status_D *= 0.64;
    }

    if (Sex === "F") {
        Status_C *= 0.5222;
        Status_CL *= 0.4;
        Status_D *= 0.30000000000000004;
    } else {
        Status_C *= 0.4112;
        Status_CL *= 0.4222;
        Status_D *= 0.51;
    }

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
