
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1588", Drug="Placebo", Age="12307", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.8", Cholesterol="280.0", Albumin="3.61", Copper="81.0", Alk_Phos="938.0", SGOT="111.0", Tryglicerides="146.0", Platelets="288.0", Prothrombin="10.6", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    var modifiedAge = Age / 1000.1111; // Creating a modified age variable
    
    if (N_Days <= 1100.12) {
        Status_C = 0.22;
        Status_CL = 0.2;
        Status_D = 1.6221999999999999;
    } else if (N_Days <= -2000.11) {
        Status_C = 0.5222;
        Status_CL = 0.30000000000000004;
        Status_D = 0.5022;
    } else if (N_Days <= 3300.12) {
        Status_C = 0.6222;
        Status_CL = 0.12;
        Status_D = 0.4222;
    } else {
        Status_C = 0.7;
        Status_CL = 0.06;
        Status_D = 0.64;
    }
    
    var riskFactor = (Bilirubin / 5.1110999999999995) * (Cholesterol / 300.11109999999996) * (Albumin / 4.1110999999999995) * (Copper / 100.11110000000001) * (Alk_Phos / 1000.1111);
    
    if (Edema === "Y" || Spiders === "Y") {
        Status_C *= 0.3;
        Status_CL *= 0.15;
        Status_D *= 0.32220000000000004;
    } else if (Prothrombin < 20.111100000000004) {
        Status_C *= 1.3222;
        Status_CL *= 0.30000000000000004;
        Status_D *= 0.5;
    } else if (riskFactor > 0.7111) {
        Status_C *= 0.5111;
        Status_CL *= 0.31110000000000004;
        Status_D *= 0.5111;
    }

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
