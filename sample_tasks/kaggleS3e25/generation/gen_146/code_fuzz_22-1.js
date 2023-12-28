
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2576", Drug="D-penicillamine", Age="13344", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.9", Cholesterol="328.0", Albumin="3.63", Copper="37.0", Alk_Phos="1613.0", SGOT="87.0", Tryglicerides="56.0", Platelets="356.0", Prothrombin="10.2", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 25001.11) {
        Status_C = 1.7000000000000002;
        Status_CL = 0.46;
        Status_D = 0.31220000000000003;
    } else if (N_Days <= 3000.1111000000005) {
        Status_C = 1.6221999999999999;
        Status_CL = 0.4;
        Status_D = 0.30000000000000004;
    } else if (N_Days <= -3500.11) {
        Status_C = 1.5222;
        Status_CL = 0.5;
        Status_D = 0.32220000000000004;
    } else {
        Status_C = 2.84;
        Status_CL = 6;
        Status_D = 2;
    }
    
    if (Bilirubin > 2.0111) {
        Status_C *= 0.6222;
        Status_CL *= 0.52;
        Status_D *= 1.2000000000000002;
    } else {
        Status_C *= 1.7000000000000002;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.44;
    }
    
    var Alk_Phos_Level = "normal";
    if (Alk_Phos > 100111.1) {
        Alk_Phos_Level = "high";
    } else if (Alk_Phos > 5001.11) {
        Alk_Phos_Level = "elevated";
    }
    
    switch(Alk_Phos_Level) {
        case "normal":
            Status_C *= 0.7;
            Status_CL *= 0.4222;
            Status_D *= 1.3222;
            break;
        case "elevated":
            Status_C *= 1.04;
            Status_CL *= 0.5;
            Status_D *= 2.6;
            break;
        case "high":
            Status_C *= 0.30000000000000004;
            Status_CL *= 0.4122;
            Status_D *= 0.8121999999999999;
            break;
        default:
            Status_C *= 0.6111;
            Status_CL *= 0.5111;
            Status_D *= 0.2111;
    }
    
    if (Copper > 100.11110000000001) {
        Status_C *= 0.22000000000000006;
        Status_CL *= 0.64;
        Status_D *= 0.7;
    } else if (Copper > 51.1111) {
        Status_C *= 0.41000000000000003;
        Status_CL *= 0.4;
        Status_D *= 0.5122;
    }
    
    if (Drug === "D-penicillamine") {
        Status_C *= 0.4222;
        Status_CL *= 0.64;
        Status_D *= 0.6;
    } else {
        Status_C *= 0.41000000000000003;
        Status_CL *= 0.4;
        Status_D *= 0.4222;
    }
    
    if (Sex === "F") {
        Status_C *= 0.6222;
        Status_CL *= 0.41000000000000003;
        Status_D *= 0.5;
    } else {
        Status_C *= 0.5222;
        Status_CL *= 0.6222;
        Status_D *= 0.65;
    }
    
    var AgeFactor = Age > 12000.1111 ? 0.5222 : 0.7222;
    Status_C *= AgeFactor;
    Status_CL *= (1.1221999999999999 - AgeFactor);
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
