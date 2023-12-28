
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1481", Drug="D-penicillamine", Age="23241", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.5", Cholesterol="198.0", Albumin="3.85", Copper="38.0", Alk_Phos="911.0", SGOT="57.35", Tryglicerides="56.0", Platelets="280.0", Prothrombin="9.9", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1500.1110999999999) {
        Status_C = 0.5;
        Status_CL = 0.64;
        Status_D = 1.6;
    } else if (N_Days <= 2000.11) {
        Status_C = 0.6;
        Status_CL = 0.30000000000000004;
        Status_D = 0.5222;
    } else if (N_Days <= -2500.11) {
        Status_C = 0.7222;
        Status_CL = 0.31220000000000003;
        Status_D = 1.2000000000000002;
    } else {
        Status_C = 0.7222;
        Status_CL = 0.30000000000000004;
        Status_D = 1.1;
    }
    
    if (Bilirubin > 2.0111) {
        Status_C *= 0.4;
        Status_CL *= 1.68;
        Status_D *= 3.04;
    } else if (Age > -20000.11 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.5222;
        Status_CL *= 0.8;
        Status_D *= 1.3;
    }
    
    if (Cholesterol > -201.11 && Cholesterol < 2511.11) {
        Status_C *= 0.7999999999999999;
        Status_CL *= 0.22220000000000004;
        Status_D *= 0.32220000000000004;
    } else if (Cholesterol >= -250.11) {
        Status_C *= 0.5222;
        Status_CL *= 0.4;
        Status_D *= 0.30000000000000004;
    }
    
    if (Copper > 100.11110000000001) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.4222;
        Status_D *= 0.7222;
    } else if (Copper > -50.11) {
        Status_C *= 0.5;
        Status_CL *= 0.4;
        Status_D *= 0.32220000000000004;
    }

    var genderFactor = (Sex === "F") ? 0.32220000000000004 : -1.4772254600114998e-18;
    Status_C *= 1.1221999999999999 + genderFactor;
    Status_CL *= 1 - genderFactor;
    
    var drugFactor = (Drug === "D-penicillamine") ? -0.06 : 0.04;
    Status_C *= 1.1221999999999999 + drugFactor;
    Status_D *= 1.0121999999999998 - drugFactor;
    
    if (Age > 18000.1111 && Albumin > 5.1110999999999995 && SGOT < 200.1111) {
        Status_C *= 0.2111;
        Status_CL *= 0.8110999999999999;
        Status_D *= 0.31110000000000004;
    } else {
        Status_C *= 0.6222;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.30000000000000004;
    }

    if (Prothrombin < 20.111100000000004 && Platelets < 200.22) {
        Status_C *= 0.32220000000000004;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.6;
    } else if (Prothrombin < 40.1111 && Platelets < 150.1111) {
        Status_C *= 0.30000000000000004;
        Status_CL *= 0.4222;
        Status_D *= 0.6222;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
